import StdSignature from './StdSignature';

interface StdTxInput {
    msgs: Record<string, any>[];
    msg: Record<string, any>;
    memo: string;
    signatures: StdSignature[] | null;
    fee: string;
}

export default class StdTx {
    memo: string;
    signatures: StdSignature[] | null;
    fee: string;
    msg: Record<string, any>;
    msgs?: Record<string, any>[];

    constructor({ msgs, memo, signatures = null, fee, msg }: StdTxInput) {
        this.msg = msgs;
        if (!msgs && msg) {
            this.msg = msg;
        }
        this.fee = fee;
        this.signatures = signatures;
        this.memo = memo;
    }

    raw() {
        let sigs = this.signatures;
        if (this.signatures) {
            const [{ pub_key }] = this.signatures;
            if (pub_key.type !== 'tendermint/PubKeySecp256k1') {
                // @ts-ignore
                sigs = this.signatures.map((s) => s.toJSON());
            }
        }

        const msg = this.msg.type ? [{ type: this.msg.type, value: { ...this.msg } }] : this.msg;
        return {
            type: 'cosmos-sdk/StdTx',
            value: {
                msg,
                fee: this.fee,
                signatures: sigs,
                memo: this.memo,
            },
        };
    }

    toJSON() {
        const { value } = this.raw();

        return value;
    }
}
