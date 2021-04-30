import { credentials } from 'grpc';
import { GetTxRequest, GetTxResponse } from '../../types/tx/service_pb';
import { ServiceClient } from '../../types/tx/service_pb_service';

export default class TxModule {
    private txClient: ServiceClient;

    constructor(grpcAddress: string) {
        this.txClient = new ServiceClient(grpcAddress, credentials.createInsecure());
    }

    getTxByHash(hash: string): Promise<GetTxResponse.AsObject> {
        return new Promise((resolve, reject) => {
            const request = new GetTxRequest();
            request.setHash(hash);

            this.txClient.getTx(request, (err, res) => {
                if (err) return reject(err);

                const d = res?.getTx()?.toObject();
                console.log(d);
            });
        });
    }
}
