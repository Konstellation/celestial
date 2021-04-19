import { BECH32_PREFIX_ACC_ADDR, BECH32_PREFIX_ACC_PUB } from '../constants';
import { bech32 } from 'bech32';

export const bech32ifyAccPub = (pub: ArrayLike<number>, LIMIT = 90): string => {
    return bech32.encode(BECH32_PREFIX_ACC_PUB, bech32.toWords(pub), LIMIT);
};

export const bech32ifyAccAddr = (addr: ArrayLike<number>, LIMIT: number = 90): string => {
    return bech32.encode(BECH32_PREFIX_ACC_ADDR, bech32.toWords(addr), LIMIT);
};
