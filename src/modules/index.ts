import { Module } from '../types/Module';
import AuthModule from './auth';
import BankModule from './bank';
import TxModule from './tx';

export class Modules {
    auth?: AuthModule;
    bank?: BankModule;
    tx?: TxModule;

    constructor(modules: Module[]) {
        modules.forEach(m => (this[m] = new (require(`./${m}`).default)()));
    }
}
