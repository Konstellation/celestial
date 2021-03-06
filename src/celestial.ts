import { Module } from './types/Module';
import { Modules } from './modules';
import { TendermintRpc } from './modules/tendermint-rpc';
import { Context, ContextOptions } from './types/Context';

export class Celestial extends Modules {
    static ctx: Context;

    constructor(modules: Module[], ctx: Context) {
        super(modules, ctx);
    }

    static async create({
        rpcAddress,
        isHttp = true,
        modules,
        options,
    }: {
        rpcAddress: string;
        isHttp: boolean;
        modules: Module[];
        options: ContextOptions;
    }): Promise<Celestial> {
        Celestial.ctx = new Context(await TendermintRpc.connect(rpcAddress, isHttp), options);
        return new this(modules, Celestial.ctx);
    }

    static async fetchInfo() {
        const status = await Celestial.ctx.rpc.get().status();
        return status.nodeInfo;
    }
}
