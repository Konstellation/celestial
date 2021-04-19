import * as bip39 from 'bip39';
import * as bip32 from 'bip32';
import { bech32 } from 'bech32';
import * as secp256k1 from 'secp256k1';
import { ECPair, ECPairInterface } from 'bitcoinjs-lib';
import btcaddr from '../crypto/btcaddr';
import { BASE64_REGEX, BECH32_MAIN_PREFIX, DEFAULT_KEY_PATH } from '../constants';
import { fromBase64, toBase64 } from '../encoding/base64';
import { PublicKeyType } from './publicKeyType';
import { fromHex } from '../encoding/hex';
import { bech32ifyAccPub } from '../encoding/bech32';

interface AccountKeyPair {
    mnemonic: string;
    // privateKey: string;
    publicKey: string;
    address: string;
    name: string;
}

export default class Account {
    sequence: string;
    accountNumber: string;
    path: string;
    bech32MainPrefix: string;
    mnemonic: string;
    name: string;
    private _privateKey: Buffer;

    constructor(bech32MainPrefix: string, path: string) {
        this.sequence = '';
        this.accountNumber = '';
        this.mnemonic = '';
        this.name = '';
        this._privateKey = Buffer.alloc(0);
        this.path = path;
        this.bech32MainPrefix = bech32MainPrefix;
    }

    async generate(): Promise<Account> {
        this.mnemonic = bip39.generateMnemonic(256);
        const seed = await bip39.mnemonicToSeed(this.mnemonic);
        const node = bip32.fromSeed(seed);
        const child = node.derivePath(this.path);
        if (!child.privateKey) throw new Error('child.privateKey is undefined');
        this._privateKey = child.privateKey;

        return this;
    }

    import({ privateKey, name }: { privateKey: Buffer; name: string }) {
        if (privateKey.length === 37) this._privateKey = Buffer.from(privateKey).slice(5, 37);
        else this._privateKey = privateKey;
        this.name = name;
    }

    async recover(mnemonic: string): Promise<Account> {
        this.checkSeed(mnemonic);

        this.mnemonic = mnemonic;
        const seed = await bip39.mnemonicToSeed(this.mnemonic);
        const node = bip32.fromSeed(seed);
        const child = node.derivePath(this.path);
        if (!child.privateKey) throw new Error('child.privateKey is undefined');
        this._privateKey = child.privateKey;

        return this;
    }

    toJSON(): AccountKeyPair {
        return {
            mnemonic: this.mnemonic,
            publicKey: this.getPublicKey().value,
            address: this.getAddress(),
            name: this.name,
        };
    }

    getAddress(): string {
        let publicKey = this.getPublicKeyRaw();
        if (publicKey.length > 33) {
            publicKey = publicKey.slice(5, publicKey.length);
        }

        return bech32.encode(this.bech32MainPrefix, bech32.toWords(btcaddr(publicKey)));
    }

    /**
     * Calc public key from private key
     */
    // getECPair(): ECPairInterface | null {
    //     if (!this._privateKey || typeof this._privateKey === 'string') return null;

    //     return ECPair.fromPrivateKey(this._privateKey, {
    //         compressed: false,
    //     });
    // }

    /**
     * Get private key encoded into base64
     */
    // getPrivateKeyEncoded(): string {
    //     if (!this._privateKey || !(this._privateKey instanceof Buffer)) throw new Error('bad private key');

    //     return Buffer.from(this._privateKey).toString('base64');
    // }

    getPublicKeyRaw(): Uint8Array {
        return secp256k1.publicKeyCreate(this._privateKey);
    }

    getPublicKey(): { type: PublicKeyType; value: string } {
        const publicKey = secp256k1.publicKeyCreate(this._privateKey);
        if (publicKey.length !== 33 || (publicKey[0] !== 0x02 && publicKey[0] !== 0x03)) {
            throw new Error('Public key must be compressed secp256k1, i.e. 33 bytes starting with 0x02 or 0x03');
        }
        return {
            type: PublicKeyType.secp256k1,
            value: toBase64(publicKey),
        };
    }

    getPublicKeyEncoded(): string {
        const publicKey = this.getPublicKey();
        const pubkeyAminoPrefixSecp256k1 = fromHex('eb5ae987' + '21');
        const prefixed = new Uint8Array([...pubkeyAminoPrefixSecp256k1, ...fromBase64(publicKey.value)]);
        return bech32ifyAccPub(prefixed);
    }

    updateInfo({ account_number, sequence }: { account_number: string; sequence: string }): Account {
        this.sequence = sequence;
        this.accountNumber = account_number;

        return this;
    }

    checkSeed(mnemonic: string): void {
        const seed = mnemonic.split(' ');
        if (seed.length !== 12 && seed.length !== 24) {
            throw new Error('seed length must be equal 12 or 24');
        }
        if (!bip39.validateMnemonic(mnemonic)) {
            throw new Error('seed is invalid');
        }
    }

    isValidAddress(address?: string, prefix: string = BECH32_MAIN_PREFIX): boolean {
        if (!address) return this.isValidAddress(this.getAddress(), this.bech32MainPrefix);

        const preReg = new RegExp(`^${prefix}1`);
        if (!preReg.test(address)) {
            return false;
        }

        const allReg = new RegExp(/^[0-9a-zA-Z]*$/i);
        if (!allReg.test(address)) {
            return false;
        }

        try {
            bech32.decode(address);
            return true;
        } catch (e) {
            return false;
        }
    }

    // isValidPrivate(privateKey?: string): boolean {
    //     if (!privateKey) return this.isValidPrivate(this.getPrivateKeyEncoded());

    //     return this.isValidBase64(privateKey);
    // }

    isValidBase64(input: string): boolean {
        return BASE64_REGEX.test(input);
    }
}
