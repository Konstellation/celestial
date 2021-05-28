import { Module } from './types/Module';
import { Modules } from './modules';
import { SigningStargateClient, createProtobufRpcClient } from '@cosmjs/stargate';
import { Tendermint34Client } from '@cosmjs/tendermint-rpc';
import { coins, DirectSecp256k1HdWallet } from '@cosmjs/proto-signing';
import { Decimal } from '@cosmjs/math';
import { Reader, Writer } from 'protobufjs';
import { TendermintRpc } from './modules/tendermint-rpc';

const rpcAddr = '206.81.29.202:26657';

export class Celestial extends Modules {
    constructor(modules: Module[]) {
        super(modules);
    }

    static async create(rpcAddress: string, modules: Module[]): Promise<Celestial> {
        await TendermintRpc.connect(rpcAddress);
        return new this(modules);
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
    // console.log(await client.getBalance('darc1rzdt9wrzwv3x7vv6f7xpyaqqgf3lt6phptqtsx', 'udarc'));
    const sendMsg = {
        typeUrl: '/cosmos.bank.v1beta1.MsgSend',
        value: {
            fromAddress: 'darc1rzdt9wrzwv3x7vv6f7xpyaqqgf3lt6phptqtsx',
            toAddress: 'darc18c7c95p5cqqxlsg4m56626djna6eyqq4xkvtu3',
            amount: coins(100000, 'udarc'),
        },
    };

    // const c = await Celestial.create(rpcAddr, [Module.BANK, Module.AUTH]);
    // const res = await c.bank?.getBalance({ address: 'darc1rzdt9wrzwv3x7vv6f7xpyaqqgf3lt6phptqtsx', denom: 'udarc' });
    // console.log(res);
    // const res1 = await client.getBalance('darc1rzdt9wrzwv3x7vv6f7xpyaqqgf3lt6phptqtsx', 'udarc');
    // console.log(res1);
    // const res1 = await c.auth?.getAccount('darc1rzdt9wrzwv3x7vv6f7xpyaqqgf3lt6phptqtsx');
    // console.log(res1);
    // console.log(client.registry);
    const dd = await client.signAndBroadcast(
        'darc1rzdt9wrzwv3x7vv6f7xpyaqqgf3lt6phptqtsx',
        [sendMsg],
        client.fees.send,
        '',
    );
    console.log(dd);
    // console.log(
    //     await client.signAndBroadcast('darc1rzdt9wrzwv3x7vv6f7xpyaqqgf3lt6phptqtsx', [sendMsg], client.fees.send, ''),
    // );

    // console.log(await client.getBlock());
    // console.log(await client.sendTokens(
    //     'darc1rzdt9wrzwv3x7vv6f7xpyaqqgf3lt6phptqtsx',
    //     'darc18c7c95p5cqqxlsg4m56626djna6eyqq4xkvtu3',
    //     coins(100000, 'udarc'),
    // ));
    // const d = new Celestial('206.81.29.202:9090', [Module.AUTH, Module.BANK, Module.TX]);
    // console.log(await d.auth?.getParams());
    // console.log(await d.bank?.getParams());
    // console.log(await d.tx?.getTxByHash('32E4E0E2E9DB336E77DCE1AACF53F9060A08577B61F70864E8A82EF340EB5D3B'));
    const tmClient = await Tendermint34Client.connect('206.81.29.202:26657');

    async function queryUnverified(path: string, request: Uint8Array): Promise<Uint8Array> {
        const response = await tmClient.abciQuery({
            path: path,
            data: request,
            prove: false,
        });

        if (response.code) {
            throw new Error(`Query failed with (${response.code}): ${response.log}`);
        }

        return response.value;
    }
    function createProtobufRpcClient() {
        return {
            request: (service: string, method: string, data: Uint8Array): Promise<Uint8Array> => {
                const path = `/${service}/${method}`;
                return queryUnverified(path, data);
            },
        };
    }
    const pbRpc = createProtobufRpcClient();
    // function encode(message: any, writer: Writer = Writer.create()): Writer {
    //     if (message.address !== '') {
    //         writer.uint32(10).string(message.address);
    //     }
    //     if (message.denom !== '') {
    //         writer.uint32(18).string(message.denom);
    //     }
    //     return writer;
    // }

    // function decode(input: Reader | Uint8Array, length?: number) {
    //     const reader = input instanceof Reader ? input : new Reader(input);
    //     let end = length === undefined ? reader.len : reader.pos + length;
    //     const message = {} as { address: string; denom: string };
    //     while (reader.pos < end) {
    //         const tag = reader.uint32();
    //         switch (tag >>> 3) {
    //             case 1:
    //                 message.address = reader.string();
    //                 break;
    //             case 2:
    //                 message.denom = reader.string();
    //                 break;
    //             default:
    //                 reader.skipType(tag & 7);
    //                 break;
    //         }
    //     }
    //     return message;
    // }
    // const Coin = {
    //     encode(message: any, writer: Writer = Writer.create()): Writer {
    //         if (message.denom !== '') {
    //             writer.uint32(10).string(message.denom);
    //         }
    //         if (message.amount !== '') {
    //             writer.uint32(18).string(message.amount);
    //         }
    //         return writer;
    //     },

    //     decode(input: Reader | Uint8Array, length?: number) {
    //         const reader = input instanceof Reader ? input : new Reader(input);
    //         let end = length === undefined ? reader.len : reader.pos + length;
    //         const message = {} as any;
    //         while (reader.pos < end) {
    //             const tag = reader.uint32();
    //             switch (tag >>> 3) {
    //                 case 1:
    //                     message.denom = reader.string();
    //                     break;
    //                 case 2:
    //                     message.amount = reader.string();
    //                     break;
    //                 default:
    //                     reader.skipType(tag & 7);
    //                     break;
    //             }
    //         }
    //         return message;
    //     },
    // };

    // function encode(message: any, writer: Writer = Writer.create()): Writer {
    //     if (message.fromAddress !== '') {
    //         writer.uint32(10).string(message.fromAddress);
    //     }
    //     if (message.toAddress !== '') {
    //         writer.uint32(18).string(message.toAddress);
    //     }
    //     for (const v of message.amount) {
    //         Coin.encode(v!, writer.uint32(26).fork()).ldelim();
    //     }
    //     return writer;
    // }

    // function decode(input: Reader | Uint8Array, length?: number) {
    //     const reader = input instanceof Reader ? input : new Reader(input);
    //     let end = length === undefined ? reader.len : reader.pos + length;
    //     const message = {} as any;
    //     message.amount = [];
    //     while (reader.pos < end) {
    //         const tag = reader.uint32();
    //         switch (tag >>> 3) {
    //             case 1:
    //                 message.fromAddress = reader.string();
    //                 break;
    //             case 2:
    //                 message.toAddress = reader.string();
    //                 break;
    //             case 3:
    //                 message.amount.push(Coin.decode(reader, reader.uint32()));
    //                 break;
    //             default:
    //                 reader.skipType(tag & 7);
    //                 break;
    //         }
    //     }
    //     return message;
    // }

    // const data = encode({
    //     fromAddress: 'darc1rzdt9wrzwv3x7vv6f7xpyaqqgf3lt6phptqtsx',
    //     toAddress: 'darc18c7c95p5cqqxlsg4m56626djna6eyqq4xkvtu3',
    //     amount: coins(100000, 'udarc'),
    // }).finish();
    // const res = await pbRpc.request('cosmos.bank.v1beta1.Msg', 'Send', data);
    // const d = decode(new Reader(res));
    // console.log(d);
    // 'tx.hash=00B6C3B88741A05830B1F5E5BEDD905275E3B1ECA9A6EDE66CD0F4BD2C23B768'
    // const a = await client.getTx('00B6C3B88741A05830B1F5E5BEDD905275E3B1ECA9A6EDE66CD0F4BD2C23B768');
    // console.log(a);
})();
