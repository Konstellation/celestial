import { Modules } from '../modules';
import { SequenceResponse } from '../modules/auth/types/sequenceResponse';
import { TendermintRpc } from '../modules/tendermint-rpc';
import { StdFee } from '../modules/tx/types/stdFee';
import { OfflineDirectSigner } from './OfflineDirectSigner';
import { Decimal } from '@cosmjs/math';
import { Registry } from '@cosmjs/proto-signing';
import { buildFeeTable, accountFromAny } from '@cosmjs/stargate';
import { CosmosFeeTable } from '../modules/tx/types/feeTable';
import { GasLimits } from '../modules/tx/types/gasLimits';
import { KeystoreV3Struct } from '../crypto/keystore';

const defaultGasLimits: GasLimits<CosmosFeeTable> = {
    send: 80_000,
    transfer: 160_000,
    delegate: 160_000,
    redelegate: 245_262,
    undelegate: 160_000,
    withdrawDelegatorReward: 160_000,
    setWithdrawAddress: 160_000,
    withdrawValidatorCommission: 160_000,
    fundCommunityPool: 160_000,
    createValidator: 4_000_000,
    editValidator: 160_000,
    unjail: 160_000,
    submitProposal: 160_000,
    voteProposal: 160_000,
    depositProposal: 160_000,
};

interface GasPrice {
    amount: string;
    denom: string;
}

export interface ContextOptions {
    keystore: KeystoreV3Struct;
    signerAddress: string;
    broadcastTimeoutMs?: number;
    broadcastPollIntervalMs?: number;
    fees?: CosmosFeeTable;
    gasPrice: GasPrice;
    gasLimits?: Partial<GasLimits<CosmosFeeTable>>;
}

export class Context {
    rpc: TendermintRpc;
    keystore?: KeystoreV3Struct;
    signerAddress: string;
    broadcastTimeoutMs?: number;
    broadcastPollIntervalMs?: number;
    modules?: Modules;
    fees: CosmosFeeTable;
    registry = new Registry();

    constructor(rpc: TendermintRpc, { signerAddress, gasPrice, gasLimits = {} }: ContextOptions) {
        if (!/^[0-9]*[.][0-9]+$/.test(gasPrice?.amount)) throw new Error('invalid gas price amount format');
        this.rpc = rpc;
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
            if (/rpc error: code = NotFound/i.test(error as string)) {
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
