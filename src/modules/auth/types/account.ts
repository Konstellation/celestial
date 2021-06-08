import { Pubkey } from './pubkey';

export interface Account {
    /** Bech32 account address */
    readonly address: string;
    readonly pubkey: Pubkey | null;
    readonly accountNumber: number;
    readonly sequence: number;
}
