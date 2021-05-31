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
        modules.forEach(m => (this[m] = new (require(`./${m}`).default)(ctx)));
    }
}
