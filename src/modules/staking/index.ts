import { PublicKey } from '../../codec/tendermint/crypto/keys';
import { bech32ifyValAddr, unbech32ify } from '../../encoding/bech32';
import { Context } from '../../types/Context';
import { QueryClientImpl } from '../../codec/cosmos/staking/v1beta1/query';
import { MsgClientImpl } from './MsgClientImpl';

export default class StakingModule extends MsgClientImpl {
    queries: QueryClientImpl;

    constructor(ctx: Context) {
        super(ctx);
        this.registryTypes.forEach(t => ctx.registry.register(t[0], t[1]));
        this.queries = new QueryClientImpl(ctx.rpc);
    }

    ['decodePubKey'](pubKey: Uint8Array): unknown {
        return PublicKey.toJSON(PublicKey.decode(pubKey));
    }

    ['convertAccAddressToValAddress'](address: string): string {
        return bech32ifyValAddr(unbech32ify(address));
    }
}
