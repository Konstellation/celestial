import { Reader, Writer } from 'protobufjs';

export interface Description {
    /** moniker defines a human-readable name for the validator. */
    moniker: string;
    /** identity defines an optional identity signature (ex. UPort or Keybase). */
    identity: string;
    /** website defines an optional website link. */
    website: string;
    /** security_contact defines an optional email for security contact. */
    securityContact: string;
    /** details define other optional details. */
    details: string;
}

export const Description = {
    encode(message: Description, writer: Writer = Writer.create()): Writer {
        if (message.moniker !== '') {
            writer.uint32(10).string(message.moniker);
        }
        if (message.identity !== '') {
            writer.uint32(18).string(message.identity);
        }
        if (message.website !== '') {
            writer.uint32(26).string(message.website);
        }
        if (message.securityContact !== '') {
            writer.uint32(34).string(message.securityContact);
        }
        if (message.details !== '') {
            writer.uint32(42).string(message.details);
        }
        return writer;
    },

    decode(input: Reader | Uint8Array, length?: number): Description {
        const reader = input instanceof Reader ? input : new Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {} as Description;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.moniker = reader.string();
                    break;
                case 2:
                    message.identity = reader.string();
                    break;
                case 3:
                    message.website = reader.string();
                    break;
                case 4:
                    message.securityContact = reader.string();
                    break;
                case 5:
                    message.details = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
};
