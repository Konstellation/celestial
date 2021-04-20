import { loadPackageDefinition, credentials } from 'grpc';
import { loadSync } from '@grpc/proto-loader';
// import { AuthService } from './types/AuthService';
const protoDefinition = loadSync('src/modules/auth/proto/query.proto');

// @ts-ignore
const Query = loadPackageDefinition(protoDefinition).cosmos.auth.v1beta1.Query;

export const authClient = new Query('206.81.29.202:9090', credentials.createInsecure());
