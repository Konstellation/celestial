interface BaseRequestInput {
    from: string;
    fee: {
        amount: string;
        denom: string;
    };
    accountNumber: string;
    sequence: string;
    chainId: string;
    gas: string;
    memo: string;
}

export default class BaseRequest {
    constructor({ from, fee: { amount, denom }, accountNumber, sequence, chainId, gas, memo }: BaseRequestInput) {
        return {
            base_req: {
                chain_id: chainId,
                from,
                memo,
                gas,
                account_number: accountNumber,
                sequence,
                fees: [
                    {
                        amount,
                        denom,
                    },
                ],
            },
        };
    }
}
