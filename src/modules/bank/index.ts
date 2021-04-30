import { credentials } from 'grpc';
import { Metadata, Params } from '../../types/bank/bank_pb';
import { QueryClient } from '../../types/bank/query_grpc_pb';
import {
    QueryAllBalancesRequest,
    QueryAllBalancesResponse,
    QueryBalanceRequest,
    QueryDenomMetadataRequest,
    QueryDenomsMetadataRequest,
    QueryParamsRequest,
    QuerySupplyOfRequest,
    QueryTotalSupplyRequest,
} from '../../types/bank/query_pb';
import { Coin } from '../../types/coin_pb';
import { PageRequest } from '../../types/pagination_pb';

export default class BankModule {
    private bankClient: QueryClient;

    constructor(grpcAddress: string) {
        this.bankClient = new QueryClient(grpcAddress, credentials.createInsecure());
    }

    getBalance = ({ address, denom }: QueryBalanceRequest.AsObject): Promise<Coin.AsObject | undefined> => {
        return new Promise((resolve, reject) => {
            const request = new QueryBalanceRequest();
            request.setAddress(address);
            request.setDenom(denom);

            this.bankClient.balance(request, (err, res) => {
                if (err) return reject(err);

                resolve(res.getBalance()?.toObject());
            });
        });
    };

    getAllBalances = ({ address, pagination }: QueryAllBalancesRequest.AsObject): Promise<Coin.AsObject[]> => {
        return new Promise((resolve, reject) => {
            const request = new QueryAllBalancesRequest();
            request.setAddress(address);
            // const page = new PageRequest();
            // page.setKey(pagination?.key)

            // request.setPagination(page);

            this.bankClient.allBalances(request, (err, res) => {
                if (err) return reject(err);

                resolve(res.getBalancesList().map(b => b.toObject()));
            });
        });
    };

    getTotalSupply = (pagination?: PageRequest): Promise<Coin.AsObject[]> => {
        return new Promise((resolve, reject) => {
            const request = new QueryTotalSupplyRequest();
            request.setPagination(pagination);

            this.bankClient.totalSupply(request, (err, res) => {
                if (err) return reject(err);

                resolve(res.getSupplyList().map(s => s.toObject()));
            });
        });
    };

    getSupplyOf = (denom: string): Promise<Coin.AsObject | undefined> => {
        return new Promise((resolve, reject) => {
            const request = new QuerySupplyOfRequest();
            request.setDenom(denom);

            this.bankClient.supplyOf(request, (err, res) => {
                if (err) return reject(err);

                resolve(res.getAmount()?.toObject());
            });
        });
    };

    getParams = (): Promise<Params.AsObject | undefined> => {
        return new Promise((resolve, reject) => {
            const request = new QueryParamsRequest();

            this.bankClient.params(request, (err, res) => {
                if (err) return reject(err);

                resolve(res.getParams()?.toObject());
            });
        });
    };

    getDenomMetadata = (denom: string): Promise<Metadata.AsObject | undefined> => {
        return new Promise((resolve, reject) => {
            const request = new QueryDenomMetadataRequest();
            request.setDenom(denom);

            this.bankClient.denomMetadata(request, (err, res) => {
                if (err) return reject(err);

                resolve(res.getMetadata()?.toObject());
            });
        });
    };

    getDenomsMetadata = (pagination?: PageRequest): Promise<Metadata.AsObject[]> => {
        return new Promise((resolve, reject) => {
            const request = new QueryDenomsMetadataRequest();
            request.setPagination(pagination);

            this.bankClient.denomsMetadata(request, (err, res) => {
                if (err) return reject(err);

                resolve(res.getMetadatasList().map(m => m.toObject()));
            });
        });
    };
}
