import Sha256 from 'sha256';
import RIPEMD160 from 'ripemd160';

/**
 * Convert public key into bitcoin address
 */
export default (publicKey: Uint8Array): Buffer =>
    new RIPEMD160().update(Buffer.from(Sha256(publicKey as Buffer, { asBytes: true }))).digest();
