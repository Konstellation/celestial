import { MsgData } from './msgData';

export interface BroadcastTxFailure {
    readonly height: number;
    readonly code: number;
    readonly transactionHash: string;
    readonly rawLog?: string;
    readonly data?: readonly MsgData[];
}

export interface BroadcastTxSuccess {
    readonly height: number;
    readonly transactionHash: string;
    readonly rawLog?: string;
    readonly data?: readonly MsgData[];
    readonly gasUsed: number;
    readonly gasWanted: number;
}

export type BroadcastTxResponse = BroadcastTxSuccess | BroadcastTxFailure;
