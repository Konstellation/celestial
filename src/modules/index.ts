import { Module } from '../types/Module';
import { Context } from '../types/Context';
import AuthModule from './auth';
import BankModule from './bank';
import TxModule from './tx';
import StakingModule from './staking';
import DistributionModule from './distribution';

export class Modules {
    auth?: AuthModule;
    bank?: BankModule;
    tx?: TxModule;
    staking?: StakingModule;
    distribution?: DistributionModule;

    constructor(modules: Module[], ctx: Context) {
        modules.forEach((m, i) => {
            this[m] = new (require(`./${m}`).default)(ctx);
            if (!i) ctx.modules = this;
        });
    }
}
