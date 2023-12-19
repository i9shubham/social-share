import axios from 'axios';

export const addUser = (user) => async () => {
    try {
        const data = await axios.post('/api/users', user);
        return data;
    } catch (error) {
        console.log(error);
    }
};
