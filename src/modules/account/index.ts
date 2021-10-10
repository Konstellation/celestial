import secp256k1 from 'secp256k1';
import KeyStoreV3, { KeystoreV3Struct } from '../../crypto/keystore';
import { Context } from '../../types/Context';

// @ts-ignore
import Account from '@konstellation/cosmosjs/src/types/Account';

export default class AccountModule {
    private ctx: Context;
    private privateKey: Buffer = Buffer.alloc(0);
    private name: string = '';

    constructor(ctx: Context) {
        this.ctx = ctx;
    }

    private import({ privateKey, name }: { privateKey: Buffer; name: string }): void {
        if (privateKey.length === 37) {
            this.privateKey = Buffer.from(privateKey).slice(5, 37);
        } else {
            this.privateKey = privateKey;
            this.name = name;
        }
    }

    importKeystore(v3Keystore: KeystoreV3Struct, password: string): AccountModule {
        if (!password) {
            throw new Error('No password given.');
        }
        this.ctx.keystore = v3Keystore;
        this.import(KeyStoreV3.import(v3Keystore, password));

        return this;
    }

    exportKeystore(account: Account, password: string): KeystoreV3Struct {
        if (!password) {
            throw new Error('No password given.');
        }

        return account.toV3KeyStore(password);
        // return KeyStoreV3.export(password, this.getPrivateKey(), this.getPublicKey(), this.getAddress(), this.name);
    }

    getPublicKey(): Uint8Array {
        return secp256k1.publicKeyCreate(this.privateKey);
    }

    getPrivateKey(): Buffer {
        return this.privateKey;
    }

    getAddress(): string {
        return this.ctx.signerAddress;
    }
}
