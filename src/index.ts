import { Module } from './types/Module';
import { Modules } from './modules';
import { SigningStargateClient, createProtobufRpcClient } from '@cosmjs/stargate';
import { Tendermint34Client } from '@cosmjs/tendermint-rpc';
import { coins, DirectSecp256k1HdWallet } from '@cosmjs/proto-signing';
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
    const d = await Celestial.create({
        rpcAddress: rpcAddr,
        modules: [Module.BANK, Module.AUTH, Module.TX],
        options: { signer: wallet, gasPrice: { amount: Decimal.fromUserInput('0.025', 3), denom: 'udarc' } },
    });
    // const sendMsg = {
    //     typeUrl: '/cosmos.bank.v1beta1.MsgSend',
    //     value: {
    //         fromAddress: 'darc1rzdt9wrzwv3x7vv6f7xpyaqqgf3lt6phptqtsx',
    //         toAddress: 'darc18c7c95p5cqqxlsg4m56626djna6eyqq4xkvtu3',
    //         amount: coins(100000, 'udarc'),
    //     },
    // };
    // const response = await d.tx?.signAndBroadcast(
    //     'darc1rzdt9wrzwv3x7vv6f7xpyaqqgf3lt6phptqtsx',
    //     [sendMsg],
    //     Celestial.ctx.fees.send,
    // );
    // console.log(response);
    console.log(await d.bank?.getBalance({ address: 'darc1rzdt9wrzwv3x7vv6f7xpyaqqgf3lt6phptqtsx', denom: 'udarc' }));
    console.log(await d.bank?.TotalSupply({}));
})();
