import { Module } from './types/Module';
import { Modules } from './modules';

export class Celestial extends Modules {
    constructor(grpcAddress: string, modules: Module[]) {
        super(modules, grpcAddress);
    }
}

// (async function() {
//     const d = new Celestial('206.81.29.202:9090', [Module.AUTH, Module.BANK]);
//     console.log(await d.bank?.getParams());
//     console.log(await d.auth?.getParams());
// })();
