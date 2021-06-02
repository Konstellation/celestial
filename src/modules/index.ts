import { Module } from '../types/Module';
import { Context } from '../types/Context';
import AuthModule from './auth';
import BankModule from './bank';
import TxModule from './tx';

export class Modules {
    auth?: AuthModule;
    bank?: BankModule;
    tx?: TxModule;

    constructor(modules: Module[], ctx: Context) {
        modules.forEach((m, i) => {
            const c = new (require(`./${m}`).default)(ctx);
            this[m] = c;
            if (!i) ctx.modules = this;
        });
    }
}
