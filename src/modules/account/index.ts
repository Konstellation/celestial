import secp256k1 from 'secp256k1';
import KeyStoreV3, { KeystoreV3Struct } from '../../crypto/keystore';
import { Context } from '../../types/Context';

export default class AccountModule {
    private ctx: Context;
    private privateKey: Buffer = Buffer.alloc(0);
    private name: string = '';

    constructor(ctx: Context) {
        this.ctx = ctx;
    }

    private import({ privateKey, name }: { privateKey: Buffer; name: string }) {
        if (privateKey.length === 37) {
            this.privateKey = Buffer.from(privateKey).slice(5, 37);
        } else {
            this.privateKey = privateKey;
            this.name = name;
        }
    }

    importKeystore(v3Keystore: KeystoreV3Struct, password: string) {
        if (!password) {
            throw new Error('No password given.');
        }
        this.import(new KeyStoreV3().import(v3Keystore, password));

        return this;
    }

    getPublicKey() {
        return secp256k1.publicKeyCreate(this.privateKey);
    }

    getPrivateKey(): Buffer {
        return this.privateKey;
    }
}
