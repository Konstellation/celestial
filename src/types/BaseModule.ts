import { Context } from './Context';

export class BaseModule {
    ctx: Context;

    constructor(ctx: Context) {
        this.ctx = ctx;
    }
}
