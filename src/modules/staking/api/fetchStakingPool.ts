import axios from '../../../axios';

export const fetchStakingPool = async () => {
    const { data } = await axios.get('/staking/pool');

    return data;
};
