import Account from './Account';
import { BECH32_MAIN_PREFIX, DEFAULT_KEY_PATH } from '../constants';

const account = new Account(BECH32_MAIN_PREFIX, DEFAULT_KEY_PATH);

const ADDR_LENGTH = 43;
const PUBLIC_KEY_LENGTH = 33;
const PRIVATE_KEY_VALID = 'TnMh+1SnzCw2GhgTASmQT+gwA/BQQVMgwc+eHAbMfxU=';
const ADDRESS_VALID = 'darc1q0xx8u2aguh3ykgml8jacv3u9ayy0p5nk8py9g';
const ADDRESS_INVALID_PREFIX = 'darc2q0xx8u2aguh3ykgml8jacv3u9ayy0p5nk8py9g';
const ADDRESS_INVALID_FORMAT = 'darc1q0xx8u2aguh3ykgml8jacv3u9ayy0p5nk8py9.';
const ADDRESS_INVALID_LENGTH = 'darc1q0xx8u2aguh3ykgml8jacv3u9ayy0p5nk8py9';
const MNEMONIC_VALID =
    'disorder squirrel cage garlic oyster leaf segment casual siren shiver lecture among either wool improve head thunder walnut cram force crystal advice slab sail';
const MNEMONIC_INVALID =
    'squirrel cage garlic oyster leaf segment casual siren shiver lecture among either wool improve head thunder walnut cram force crystal advice slab sail';
const MNEMONIC_INVALID_BIP =
    'makaka squirrel cage garlic oyster leaf segment casual siren shiver lecture among either wool improve head thunder walnut cram force crystal advice slab sail';
const PUBLIC_FROM_MNEMONIC = 'AiL5ZAWAZCRjU2b+gcaRh+M60wj4JG6En1Rv0jpv5yBM';
const ADDR_FROM_MNEMONIC = 'darc1rzdt9wrzwv3x7vv6f7xpyaqqgf3lt6phptqtsx';
const PUBLIC_FROM_MNEMONIC_BECH32 = 'darcpub1addwnpepqg30jeq9spjzgc6nvmlgr353sl3n45cglqjxapyl23haywn0uusycv5sn9r';

describe('account', () => {
    it('generate + getAddress', async () => {
        await account.generate();
        const mnemonic = account.mnemonic;
        const addr = account.getAddress();
        await account.recover(mnemonic);

        expect(addr.length).toEqual(ADDR_LENGTH);
        expect(account.getAddress()).toBe(addr);
    });

    it('recover', async () => {
        await account.recover(MNEMONIC_VALID);

        expect(account.getPublicKey().value).toBe(PUBLIC_FROM_MNEMONIC);
        expect(account.getAddress()).toBe(ADDR_FROM_MNEMONIC);
    });

    it('[SUCCESS] checkSeed', () => {
        account.checkSeed(MNEMONIC_VALID);
    });

    it('[FAIL] checkSeed wrong length', () => {
        expect(() => account.checkSeed(MNEMONIC_INVALID)).toThrow('seed length must be equal 12 or 24');
    });

    it('[FAIL] checkSeed bip error', () => {
        expect(() => account.checkSeed(MNEMONIC_INVALID_BIP)).toThrow('seed is invalid');
    });

    it('[SUCCESS] isValidAddress', () => {
        expect(account.isValidAddress(ADDRESS_VALID)).toBe(true);
    });

    it('[FAIL] isValidAddress invalid prefix', () => {
        expect(account.isValidAddress(ADDRESS_INVALID_PREFIX)).toBe(false);
    });

    it('[FAIL] isValidAddress invalid format', () => {
        expect(account.isValidAddress(ADDRESS_INVALID_FORMAT)).toBe(false);
    });

    it('[FAIL] isValidAddress invalid length', () => {
        expect(account.isValidAddress(ADDRESS_INVALID_LENGTH)).toBe(false);
    });

    it('import', () => {
        account.import({ privateKey: Buffer.from(PRIVATE_KEY_VALID, 'base64'), name: 'Sergay' });

        expect(account.name).toBe('Sergay');
    });

    it('getPublicKeyRaw', async () => {
        await account.generate();
        const publicKey = account.getPublicKeyRaw();

        expect(publicKey.byteLength).toEqual(PUBLIC_KEY_LENGTH);
    });

    it('getPublicKey', async () => {
        await account.generate();
        const publicKey = account.getPublicKey().value;

        expect(account.isValidBase64(publicKey)).toBe(true);
    });

    it('getPublicKeyEncoded', async () => {
        await account.recover(MNEMONIC_VALID);
        const publicKey = account.getPublicKeyEncoded();

        expect(publicKey).toBe(PUBLIC_FROM_MNEMONIC_BECH32);
    });
});
