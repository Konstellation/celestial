import { Module } from './types/Module';
import { Modules } from './modules';
import { DirectSecp256k1HdWallet } from '@cosmjs/proto-signing';
import { Decimal } from '@cosmjs/math';
import { TendermintRpc } from './modules/tendermint-rpc';
import { Context, ContextOptions } from './types/Context';
import { SendTokens } from './modules/bank/messages/sendTokens';
import { MsgDelegate } from './modules/staking/messages/delegate';

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
    const d = await Celestial.create({
        rpcAddress: rpcAddr,
        modules: [Module.BANK, Module.AUTH, Module.TX, Module.STAKING],
        options: { signer: wallet2, gasPrice: { amount: Decimal.fromUserInput('0.025', 3), denom: 'udarc' } },
    });
    // console.log(await d.staking?.Validators({ status: '' }));
    const validatorAddr = 'darcvaloper1rzdt9wrzwv3x7vv6f7xpyaqqgf3lt6phs0svuw';
    const heisenberg = 'darc1ejgxhtvj6c9n7d7g29jmsxhnn6wh2j8rll0vfc';
    // console.log(await d.bank?.Balance({ address: heisenberg, denom: 'udarc' }));
    // const sendMsg = SendTokens({
    //     fromAddress: 'darc1rzdt9wrzwv3x7vv6f7xpyaqqgf3lt6phptqtsx',
    //     toAddress: 'darc1ejgxhtvj6c9n7d7g29jmsxhnn6wh2j8rll0vfc',
    //     amount: { amount: '1000000', denom: 'udarc' },
    // });
    // const response = await d.tx?.signAndBroadcast(
    //     'darc1rzdt9wrzwv3x7vv6f7xpyaqqgf3lt6phptqtsx',
    //     [sendMsg],
    //     Celestial.ctx.fees.send,
    // );
    // console.log(response);
    const del = MsgDelegate({
        validatorAddress: validatorAddr,
        delegatorAddress: heisenberg,
        amount: { amount: '2000', denom: 'udarc' },
    });
    const response = await d.tx?.signAndBroadcast(heisenberg, [del], Celestial.ctx.fees.delegate);
    console.log(response);
    const sish = await d.staking?.DelegatorDelegations({ delegatorAddr: heisenberg });
    console.log(JSON.stringify(sish));
})();
