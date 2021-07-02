import { Modules } from '../modules';
import { SequenceResponse } from '../modules/auth/types/sequenceResponse';
import { TendermintRpc } from '../modules/tendermint-rpc';
import { OfflineDirectSigner } from './OfflineDirectSigner';
import { Registry } from '@cosmjs/proto-signing';
import { buildFeeTable } from '@cosmjs/stargate';
import { CosmosFeeTable } from '../modules/tx/types/feeTable';
import { GasLimits } from '../modules/tx/types/gasLimits';
import { accountFromAny } from '@cosmjs/stargate';
import { Decimal } from '@cosmjs/math';

const defaultGasLimits: GasLimits<CosmosFeeTable> = {
    send: 80_000,
    delegate: 160_000,
    transfer: 160_000,
    undelegate: 160_000,
    withdraw: 160_000,
};

export interface ContextOptions {
    signer: OfflineDirectSigner;
    signerAddress: string;
    broadcastTimeoutMs?: number;
    broadcastPollIntervalMs?: number;
    fees?: CosmosFeeTable;
    gasPrice: { amount: string; denom: string };
    gasLimits?: Partial<GasLimits<CosmosFeeTable>>;
}

export class Context {
    rpc: TendermintRpc;
    signer: OfflineDirectSigner;
    signerAddress: string;
    broadcastTimeoutMs?: number;
    broadcastPollIntervalMs?: number;
    modules?: Modules;
    fees: CosmosFeeTable;
    registry = new Registry();
    constructor(rpc: TendermintRpc, { signer, signerAddress, gasPrice, gasLimits = {} }: ContextOptions) {
        if (!/^[0-9]*[.][0-9]+$/.test(gasPrice?.amount)) throw new Error('invalid gas price amount format');
        this.rpc = rpc;
        this.signer = signer;
        this.signerAddress = signerAddress;
        const gPrice = {
            amount: Decimal.fromUserInput(gasPrice.amount, gasPrice.amount.split('.')[1].split('').length),
            denom: gasPrice.denom,
        };
        this.fees = buildFeeTable<CosmosFeeTable>(gPrice, defaultGasLimits, gasLimits);
    }
    async getSequence(address: string): Promise<SequenceResponse> {
        let accountData;
        try {
            if (!this?.modules?.auth) throw new Error('auth module not found in ctx');
            const { account } = await this.modules.auth.queries.Account({ address });
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
