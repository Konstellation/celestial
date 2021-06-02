import { QueryAccountRequest } from './types/queryAccountRequest';
import { Reader } from 'protobufjs';
import { Context } from '../../types/Context';
import { BaseModule } from '../../types/BaseModule';
import { SequenceResponse } from './types/sequenceResponse';
import { Uint64 } from '@cosmjs/math';
import { BaseAccount } from './types/baseAccount';
import { Account } from './types/account';
import { Any } from '@cosmjs/stargate/build/codec/google/protobuf/any';
import { decodePubkey } from '@cosmjs/proto-signing';
import { QueryAccountResponse } from './types/queryAccountResponse';

export default class AuthModule extends BaseModule {
    private service = '/cosmos.auth.v1beta1.Query';

    constructor(ctx: Context) {
        super(ctx);
    }

    async getAccount(address: string) {
        const data = QueryAccountRequest.encode(address).finish();
        const res = await this.ctx.rpc.queryUnverified(this.service + '/Account', data);
        return QueryAccountResponse.decode(new Reader(res));
    }

    /**
     * Takes an `Any` encoded account from the chain and extracts some common
     * `Account` information from it. This is supposed to support the most relevant
     * common Cosmos SDK account types. If you need support for exotic account types,
     * you'll need to write your own account decoder.
     */
    public accountFromAny(input: Any): Account {
        const { typeUrl, value } = input;
        return this.accountFromBaseAccount(BaseAccount.decode(value));
    }

    private uint64FromProto(input: number | Long): Uint64 {
        return Uint64.fromString(input.toString());
    }

    private accountFromBaseAccount(input: BaseAccount): Account {
        const { address, pubKey, accountNumber, sequence } = input;
        const pubkey = decodePubkey(pubKey);
        return {
            address: address,
            pubkey: pubkey,
            accountNumber: this.uint64FromProto(accountNumber).toNumber(),
            sequence: this.uint64FromProto(sequence).toNumber(),
        };
    }
}
