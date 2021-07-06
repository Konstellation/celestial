import KeystoreV3, {
    AlgoType,
    KdfType,
    KeystoreV3Struct,
    Pbkdf2,
    PBKDF2_C,
    ScryptKdf,
    ScryptKdfParams,
} from './keystore';

const publicKey = 'darcpub1addwnpepqg30jeq9spjzgc6nvmlgr353sl3n45cglqjxapyl23haywn0uusycv5sn9r';
const scryptKdfParams = {
    dklen: 32,
    n: 8192,
    p: 1,
    r: 8,
    salt: '4c463a8fefbfb73e11e514a245454f42cea8e45b980120d89c71ebbc581a033c',
};
const pbKdf2Params = {
    dklen: 32,
    prf: AlgoType.PRF,
    digest: AlgoType.SHA256,
    c: PBKDF2_C,
    salt: '4c463a8fefbfb73e11e514a245454f42cea8e45b980120d89c71ebbc581a033c',
};
const password = 'hawking1';
const keystore = {
    address: 'darc1rzdt9wrzwv3x7vv6f7xpyaqqgf3lt6phptqtsx',
    crypto: {
        cipher: AlgoType.AES128CTR,
        ciphertext: '07ee1d1f64f0b719b3e8b6788971d87f1f2137b349d5d047c9818cf3bc79872ffcbd50bfbd',
        cipherparams: {
            iv: '14037fcf066213200bf2695da591cc47',
        },
        kdf: KdfType.SCRYPT,
        kdfparams: scryptKdfParams,
        mac: 'bd211eab1d8bab79da1cb7b15793ed459dea2c215457e7c2bbe07093fbad9106',
    },
    id: '93a2c265-bdbc-444e-ae56-1276f82801f0',
    version: 3,
};

describe('scryptKdf', () => {
    it('instantiate', () => {
        const kdf = new ScryptKdf(scryptKdfParams);

        expect(kdf).toBeInstanceOf(ScryptKdf);
    });

    it('getDerivedKey', () => {
        const kdf = new ScryptKdf(scryptKdfParams);
        const buf = kdf.getDerivedKey(password);

        expect(buf).toBeInstanceOf(Buffer);
    });

    it('getKdfParams', () => {
        const kdf = new ScryptKdf(scryptKdfParams);
        const params = kdf.getKdfParams();

        expect(params).toHaveProperty('n', scryptKdfParams.n);
        expect(params).toHaveProperty('r', scryptKdfParams.r);
        expect(params).toHaveProperty('p', scryptKdfParams.p);
    });
});

describe('pbKdf2', () => {
    it('instantiate', () => {
        const kdf = new Pbkdf2(pbKdf2Params);

        expect(kdf).toBeInstanceOf(Pbkdf2);
    });

    it('getDerivedKey', () => {
        const kdf = new Pbkdf2(pbKdf2Params);
        const buf = kdf.getDerivedKey(password);

        expect(buf).toBeInstanceOf(Buffer);
    });

    it('getKdfParams', () => {
        const kdf = new Pbkdf2(pbKdf2Params);
        const params = kdf.getKdfParams();

        expect(params).toHaveProperty('prf', pbKdf2Params.prf);
        expect(params).toHaveProperty('c', pbKdf2Params.c);
        expect(params).toHaveProperty('digest', pbKdf2Params.digest);
    });
});

describe('keystore', () => {
    const ks = new KeystoreV3();

    it('import', () => {
        // @ts-ignore
        const imported = ks.import(keystore, password);

        expect(imported).toHaveProperty('privateKey');
    });

    it('getCipherText', () => {
        const kdf = ks.getKdf({ kdf: KdfType.SCRYPT, kdfparams: scryptKdfParams });
        const cipherText = ks.getCipherText(keystore.crypto, kdf.getDerivedKey(password));

        expect(cipherText).toBeInstanceOf(Buffer);
    });

    it('checksum', () => {
        const kdf = ks.getKdf({ kdf: KdfType.SCRYPT, kdfparams: scryptKdfParams });
        const cipherText = ks.getCipherText(keystore.crypto, kdf.getDerivedKey(password));
        const derivedKey = kdf.getDerivedKey(password);
        const checksum = ks.checksum(derivedKey, cipherText);

        expect(checksum).toBe('bd211eab1d8bab79da1cb7b15793ed459dea2c215457e7c2bbe07093fbad9106');
    });

    it('encrypt', () => {
        const kdf = ks.getKdf({ kdf: KdfType.SCRYPT, kdfparams: scryptKdfParams });
        const cipherText = ks.getCipherText(keystore.crypto, kdf.getDerivedKey(password));
        const derivedKey = kdf.getDerivedKey(password);
        const enc = ks.encrypt(derivedKey, cipherText, keystore.crypto);

        expect(enc).toBeInstanceOf(Buffer);
    });

    it('decrypt', () => {
        const kdf = ks.getKdf({ kdf: KdfType.SCRYPT, kdfparams: scryptKdfParams });
        const cipherText = ks.getCipherText(keystore.crypto, kdf.getDerivedKey(password));
        const derivedKey = kdf.getDerivedKey(password);
        const dec = ks.decrypt(keystore.crypto, derivedKey, cipherText);

        expect(dec).toBeInstanceOf(Buffer);
    });

    it('export', () => {
        // @ts-ignore
        const imported = ks.import(keystore, password);
        const exported = ks.export(
            password,
            imported.privateKey,
            Buffer.from(publicKey, 'hex'),
            keystore.address,
            'hawking',
            keystore.crypto,
        );

        expect(exported).toBeDefined();
    });
});
