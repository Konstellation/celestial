import { credentials } from 'grpc';
import { BaseAccount } from '../../types/auth/auth_pb';
import { QueryClient } from '../../types/auth/query_grpc_pb';
import { QueryAccountRequest, QueryAccountResponse } from '../../types/auth/query_pb';

const authClient = new QueryClient('206.81.29.202:9090', credentials.createInsecure());

export const getAccount = (address: string): Promise<QueryAccountResponse> => {
    return new Promise((resolve, reject) => {
        const request = new QueryAccountRequest();
        request.setAddress(address);

        authClient.account(request, (err, res) => {
            if (err) reject(err);

            console.log(res);
            resolve(res);
        });
    });
};
