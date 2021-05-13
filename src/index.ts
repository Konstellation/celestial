import { Module } from './types/Module';
import { Modules } from './modules';
import { SigningStargateClient } from '@cosmjs/stargate';
import { coins, DirectSecp256k1HdWallet } from '@cosmjs/proto-signing';
import { Decimal } from '@cosmjs/math';

export class Celestial extends Modules {
    constructor(grpcAddress: string, modules: Module[]) {
        super(modules, grpcAddress);
    }
}

(async function() {
    const wallet = await DirectSecp256k1HdWallet.fromMnemonic(
        'disorder squirrel cage garlic oyster leaf segment casual siren shiver lecture among either wool improve head thunder walnut cram force crystal advice slab sail',
        {
            prefix: 'darc',
        },
    );
    const client = await SigningStargateClient.connectWithSigner('206.81.29.202:26657', wallet, {
        gasPrice: { amount: Decimal.fromUserInput('0.025', 3), denom: 'udarc' },
    });
    console.log(await client.getBlock());
    // console.log(await client.sendTokens(
    //     'darc1rzdt9wrzwv3x7vv6f7xpyaqqgf3lt6phptqtsx',
    //     'darc18c7c95p5cqqxlsg4m56626djna6eyqq4xkvtu3',
    //     coins(100000, 'udarc'),
    // ));

    const d = new Celestial('206.81.29.202:9090', [Module.AUTH, Module.BANK, Module.TX]);
    console.log(await d.auth?.getParams());
    console.log(await d.bank?.getParams());
    console.log(await d.tx?.getTxByHash('32E4E0E2E9DB336E77DCE1AACF53F9060A08577B61F70864E8A82EF340EB5D3B'));
})();
