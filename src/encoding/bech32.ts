import {
    BECH32_PREFIX_ACC_ADDR,
    BECH32_PREFIX_ACC_PUB,
    BECH32_PREFIX_CONS_PUB,
    BECH32_PREFIX_VAL_ADDR,
} from '../constants';
import { bech32 } from 'bech32';

export const bech32ifyAccPub = (pub: ArrayLike<number>, LIMIT = 90): string => {
    return bech32.encode(BECH32_PREFIX_ACC_PUB, bech32.toWords(pub), LIMIT);
};

export const bech32ifyAccAddr = (addr: ArrayLike<number>, LIMIT: number = 90): string => {
    return bech32.encode(BECH32_PREFIX_ACC_ADDR, bech32.toWords(addr), LIMIT);
};

export const unbech32ify = (addr: string) => {
    return bech32.fromWords(bech32.decode(addr).words);
};

export const bech32ifyConsPubKey = (pk: Uint8Array): string => {
    return bech32.encode(BECH32_PREFIX_CONS_PUB, bech32.toWords(pk));
};

export const bech32ifyValAddr = (addr: ArrayLike<number>, LIMIT: number = 90): string => {
    return bech32.encode(BECH32_PREFIX_VAL_ADDR, bech32.toWords(addr), LIMIT);
};
