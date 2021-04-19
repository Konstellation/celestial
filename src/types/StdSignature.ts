export default class StdSignature {
    pub_key: Record<string, any>;
    signature: Buffer;

    constructor(pub_key: Record<string, any>, signature: Buffer) {
        this.pub_key = pub_key;
        this.signature = signature;
    }

    fromJSON({ pub_key: { value }, signature }: { pub_key: Record<string, any>; signature: string }): StdSignature {
        return new StdSignature(Buffer.from(value, 'base64'), Buffer.from(signature, 'base64'));
    }

    toJSON() {
        return {
            signature: this.signature.toString('base64'),
            pub_key: {
                type: 'tendermint/PubKeyMultisigThreshold',
                value: {
                    pubkeys: this.pub_key.public_keys.map((pk: Buffer) => ({
                        type: 'tendermint/PubKeySecp256k1',
                        value: Buffer.from(pk).toString('base64'),
                    })),
                    threshold: String(this.pub_key.threshold),
                },
            },
        };
    }
}
