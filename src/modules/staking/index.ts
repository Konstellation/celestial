import { BaseModule } from '../../types/BaseModule';
import { Context } from '../../types/Context';
import { Reader } from 'protobufjs';
import {
    QueryDelegationRequest,
    QueryDelegationResponse,
    QueryDelegatorDelegationsRequest,
    QueryDelegatorDelegationsResponse,
    QueryDelegatorUnbondingDelegationsRequest,
    QueryDelegatorUnbondingDelegationsResponse,
    QueryDelegatorValidatorRequest,
    QueryDelegatorValidatorResponse,
    QueryDelegatorValidatorsRequest,
    QueryDelegatorValidatorsResponse,
    QueryHistoricalInfoRequest,
    QueryHistoricalInfoResponse,
    QueryParamsRequest,
    QueryParamsResponse,
    QueryPoolRequest,
    QueryPoolResponse,
    QueryRedelegationsRequest,
    QueryRedelegationsResponse,
    QueryUnbondingDelegationRequest,
    QueryUnbondingDelegationResponse,
    QueryValidatorDelegationsRequest,
    QueryValidatorDelegationsResponse,
    QueryValidatorRequest,
    QueryValidatorResponse,
    QueryValidatorsRequest,
    QueryValidatorsResponse,
    QueryValidatorUnbondingDelegationsRequest,
    QueryValidatorUnbondingDelegationsResponse,
} from '../../codec/cosmos/staking/v1beta1/query';
import {
    MsgBeginRedelegate,
    MsgCreateValidator,
    MsgDelegate,
    MsgEditValidator,
    MsgUndelegate,
} from '../../codec/cosmos/staking/v1beta1/tx';

export default class StakingModule extends BaseModule {
    private service = '/cosmos.staking.v1beta1.Query';
    private defaultRegistryTypes: ReadonlyArray<[string, any]> = [
        ['/cosmos.staking.v1beta1.MsgBeginRedelegate', MsgBeginRedelegate],
        ['/cosmos.staking.v1beta1.MsgCreateValidator', MsgCreateValidator],
        ['/cosmos.staking.v1beta1.MsgDelegate', MsgDelegate],
        ['/cosmos.staking.v1beta1.MsgEditValidator', MsgEditValidator],
        ['/cosmos.staking.v1beta1.MsgUndelegate', MsgUndelegate],
    ];

    constructor(ctx: Context) {
        super(ctx);
        this.defaultRegistryTypes.forEach(t => ctx.registry.register(t[0], t[1]));
    }

    async Validators(request: QueryValidatorsRequest): Promise<QueryValidatorsResponse> {
        const data = QueryValidatorsRequest.encode(request).finish();
        const res = await this.ctx.rpc.queryUnverified(this.service + '/Validators', data);
        return QueryValidatorsResponse.decode(new Reader(res));
    }

    async Validator(request: QueryValidatorRequest): Promise<QueryValidatorResponse> {
        const data = QueryValidatorRequest.encode(request).finish();
        const res = await this.ctx.rpc.queryUnverified(this.service + '/Validator', data);
        return QueryValidatorResponse.decode(new Reader(res));
    }

    async ValidatorDelegations(request: QueryValidatorDelegationsRequest): Promise<QueryValidatorDelegationsResponse> {
        const data = QueryValidatorDelegationsRequest.encode(request).finish();
        const res = await this.ctx.rpc.queryUnverified(this.service + '/ValidatorDelegations', data);
        return QueryValidatorDelegationsResponse.decode(new Reader(res));
    }

    async ValidatorUnbondingDelegations(
        request: QueryValidatorUnbondingDelegationsRequest,
    ): Promise<QueryValidatorUnbondingDelegationsResponse> {
        const data = QueryValidatorUnbondingDelegationsRequest.encode(request).finish();
        const res = await this.ctx.rpc.queryUnverified(this.service + '/ValidatorUnbondingDelegations', data);
        return QueryValidatorUnbondingDelegationsResponse.decode(new Reader(res));
    }

    async Delegation(request: QueryDelegationRequest): Promise<QueryDelegationResponse> {
        const data = QueryDelegationRequest.encode(request).finish();
        const res = await this.ctx.rpc.queryUnverified(this.service + '/Delegation', data);
        return QueryDelegationResponse.decode(new Reader(res));
    }

    async UnbondingDelegation(request: QueryUnbondingDelegationRequest): Promise<QueryUnbondingDelegationResponse> {
        const data = QueryUnbondingDelegationRequest.encode(request).finish();
        const res = await this.ctx.rpc.queryUnverified(this.service + '/UnbondingDelegation', data);
        return QueryUnbondingDelegationResponse.decode(new Reader(res));
    }

    async DelegatorDelegations(request: QueryDelegatorDelegationsRequest): Promise<QueryDelegatorDelegationsResponse> {
        const data = QueryDelegatorDelegationsRequest.encode(request).finish();
        const res = await this.ctx.rpc.queryUnverified(this.service + '/DelegatorDelegations', data);
        return QueryDelegatorDelegationsResponse.decode(new Reader(res));
    }

    async DelegatorUnbondingDelegations(
        request: QueryDelegatorUnbondingDelegationsRequest,
    ): Promise<QueryDelegatorUnbondingDelegationsResponse> {
        const data = QueryDelegatorUnbondingDelegationsRequest.encode(request).finish();
        const res = await this.ctx.rpc.queryUnverified(this.service + '/DelegatorUnbondingDelegations', data);
        return QueryDelegatorUnbondingDelegationsResponse.decode(new Reader(res));
    }

    async Redelegations(request: QueryRedelegationsRequest): Promise<QueryRedelegationsResponse> {
        const data = QueryRedelegationsRequest.encode(request).finish();
        const res = await this.ctx.rpc.queryUnverified(this.service + '/Redelegations', data);
        return QueryRedelegationsResponse.decode(new Reader(res));
    }

    async DelegatorValidators(request: QueryDelegatorValidatorsRequest): Promise<QueryDelegatorValidatorsResponse> {
        const data = QueryDelegatorValidatorsRequest.encode(request).finish();
        const res = await this.ctx.rpc.queryUnverified(this.service + '/DelegatorValidators', data);
        return QueryDelegatorValidatorsResponse.decode(new Reader(res));
    }

    async DelegatorValidator(request: QueryDelegatorValidatorRequest): Promise<QueryDelegatorValidatorResponse> {
        const data = QueryDelegatorValidatorRequest.encode(request).finish();
        const res = await this.ctx.rpc.queryUnverified(this.service + '/DelegatorValidator', data);
        return QueryDelegatorValidatorResponse.decode(new Reader(res));
    }

    async HistoricalInfo(request: QueryHistoricalInfoRequest): Promise<QueryHistoricalInfoResponse> {
        const data = QueryHistoricalInfoRequest.encode(request).finish();
        const res = await this.ctx.rpc.queryUnverified(this.service + '/HistoricalInfo', data);
        return QueryHistoricalInfoResponse.decode(new Reader(res));
    }

    async Pool(request: QueryPoolRequest): Promise<QueryPoolResponse> {
        const data = QueryPoolRequest.encode(request).finish();
        const res = await this.ctx.rpc.queryUnverified(this.service + '/Pool', data);
        return QueryPoolResponse.decode(new Reader(res));
    }

    async Params(request: QueryParamsRequest): Promise<QueryParamsResponse> {
        const data = QueryParamsRequest.encode(request).finish();
        const res = await this.ctx.rpc.queryUnverified(this.service + '/Params', data);
        return QueryParamsResponse.decode(new Reader(res));
    }
}
