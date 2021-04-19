import axios from '../../../axios';

export const fetchTransactions = async ({
    action = 'send',
    ...params
}: {
    action: string;
    params: Record<string, any>;
}): Promise<any> => {
    const { data } = await axios.get('/txs', {
        params: {
            'message.action': action,
            ...params,
        },
    });

    return data;
};
