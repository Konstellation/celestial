import Sha256 from 'sha256';
import crypto from 'crypto';

import RIPEMD160 from 'ripemd160';

/**
 * Convert public key into bitcoin address
 */
export const btcaddr = (publicKey: Buffer): Buffer =>
    new RIPEMD160().update(Buffer.from(Sha256(publicKey, { asBytes: true }))).digest();

/**
 * Convert multisig public key into address
 */
export const multisigaddr = (publicKey: Buffer): Buffer => {
    return crypto.createHash('sha256').update(publicKey).digest().slice(0, 20);
};
