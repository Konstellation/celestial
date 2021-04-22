import { Any } from 'google-protobuf/google/protobuf/any_pb';
import { credentials } from 'grpc';
import { BaseAccount } from '../../types/auth/auth_pb';
import { QueryClient } from '../../types/auth/query_grpc_pb';
import { QueryAccountRequest } from '../../types/auth/query_pb';

const authClient = new QueryClient('206.81.29.202:9090', credentials.createInsecure());

export const getAccount = (address: string): Promise<BaseAccount | undefined> => {
    return new Promise((resolve, reject) => {
        const request = new QueryAccountRequest();
        request.setAddress(address);

        authClient.account(request, (err, res) => {
            if (err) reject(err);

            const accountAny = res.getAccount() as Any;
            if (!accountAny) {
                // todo reject error: account undefined
                // res(err);
            }

            const acc = accountAny.unpack(BaseAccount.deserializeBinary, accountAny.getTypeName());
            if (!acc) {
                reject(err);
            }
            resolve(acc as BaseAccount);
        });
    });
};
