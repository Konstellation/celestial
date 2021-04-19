import { authClient } from './modules/auth/api';
console.log(authClient);
// @ts-ignore
authClient.Account({ address: 'darc1rzdt9wrzwv3x7vv6f7xpyaqqgf3lt6phptqtsx' }, (err, res) => {
    // @ts-ignore
    if (err) throw err;

    console.log('Account: ');
    // @ts-ignore
    console.log(res);
});

export class ModuleManager {
    constructor() {}
}

// import { StargateClient} from "@cosmjs/stargate";
//
// const hello = async () => {
//     const client = await StargateClient.connect("206.81.29.202:26657");
//
//     const account = await client.getAccount('darc1rzdt9wrzwv3x7vv6f7xpyaqqgf3lt6phptqtsx');
//     const height = await client.getHeight();
//     console.log(height);
//
//     client.disconnect();
//
// }
// hello();
