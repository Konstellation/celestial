import { ClassLikeDeclaration } from 'typescript';

export enum PubKeyMeta {
    Secp256k1 = '23590233135',
    MultisigThreshold = '34193247226',
}

enum Typ3 {
    Varint = 0,
    ByteLength = 2,
}

export const TypeInfos = (t: PubKeyMeta) => {
    switch (t) {
        case PubKeyMeta.MultisigThreshold:
            return {
                prefix: [34, 193, 247, 226],
                disamb: [180, 73, 174],
                name: 'tendermint/PubKeyMultisigThreshold',
                registered: true,
            };
        case PubKeyMeta.Secp256k1:
            return {
                prefix: [235, 90, 233, 135],
                disamb: [248, 204, 234],
                name: 'tendermint/PubkeySecp256k1',
                registered: true,
            };
        default:
            return {
                prefix: [0, 0, 0, 0],
                disamb: [0, 0, 0],
                name: '',
                registered: false,
            };
    }
};

export const FieldInfos = (t: PubKeyMeta | undefined) => {
    switch (t) {
        case PubKeyMeta.MultisigThreshold:
            return {
                threshold: {
                    index: 0,
                    binFieldNum: 1,
                    ftype: 'Number',
                },
                public_keys: {
                    index: 1,
                    binFieldNum: 2,
                    ftype: 'Array',
                    prefix: PubKeyMeta.Secp256k1,
                    unpackedList: true,
                },
                registered: true,
            };
        default:
            return {};
    }
};

export const typeToTyp3 = (v: ClassLikeDeclaration) => {
    switch (v.constructor.name) {
        case 'Number': {
            return Typ3.Varint;
        }
        case 'Array': {
            return Typ3.ByteLength;
        }
    }
};

export const encodeFieldNumberAndTyp3 = (num: number, typ: Typ3 | undefined) => {
    if (!typ || (typ & 0xf8) !== 0) {
        throw new Error(`invalid Typ3 byte ${typ}`);
    }
    if (num < 0 || num > 1 << (29 - 1)) {
        throw new Error(`invalid field number ${num}`);
    }

    // Pack Typ3 and field number.
    const value64 = (num << 3) | typ;
    return [value64];
};

export const encodeBinaryByteArray = (val: Buffer) => {
    const len = val.length;
    return [len, ...val];
};

export const encodeBinaryNumber = (val: Buffer) => {
    return [val];
};

export const encodeBinaryObject = (val: Record<string, any>, finfos: any) => {
    let buf = [];
    for (const k in val) {
        const finfo = finfos[k];
        if (finfo.unpackedList) {
            buf.push(...encodeBinaryList(val[k], finfo));
        } else {
            const typ3 = typeToTyp3(val[k]);
            buf.push(...encodeFieldNumberAndTyp3(finfo.binFieldNum, typ3));
            buf.push(...encodeBinary(val[k]));
        }
    }

    return buf;
};

export const encodeBinaryList = (val: any, finfo: any) => {
    const buf = [];
    for (const e of val) {
        const typ3 = typeToTyp3(e);
        buf.push(...encodeFieldNumberAndTyp3(finfo.binFieldNum, typ3));

        const bz = marshalBinaryBare(e, finfo.prefix);
        buf.push(bz.length);
        buf.push(...bz);
    }

    return buf;
};

export const encodeBinary = (val: Buffer, prefix?: PubKeyMeta): any => {
    switch (val.constructor.name) {
        case 'Buffer':
            return encodeBinaryByteArray(val);
        case 'Array':
            return encodeBinaryByteArray(val);
        case 'Number':
            return encodeBinaryNumber(val);
        case 'Object':
            const finfos = FieldInfos(prefix);
            return encodeBinaryObject(val, finfos);
        default:
            return null;
    }
};

export const marshalBinaryBare = (val: any, t: PubKeyMeta) => {
    const info = TypeInfos(t);
    let result: any[] = [];

    const bz = encodeBinary(val, t);
    if (info.registered) {
        result = [...info.prefix, ...bz];
    }
    return result;
};

export const marshalBinaryBareMULTISIG = (val: Record<string, any>) => {
    const buf = [10, 5, 8];
    buf.push(val.bitArray.extraBitsStored);
    buf.push(...[18, 1]);
    buf.push(...val.bitArray.elems);
    buf.push(
        ...val.sigs
            .map((v: any) => encodeBinary(v))
            .map((v: any) => [18, ...v])
            .flat(),
    );

    return Buffer.from(buf);
};

export const unmarshalBinaryBare = (val: any[]): Record<string, any> => {
    let buf = [];
    let prefix = [];
    let len = 0;
    let payload = [];
    let t;

    for (let i = 0; i < val.length; i++) {
        buf.push(val[i]);

        if (i === 3) {
            t = TypeInfos(buf.join('') as PubKeyMeta);
            if (!t.registered) {
                buf = [];
            } else {
                prefix = buf;
                buf = [];
            }
        }

        if (i === prefix.length) {
            len = buf[0];
            if (len === val.length - prefix.length - 1) {
                payload = val.splice(i + 1, len);
                break;
            }
        }
    }

    return { t, payload };
};
