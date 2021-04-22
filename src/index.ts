import { getAccount } from './modules/auth/api';

(async function() {
    const r = await getAccount('darc1rzdt9wrzwv3x7vv6f7xpyaqqgf3lt6phptqtsx');
    console.log(r?.getAccountNumber());
    console.log(r?.getPubKey());
    console.log(r?.getAddress());
    console.log(r?.toObject());
})();

// // @ts-ignore
// bankClient.Balance(
//     {
//         address: 'darc1rzdt9wrzwv3x7vv6f7xpyaqqgf3lt6phptqtsx',
//         denom: 'darc',
//     },
//     // @ts-ignore
//     (err, res) => {
//         console.log(res);
//     },
// );

export class ModuleManager {
    constructor() {}
}
