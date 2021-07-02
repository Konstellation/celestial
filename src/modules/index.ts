import { Module } from '../types/Module';
import { Context } from '../types/Context';
import AuthModule from './auth';
import BankModule from './bank';
import TxModule from './tx';
import StakingModule from './staking';
import DistributionModule from './distribution';
import SlashingModule from './slashing';
import ParamsModule from './params';
import GovModule from './gov';
import MintModule from './mint';
import AccountModule from './account';

export class Modules {
    // dependencies
    tx: TxModule;
    account: AccountModule;

    auth?: AuthModule;
    bank?: BankModule;
    staking?: StakingModule;
    distribution?: DistributionModule;
    slashing?: SlashingModule;
    params?: ParamsModule;
    gov?: GovModule;
    mint?: MintModule;

    constructor(modules: Module[], ctx: Context) {
        this.tx = new TxModule(ctx);
        this.account = new AccountModule(ctx);

        modules.forEach((m, i) => {
            this[m] = new (require(`./${m}`).default)(ctx);
            if (!i) ctx.modules = this;
        });
    }
}
