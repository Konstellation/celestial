import {
    QueryAnnualProvisionsRequest,
    QueryClientImpl,
    QueryInflationRequest,
    QueryParamsRequest,
    QueryParamsResponse,
} from '../../codec/cosmos/mint/v1beta1/query';
import { uint8ArrayToStr } from '../../encoding/uint8Array';
import { Context } from '../../types/Context';

interface Query {
    Params(request: QueryParamsRequest): Promise<QueryParamsResponse>;
    Inflation(request: QueryInflationRequest): Promise<string>;
    AnnualProvisions(request: QueryAnnualProvisionsRequest): Promise<string>;
}

export default class MintModule {
    private queryClient: QueryClientImpl;
    queries: Query;

    constructor(ctx: Context) {
        this.queryClient = new QueryClientImpl(ctx.rpc);
        this.queries = {
            Params: this.queryClient.Params,
            Inflation: async (request: QueryInflationRequest) => {
                const res = await this.queryClient.Inflation(request);
                if (!res.inflation) throw Error('bad response in mint.queries.Inflation');
                return uint8ArrayToStr(res.inflation);
            },
            AnnualProvisions: async (request: QueryAnnualProvisionsRequest) => {
                const res = await this.queryClient.AnnualProvisions(request);
                if (!res.annualProvisions) throw Error('bad response in mint.queries.AnnualProvisions');
                return uint8ArrayToStr(res.annualProvisions);
            },
        };
    }
}
