import { loadPackageDefinition, credentials } from 'grpc';
import { loadSync } from '@grpc/proto-loader';
import { QueryClient } from '../../types/auth/query_grpc_pb';
import { QueryAccountRequest } from '../../types/auth/query_pb';

// const protoDefinition = loadSync('src/proto/auth/query.proto');

// TODO: add types
// const Query = (<any>loadPackageDefinition(protoDefinition)).cosmos.auth.v1beta1.Query;

const authClient = new QueryClient('206.81.29.202:9090', credentials.createInsecure());

export const getAccount = (address: string) => {
    return new Promise((resolve, reject) => {
        const request = new QueryAccountRequest();
        request.setAddress(address);

        authClient.account(request, (err, res) => {
            if (err) reject(err);
            resolve(res);
        });
    });
};
