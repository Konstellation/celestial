import { Module } from '../types/Module';
import AuthModule from './auth';
import BankModule from './bank';

export class Modules {
    auth?: AuthModule;
    bank?: BankModule;

    constructor(modules: Module[], grpcAddress: string) {
        modules.forEach(m => (this[m] = new (require(`./${m}`).default)(grpcAddress)));
    }
}
