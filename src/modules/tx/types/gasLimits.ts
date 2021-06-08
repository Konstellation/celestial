import { StdFee } from './stdFee';

export type GasLimits<T extends Record<string, StdFee>> = {
    readonly [key in keyof T]: number;
};
