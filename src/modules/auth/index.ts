import { credentials } from 'grpc';
import { BaseAccount, Params } from '../../types/auth/auth_pb';
import { QueryClient } from '../../types/auth/query_grpc_pb';
import { QueryAccountRequest, QueryAccountsRequest, QueryParamsRequest } from '../../types/auth/query_pb';

export default class AuthModule {
    private authClient: QueryClient;

    constructor(grpcAddress: string) {
        this.authClient = new QueryClient(grpcAddress, credentials.createInsecure());
    }

    getAccount = (address: string): Promise<BaseAccount.AsObject> => {
        return new Promise((resolve, reject) => {
            const request = new QueryAccountRequest();
            request.setAddress(address);

            this.authClient.account(request, (err, res) => {
                if (err) return reject(err);

                const accountAny = res.getAccount();
                const acc = accountAny?.unpack(BaseAccount.deserializeBinary, accountAny?.getTypeName()) as BaseAccount;

                resolve(acc.toObject());
            });
        });
    };

    // UNIMPLEMENTED
    getAccounts = (): Promise<BaseAccount[]> => {
        return new Promise((resolve, reject) => {
            const request = new QueryAccountsRequest();

            this.authClient.accounts(request, (err, res) => {
                if (err) return reject(err);

                resolve(res.getAccountsList());
            });
        });
    };

    getParams = (): Promise<Params.AsObject | undefined> => {
        return new Promise((resolve, reject) => {
            const request = new QueryParamsRequest();

            this.authClient.params(request, (err, res) => {
                if (err) return reject(err);

                resolve(res.getParams()?.toObject());
            });
        });
    };
}
