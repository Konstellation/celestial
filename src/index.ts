import { Module } from './types/Module';
import { Modules } from './modules';
import { DirectSecp256k1HdWallet } from '@cosmjs/proto-signing';
import { Decimal } from '@cosmjs/math';
import { TendermintRpc } from './modules/tendermint-rpc';
import { Context, ContextOptions } from './types/Context';

const rpcAddr = '206.81.29.202:26657';

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
}

(async function() {
    const wallet = await DirectSecp256k1HdWallet.fromMnemonic(
        'disorder squirrel cage garlic oyster leaf segment casual siren shiver lecture among either wool improve head thunder walnut cram force crystal advice slab sail',
        {
            prefix: 'darc',
        },
    );
    const wallet2 = await DirectSecp256k1HdWallet.fromMnemonic(
        'other original trouble craft hard loan ostrich aim drastic team absent kiwi matrix dose engage cup novel humor brave budget stage label future exile',
        {
            prefix: 'darc',
        },
    );
    const validatorAddr = 'darcvaloper1rzdt9wrzwv3x7vv6f7xpyaqqgf3lt6phs0svuw';
    const heisenberg = 'darc1ejgxhtvj6c9n7d7g29jmsxhnn6wh2j8rll0vfc';
    const anotherAddr = 'darc1rzdt9wrzwv3x7vv6f7xpyaqqgf3lt6phptqtsx';
    const d = await Celestial.create({
        rpcAddress: rpcAddr,
        modules: [Module.BANK, Module.AUTH, Module.TX, Module.STAKING, Module.DISTRIBUTION, Module.PARAMS],
        options: {
            signer: wallet2,
            signerAddress: heisenberg,
            gasPrice: { amount: Decimal.fromUserInput('0.025', 3), denom: 'udarc' },
        },
    });
    console.log(await d.params?.queries.Params({ subspace: 'bank', key: 'sendEnabled' }));
    // console.log(JSON.stringify(await d.distribution?.queries.ValidatorCommission({ validatorAddress: validatorAddr })));
    // console.log(await d.staking?.Validators({ status: '' }));

    // const del = buildMsgDelegate({
    //     validatorAddress: validatorAddr,
    //     delegatorAddress: heisenberg,
    //     amount: { amount: '2000', denom: 'udarc' },
    // });
    // const response = await d.tx?.signAndBroadcast(heisenberg, [del], Celestial.ctx.fees.delegate);
    // console.log(response);
    // const sish = await d.staking?.DelegatorDelegations({ delegatorAddr: heisenberg });
    // console.log(JSON.stringify(sish));
})();
