import * as base64js from 'base64-js';
import { BASE64_REGEX } from '../constants';

export function toBase64(data: Uint8Array): string {
    return base64js.fromByteArray(data);
}

export function fromBase64(base64String: string): Uint8Array {
    if (!base64String.match(BASE64_REGEX)) {
        throw new Error('Invalid base64 string format');
    }
    return base64js.toByteArray(base64String);
}
