import { BaseModule } from '../../types/BaseModule';
import { Context } from '../../types/Context';
import { Reader } from 'protobufjs';
import { QueryValidatorsRequest } from './types/QueryValidatorsRequest';
import { QueryValidatorsResponse } from './types/QueryValidatorsResponse';
import { QueryValidatorRequest } from './types/QueryValidatorRequest';
import { QueryValidatorResponse } from './types/QueryValidatorResponse';
import { QueryValidatorDelegationsRequest } from './types/QueryValidatorDelegationsRequest';
import { QueryValidatorDelegationsResponse } from './types/QueryValidatorDelegationsResponse';
import { QueryValidatorUnbondingDelegationsRequest } from './types/QueryValidatorUnbondingDelegationsRequest';
import { QueryValidatorUnbondingDelegationsResponse } from './types/QueryValidatorUnbondingDelelgationsResponse';
import { QueryDelegationRequest } from './types/QueryDelegationRequest';
import { QueryDelegationResponse } from './types/QueryDelegationResponse';
import { QueryUnbondingDelegationRequest } from './types/QueryUnbondingDelegationRequest';
import { QueryUnbondingDelegationResponse } from './types/QueryUnbondingDelegationResponse';
import { QueryDelegatorDelegationsRequest } from './types/QueryDelegatorDelegationsRequest';
import { QueryDelegatorDelegationsResponse } from './types/QueryDelegatorDelegationsResponse';
import { QueryDelegatorUnbondingDelegationsRequest } from './types/QueryDelegatorUnbondingDelegationsRequest';
import { QueryDelegatorUnbondingDelegationsResponse } from './types/QueryDelegatorUnbondingDelegationsResponse';
import { QueryRedelegationsRequest } from './types/QueryRedelegationsRequest';
import { QueryRedelegationsResponse } from './types/QueryRedelegationsResponse';
import { QueryDelegatorValidatorsRequest } from './types/QueryDelegatorValidatorsRequest';
import { QueryDelegatorValidatorsResponse } from './types/QueryDelegatorValidatorsResponse';
import { QueryDelegatorValidatorRequest } from './types/QueryDelegatorValidatorRequest';
import { QueryDelegatorValidatorResponse } from './types/QueryDelegatorValidatorResponse';
import { QueryHistoricalInfoResponse } from './types/QueryHistoricalInfoResponse';
import { QueryHistoricalInfoRequest } from './types/QueryHistoricalInfoRequest';
import { QueryPoolRequest } from './types/QueryPoolRequest';
import { QueryPoolResponse } from './types/QueryPoolResponse';
import { QueryParamsRequest } from './types/QueryParamsRequest';
import { QueryParamsResponse } from './types/QueryParamsResponse';

export default class StakingModule extends BaseModule {
    private service = '/cosmos.staking.v1beta1.Query';

    constructor(ctx: Context) {
        super(ctx);
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
