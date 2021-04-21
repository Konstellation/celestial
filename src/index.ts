// import { bankClient } from './modules/bank/api';
import { authClient } from './modules/auth/api';

//@ts-ignore
authClient.Account({ address: 'darc1rzdt9wrzwv3x7vv6f7xpyaqqgf3lt6phptqtsx' }, (err, res) => {
    console.log(res);
});
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
