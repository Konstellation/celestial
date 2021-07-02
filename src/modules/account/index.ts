import KeyStoreV3, { KeystoreV3 } from '../../crypto/keystore';
import { Context } from '../../types/Context';

export default class AccountModule {
    private ctx: Context;
    private privateKey: Buffer = Buffer.alloc(0);
    private name: string = '';

    constructor(ctx: Context) {
        this.ctx = ctx;
    }

    import({ privateKey, name }: { privateKey: Buffer; name: string }) {
        if (privateKey.length === 37) {
            this.privateKey = Buffer.from(privateKey).slice(5, 37);
        } else {
            this.privateKey = privateKey;
            this.name = name;
        }
    }

    fromV3KeyStore(v3Keystore: KeystoreV3, password: string) {
        if (!password) {
            throw new Error('No password given.');
        }

        return this.import(new KeyStoreV3().import(v3Keystore, password));
    }
}
