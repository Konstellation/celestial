import { Module } from './types/Module';
import { Modules } from './modules';
import { DirectSecp256k1HdWallet } from '@cosmjs/proto-signing';
import { TendermintRpc } from './modules/tendermint-rpc';
import { Context, ContextOptions } from './types/Context';

export class Celestial extends Modules {
    static ctx: Context;

    constructor(modules: Module[], ctx: Context) {
        super(modules, ctx);
    }

    static async create({
        rpcAddress,
        modules,
        options,
    }: {
        rpcAddress: string;
        modules: Module[];
        options: ContextOptions;
    }): Promise<Celestial> {
        Celestial.ctx = new Context(await TendermintRpc.connect(rpcAddress), options);
        return new this(modules, Celestial.ctx);
    }

    static options = async () => {
        return {
            signer: await DirectSecp256k1HdWallet.fromMnemonic(
                'disorder squirrel cage garlic oyster leaf segment casual siren shiver lecture among either wool improve head thunder walnut cram force crystal advice slab sail',
                {
                    prefix: 'darc',
                },
            ),
            signerAddress: 'darc1rzdt9wrzwv3x7vv6f7xpyaqqgf3lt6phptqtsx',
            gasPrice: { amount: '0.025', denom: 'udarc' },
        };
    };
}
