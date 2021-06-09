import { Modules } from '../modules';
import { SequenceResponse } from '../modules/auth/types/sequenceResponse';
import { TendermintRpc } from '../modules/tendermint-rpc';
import { OfflineDirectSigner } from './OfflineDirectSigner';
import { Registry } from '@cosmjs/proto-signing';
import { buildFeeTable, defaultRegistryTypes, GasPrice } from '@cosmjs/stargate';
import { CosmosFeeTable } from '../modules/tx/types/feeTable';
import { GasLimits } from '../modules/tx/types/gasLimits';
import { accountFromAny } from '@cosmjs/stargate';

const defaultGasLimits: GasLimits<CosmosFeeTable> = {
    send: 80_000,
    delegate: 160_000,
    transfer: 160_000,
    undelegate: 160_000,
    withdraw: 160_000,
};

export interface ContextOptions {
    signer: OfflineDirectSigner;
    broadcastTimeoutMs?: number;
    broadcastPollIntervalMs?: number;
    fees?: CosmosFeeTable;
    gasPrice: GasPrice;
    gasLimits?: Partial<GasLimits<CosmosFeeTable>>;
}

export class Context {
    rpc: TendermintRpc;
    signer: OfflineDirectSigner;
    broadcastTimeoutMs?: number;
    broadcastPollIntervalMs?: number;
    modules?: Modules;
    fees: CosmosFeeTable;
    registry = new Registry();

    private chainId = '';

    constructor(rpc: TendermintRpc, { signer, gasPrice, gasLimits = {} }: ContextOptions) {
        this.rpc = rpc;
        this.signer = signer;
        this.fees = buildFeeTable<CosmosFeeTable>(gasPrice, defaultGasLimits, gasLimits);
    }

    async getChainId(): Promise<string> {
        if (!this.chainId) {
            const response = await this.rpc.get().status();
            const chainId = response.nodeInfo.network;
            if (!chainId) throw new Error('Chain ID must not be empty');
            this.chainId = chainId;
        }

        return this.chainId;
    }

    async getSequence(address: string): Promise<SequenceResponse> {
        let accountData;

        try {
            if (!this?.modules?.auth) throw new Error('auth module not found in ctx');
            const { account } = await this.modules.auth.Account(address);
            accountData = account ? accountFromAny(account) : null;
        } catch (error) {
            if (/rpc error: code = NotFound/i.test(error)) {
                accountData = null;
            }
            throw error;
        }

        if (!accountData) {
            throw new Error('Account does not exist on chain. Send some tokens there before trying to query sequence.');
        }
        return {
            accountNumber: accountData.accountNumber,
            sequence: accountData.sequence,
        };
    }
}
