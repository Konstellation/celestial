// @ts-ignore
import scryptsy from 'scrypt.js';
import { BinaryLike, createCipheriv, createDecipheriv, pbkdf2Sync, randomBytes } from 'crypto';
import { sha3 } from 'web3-utils';
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

export type KeystoreV3Struct = Keystore | string;
export type Salt = Buffer | string;

export enum AlgoType {
    PRF = 'hmac-sha256',
    SHA256 = 'sha256',
    AES128CTR = 'aes-128-ctr',
}
export enum KdfType {
    SCRYPT = 'scrypt',
    PBKDF2 = 'pbkdf2',
}

abstract class KdfParams {
    salt: Salt;
    dklen: number;

    constructor({ salt, dklen }: { salt: Salt; dklen: number }) {
        this.salt = salt;
        this.dklen = dklen;
    }
}
export class ScryptKdfParams extends KdfParams {
    n: number;
    r: number;
    p: number;

    constructor({ n, r, p, salt, dklen }: { n: number; r: number; p: number; salt: Salt; dklen: number }) {
        super({ salt, dklen });

        this.n = n;
        this.r = r;
        this.p = p;
    }
}
export class Pbkdf2Params extends KdfParams {
    prf: string;
    c: number;
    digest: string;

    constructor({
        prf,
        c,
        digest,
        salt,
        dklen,
    }: {
        prf: string;
        c: number;
        digest: string;
        salt: Salt;
        dklen: number;
    }) {
        super({ salt, dklen });

        this.prf = prf;
        this.c = c;
        this.digest = digest;
    }
}
interface KeystoreCrypto {
    cipher: AlgoType;
    ciphertext: string;
    cipherparams: {
        iv: Buffer | string;
    };
    kdf: KdfType;
    kdfparams: KdfParams;
    mac: string;
}

interface Keystore {
    address: string;
    crypto: KeystoreCrypto;
    id: string;
    version: number;
    public_key: string;
    name: string;
}

abstract class KDF {
    protected kdfParams: KdfParams;

    constructor(params: KdfParams) {
        if (typeof params.salt === 'string') {
            params.salt = Buffer.from(params.salt, 'hex');
        }
        this.kdfParams = params;
    }

    abstract getDerivedKey(password: string): Buffer;
    abstract getKdfParams(): KdfParams;
}

export class ScryptKdf extends KDF {
    constructor({ n = SCRYPT_N, r = SCRYPT_R, p = SCRYPT_P, dklen, salt }: ScryptKdfParams) {
        super({ salt, dklen, n, r, p } as ScryptKdfParams);
    }

    getDerivedKey(password: string): Buffer {
        const params = this.kdfParams as ScryptKdfParams;

        return scryptsy(Buffer.from(password), params.salt, params.n, params.r, params.p, params.dklen);
    }

    getKdfParams(): KdfParams {
        const params = this.kdfParams;
        params.salt = params.salt.toString('hex');
        return params;
    }
}

export class Pbkdf2 extends KDF {
    constructor({ prf = AlgoType.PRF, c = PBKDF2_C, dklen = DKLEN, digest = AlgoType.SHA256, salt }: Pbkdf2Params) {
        super({ dklen, salt, digest, prf, c } as Pbkdf2Params);
    }

    getDerivedKey(password: string): Buffer {
        const params = this.kdfParams as Pbkdf2Params;
        if (params.prf !== AlgoType.PRF) {
            throw new Error('Unsupported parameters to PBKDF2');
        }

        return pbkdf2Sync(Buffer.from(password), params.salt, params.c, params.dklen, params.digest);
    }

    getKdfParams(): KdfParams {
        const params = this.kdfParams;
        params.salt = params.salt.toString('hex');
        return params;
    }
}

export default class KeystoreV3 {
    import(keystoreV3: KeystoreV3Struct, password: string, nonStrict = false) {
        if (!password) {
            throw new Error('No password given.');
        }

        const { version, crypto, name } =
            typeof keystoreV3 === 'object'
                ? keystoreV3
                : (JSON.parse(nonStrict ? keystoreV3.toLowerCase() : keystoreV3) as Keystore);
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
    ): Keystore {
        if (!password) {
            throw new Error('No password given.');
        }

        const keyDF = this.getKdf({ kdf, kdfparams: { dklen, salt } });
        const derivedKey = keyDF.getDerivedKey(password);
        const ciphertext = this.encrypt(derivedKey, privateKey, { cipher: AlgoType.AES128CTR, cipherparams: { iv } });
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
                kdfparams: keyDF.getKdfParams(),
                mac: mac?.toString() || '',
            },
        };
    }

    getKdf({ kdf, kdfparams }: { kdf: KdfType; kdfparams: KdfParams }): KDF {
        switch (kdf) {
            case KdfType.SCRYPT:
                return new ScryptKdf(kdfparams as ScryptKdfParams);
            case KdfType.PBKDF2:
                return new Pbkdf2(kdfparams as Pbkdf2Params);
            default:
                throw new Error('Unsupported key derivation scheme');
        }
    }

    getCipherText({ ciphertext, mac }: Partial<KeystoreCrypto>, derivedKey: Buffer): Buffer {
        if (!ciphertext) throw new Error('ciphertext is undefined');
        const cipherText = Buffer.from(ciphertext, 'hex');
        // @ts-ignore
        const macCheck = sha3(Buffer.concat([derivedKey.slice(16, 32), cipherText]))?.replace('0x', '');
        if (macCheck !== mac) {
            throw new Error('Key derivation failed - possibly wrong password');
        }

        return cipherText;
    }

    checksum(derivedKey: Buffer, cipherText: Buffer): string | undefined {
        // @ts-ignore
        return sha3(Buffer.concat([derivedKey.slice(16, 32), Buffer.from(cipherText)]))?.replace('0x', '');
    }

    encrypt(derivedKey: Buffer, data: BinaryLike, { cipher, cipherparams }: Partial<KeystoreCrypto>): Buffer {
        if (!cipher || !cipherparams) throw new Error('cipher data is undefined');
        const cipheriv = createCipheriv(cipher, derivedKey.slice(0, 16), Buffer.from(cipherparams.iv as string, 'hex'));
        if (!cipheriv) {
            throw new Error('Unsupported cipher');
        }

        return Buffer.concat([cipheriv.update(data), cipheriv.final()]);
    }

    decrypt({ cipher, cipherparams: { iv } }: KeystoreCrypto, derivedKey: Buffer, cipherText: Buffer): Buffer {
        const decipher = createDecipheriv(cipher, derivedKey.slice(0, 16), Buffer.from(iv as string, 'hex'));

        return Buffer.concat([decipher.update(cipherText), decipher.final()]);
    }
}
