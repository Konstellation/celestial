export class TimeoutError extends Error {
    public readonly txId: string;

    public constructor(message: string, txId: string) {
        super(message);
        this.txId = txId;
    }
}
