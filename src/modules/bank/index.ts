import { QueryBalanceRequest } from './types/QueryBalanceRequest';
import { Reader } from 'protobufjs';
import { QueryBalanceResponse } from './types/QueryBalanceResponse';
import { Context } from '../../types/Context';
import { BaseModule } from '../../types/BaseModule';
import { QueryAllBalancesRequest } from './types/QueryAllBalancesRequest';
import { QueryAllBalancesResponse } from './types/QueryAllBalancesResponse';
import { QueryTotalSupplyRequest } from './types/QueryTotalSupplyRequest';
import { QueryTotalSupplyResponse } from './types/QueryTotalSupplyResponse';
import { QuerySupplyOfRequest } from './types/QuerySupplyOfRequest';
import { QuerySupplyOfResponse } from './types/QuerySupplyOfResponse';
import { QueryParamsRequest } from './types/QueryParamsRequest';
import { QueryParamsResponse } from './types/QueryParamsResponse';
import { QueryDenomMetadataRequest } from './types/QueryDenomMetadataRequest';
import { QueryDenomMetadataResponse } from './types/QueryDenomMetadataResponse';
import { QueryDenomsMetadataRequest } from './types/QueryDenomsMetadataRequest';
import { QueryDenomsMetadataResponse } from './types/QueryDenomsMetadataResponse';

export default class BankModule extends BaseModule {
    private service = '/cosmos.bank.v1beta1.Query';

    constructor(ctx: Context) {
        super(ctx);
    }

    async getBalance({ address, denom }: { address: string; denom: string }) {
        const data = QueryBalanceRequest.encode({ address, denom }).finish();
        const res = await this.ctx.rpc.queryUnverified(this.service + '/Balance', data);
        return QueryBalanceResponse.decode(new Reader(res));
    }

    async AllBalances(request: QueryAllBalancesRequest): Promise<QueryAllBalancesResponse> {
        const data = QueryAllBalancesRequest.encode(request).finish();
        const promise = this.ctx.rpc.queryUnverified(this.service + '/AllBalances', data);
        return promise.then(data => QueryAllBalancesResponse.decode(new Reader(data)));
    }

    async TotalSupply(request: QueryTotalSupplyRequest): Promise<QueryTotalSupplyResponse> {
        const data = QueryTotalSupplyRequest.encode(request).finish();
        const promise = this.ctx.rpc.queryUnverified(this.service + '/TotalSupply', data);
        return promise.then(data => QueryTotalSupplyResponse.decode(new Reader(data)));
    }

    async SupplyOf(request: QuerySupplyOfRequest): Promise<QuerySupplyOfResponse> {
        const data = QuerySupplyOfRequest.encode(request).finish();
        const promise = this.ctx.rpc.queryUnverified(this.service + '/SupplyOf', data);
        return promise.then(data => QuerySupplyOfResponse.decode(new Reader(data)));
    }

    async Params(request: QueryParamsRequest): Promise<QueryParamsResponse> {
        const data = QueryParamsRequest.encode(request).finish();
        const promise = this.ctx.rpc.queryUnverified(this.service + '/Params', data);
        return promise.then(data => QueryParamsResponse.decode(new Reader(data)));
    }

    async DenomMetadata(request: QueryDenomMetadataRequest): Promise<QueryDenomMetadataResponse> {
        const data = QueryDenomMetadataRequest.encode(request).finish();
        const promise = this.ctx.rpc.queryUnverified(this.service + '/DenomMetadata', data);
        return promise.then(data => QueryDenomMetadataResponse.decode(new Reader(data)));
    }

    async DenomsMetadata(request: QueryDenomsMetadataRequest): Promise<QueryDenomsMetadataResponse> {
        const data = QueryDenomsMetadataRequest.encode(request).finish();
        const promise = this.ctx.rpc.queryUnverified(this.service + '/DenomsMetadata', data);
        return promise.then(data => QueryDenomsMetadataResponse.decode(new Reader(data)));
    }
}
