// @ts-ignore
import scryptsy from 'scrypt.js';
import { BinaryLike, CipherGCMTypes, createCipheriv, createDecipheriv, pbkdf2Sync, randomBytes } from 'crypto';
import web3Utils from 'web3-utils';
import { v4 } from 'uuid';
import { bech32ifyAccPub } from '../encoding/bech32';
import { marshalBinaryBare, PubKeyMeta } from '../encoding/amino';

export const VERSION = 3;
export const DKLEN = 32;
export const SALT_SIZE = 32;
export const IV_SIZE = 16;
export const ID_SIZE = 16;
export const SCRYPT_N = 8192;
export const SCRYPT_R = 8;
export const SCRYPT_P = 1;
export const PBKDF2_C = 262144;

type Salt = Buffer | string;
export type KeystoreV3 = Keystore | string;

enum AlgoType {
    PRF = 'hmac-sha256',
    SHA256 = 'sha256',
    AES128CTR = 'aes-128-ctr'
}
enum KdfType {
    SCRYPT = 'scrypt',
    PBKDF2 = 'pbkdf2'
}

interface KdfParams {
    salt: Salt;
    dklen: number;
}
interface ScryptKdfParams {
    n: number;
    r: number;
    p: number;
}
interface Pbkdf2Params {
    prf: string;
    c: number;
}
interface KeystoreCrypto {
    cipher: AlgoType,
    ciphertext: string,
    cipherparams: {
      iv: Buffer
    },
    kdf: KdfType,
    kdfparams: {
      dklen: number,
      n: number,
      p: number,
      r: number,
      salt: string
    },
    mac: string
  }
  interface ExportKeystoreCrypto {
    cipher: AlgoType,
    ciphertext: string,
    cipherparams: {
      iv: string
    },
    kdf: KdfType,
    kdfparams: {
      dklen: number,
      n: number,
      p: number,
      r: number,
      salt: string
    },
    mac: string
  }
interface Keystore {
    address: string,
    crypto: KeystoreCrypto,
    id: string,
    version: number,
    name: string
}		
interface ExportKeystore {
    address: string,
    crypto: ExportKeystoreCrypto,
    id: string,
    version: number,
    name: string
}

class KDF  {
    protected kdfParams: KdfParams;

    constructor({ salt, dklen = DKLEN }: KdfParams) {
        if (typeof salt === 'string') {
            salt = Buffer.from(salt, 'hex');
        }
        
        this.kdfParams = {
            salt,
            dklen,
        };
    }

    getDerivedKey(arg?: any) {
        throw new Error('Not implemented');
    }

    getKdfParams() {
        throw new Error('Not implemented');
    }
}

class ScryptKdf extends KDF implements ScryptKdfParams {
    n: number;
    r: number;
    p: number;

    constructor({ n = SCRYPT_N, r = SCRYPT_R, p = SCRYPT_P, dklen, salt }: KdfParams & ScryptKdfParams) {
        super({ salt, dklen });

        this.n = n;
        this.r =r;
        this.p = p;
    }

    override getDerivedKey(password: string): Buffer {
        return scryptsy(Buffer.from(password), this.kdfParams.salt, this.n, this.r, this.p, this.kdfParams.dklen);
    }

    getKdfParams(): KdfParams & ScryptKdfParams {
        return {
            salt: this.kdfParams.salt.toString('hex'),
            n: this.n,
            r: this.r,
            p: this.p,
            dklen: this.kdfParams.dklen,
        };
    }
}

class Pbkdf2 extends KDF implements Pbkdf2Params {
    c: number;
    prf: string;
    digest: string;

    constructor({ prf = AlgoType.PRF, c = PBKDF2_C, dklen = DKLEN, digest = AlgoType.SHA256, salt }: KdfParams & Pbkdf2Params & { digest: string }) {
        super({ dklen, salt });

        this.prf = prf;
        this.c = c;
        this.digest = digest;
    }

    getDerivedKey(password: string): Buffer {
        if (this.prf !== AlgoType.PRF) {
            throw new Error('Unsupported parameters to PBKDF2');
        }

        return pbkdf2Sync(Buffer.from(password), this.kdfParams.salt, this.c, this.kdfParams.dklen, this.digest);
    }

    getKdfParams(): KdfParams & Pbkdf2Params {
        return {
            salt: this.kdfParams.salt.toString('hex'),
            c: this.c,
            dklen: this.kdfParams.dklen,
            prf: this.prf,
        };
    }
}

export default class KeyStoreV3 {
    import(keystoreV3: KeystoreV3, password: string, nonStrict = false) {
        if (!password) {
            throw new Error('No password given.');
        }

        const { version, crypto, name } =
            typeof keystoreV3 === 'object' ? keystoreV3 : JSON.parse(nonStrict ? keystoreV3.toLowerCase() : keystoreV3) as Keystore;
        if (version !== VERSION) {
            throw new Error('Not a valid V3 wallet');
        }

        const derivedKey = this.getKdf(crypto).getDerivedKey(password);
        const cipherText = this.getCipherText(crypto, derivedKey);
        return {
            name,
            privateKey: this.decrypt(crypto, derivedKey, cipherText),
        };
    }

    export(
        password: string,
        privateKey: Buffer,
        publicKey: Buffer,
        address: string,
        name: string,
        {
            cipher = AlgoType.AES128CTR,
            kdf = KdfType.SCRYPT,
            dklen = DKLEN,
            salt = randomBytes(SALT_SIZE),
            iv = randomBytes(IV_SIZE),
        } = {},
    ): ExportKeystore {
        if (!password) {
            throw new Error('No password given.');
        }

        const keyDF = this.getKdf({kdf, kdfparams: { dklen, salt }});
        const derivedKey = keyDF.getDerivedKey(password);
        const ciphertext = this.encrypt(derivedKey, privateKey, { cipher: AlgoType.AES128CTR, cipherparams: {iv} });
        const mac = this.checksum(derivedKey, ciphertext);

        return {
            version: VERSION,
            id: v4({
                random: randomBytes(ID_SIZE),
            }),
            address,
            name,
            public_key: bech32ifyAccPub(marshalBinaryBare(publicKey, PubKeyMeta.Secp256k1)),
            crypto: {
                ciphertext: ciphertext.toString('hex'),
                cipherparams: {
                    iv: iv.toString('hex'),
                },
                cipher,
                kdf,
                // @ts-ignore
                kdfparams: keyDF.getKdfParams(),
                mac: mac?.toString() || '',
            },
        };
    }

    getKdf({kdf, kdfparams}: {kdf: KdfType, kdfparams: KdfParams}): ScryptKdf | Pbkdf2 {
        switch (kdf) {
            case KdfType.SCRYPT:
                return new ScryptKdf(kdfparams as KdfParams & ScryptKdfParams);
            case KdfType.PBKDF2:
                return new Pbkdf2(kdfparams as KdfParams & Pbkdf2Params & { digest: string });
            default:
                throw new Error('Unsupported key derivation scheme');
        }
    }

    getCipherText({ ciphertext, mac }: Partial<KeystoreCrypto>, derivedKey: Buffer): Buffer {
        if (!ciphertext) throw new Error('ciphertext is undefined');
        const cipherText = Buffer.from(ciphertext, 'hex');
        const macCheck = web3Utils.sha3(Buffer.concat([derivedKey.slice(16, 32), cipherText]))?.replace('0x', '');
        if (macCheck !== mac) {
            throw new Error('Key derivation failed - possibly wrong password');
        }

        return cipherText;
    }

    checksum(derivedKey: Buffer, cipherText: Buffer): string | undefined {
        return web3Utils.sha3(Buffer.concat([derivedKey.slice(16, 32), Buffer.from(cipherText)]))?.replace('0x', '');
    }

    encrypt(derivedKey: Buffer, data: BinaryLike, {cipher, cipherparams }: Partial<KeystoreCrypto>): Buffer {
        if (!cipher || !cipherparams) throw new Error('cipher data is undefined')
        const cipheriv = createCipheriv(cipher, derivedKey.slice(0, 16), cipherparams.iv);
        if (!cipheriv) {
            throw new Error('Unsupported cipher');
        }

        return Buffer.concat([cipheriv.update(data), cipheriv.final()]);
    }

    decrypt({ cipher, cipherparams: { iv } }: KeystoreCrypto, derivedKey: Buffer, cipherText: Buffer): Buffer {
        const decipher = createDecipheriv(cipher, derivedKey.slice(0, 16), Buffer.from(iv));

        return Buffer.concat([decipher.update(cipherText), decipher.final()]);
    }
}
