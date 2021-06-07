import { Any } from '@cosmjs/stargate/build/codec/google/protobuf/any';
import { EncodeObject } from './encodeObject';

export interface TxBodyEncodeObject extends EncodeObject {
    readonly typeUrl: '/cosmos.tx.v1beta1.TxBody';
    readonly value: TxBodyValue;
}

interface TxBodyValue {
    readonly messages: readonly EncodeObject[];
    readonly memo?: string;
    readonly timeoutHeight?: Long;
    readonly extensionOptions?: Any[];
    readonly nonCriticalExtensionOptions?: Any[];
}
