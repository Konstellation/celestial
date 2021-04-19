export const DEFAULT_DENOM = 'darc';
// AddrLen defines a valid address length
export const ADDR_LEN = 20;
export const DEFAULT_FEE = 0;
export const DEFAULT_GAS = 200000;
export const DEFAULT_KEY_PATH = "m/44'/118'/0'/0/0";
export const COIN_TYPE = 118;

// Bech32PrefixAccAddr defines the Bech32 prefix of an account's address
export const BECH32_MAIN_PREFIX = 'darc';
// PrefixAccount is the prefix for account keys
export const PREFIX_ACCOUNT = 'acc';
// PrefixValidator is the prefix for validator keys
export const PREFIX_VALIDATOR = 'val';
// PrefixConsensus is the prefix for consensus keys
export const PREFIX_CONSENSUS = 'cons';
// PrefixPublic is the prefix for public keys
export const PREFIX_PUBLIC = 'pub';
// PrefixOperator is the prefix for operator keys
export const PREFIX_OPERATOR = 'oper';
// PrefixAddress is the prefix for addresses
export const PREFIX_ADDRESS = 'addr';

// Bech32PrefixAccAddr defines the Bech32 prefix of an account's address
export const BECH32_PREFIX_ACC_ADDR = BECH32_MAIN_PREFIX;
// Bech32PrefixAccPub defines the Bech32 prefix of an account's public key
export const BECH32_PREFIX_ACC_PUB = BECH32_MAIN_PREFIX + PREFIX_PUBLIC;
// Bech32PrefixValAddr defines the Bech32 prefix of a validator's operator address
export const BECH32_PREFIX_VAL_ADDR = BECH32_MAIN_PREFIX + PREFIX_VALIDATOR + PREFIX_OPERATOR;
// Bech32PrefixValPub defines the Bech32 prefix of a validator's operator public key
export const BECH32_PREFIX_VAL_PUB = BECH32_MAIN_PREFIX + PREFIX_VALIDATOR + PREFIX_OPERATOR + PREFIX_PUBLIC;
// Bech32PrefixConsAddr defines the Bech32 prefix of a consensus node address
export const BECH32_PREFIX_CONS_ADDR = BECH32_MAIN_PREFIX + PREFIX_VALIDATOR + PREFIX_CONSENSUS;
// Bech32PrefixConsPub defines the Bech32 prefix of a consensus node public key
export const BECH32_PREFIX_CONS_PUB = BECH32_MAIN_PREFIX + PREFIX_VALIDATOR + PREFIX_CONSENSUS + PREFIX_PUBLIC;

export const BASE64_REGEX = /^(?:[A-Za-z0-9+/]{4})*(?:[A-Za-z0-9+/]{2}==|[A-Za-z0-9+/]{3}=)?$/;
