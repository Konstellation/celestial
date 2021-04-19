import axios from '../../../axios';

export const fetchValidators = async (status: string, params: { page?: number; limit?: number } = {}) => {
    const { data } = await axios.get('/staking/validators', {
        params: {
            status,
            ...params,
        },
    });

    return data;
};
