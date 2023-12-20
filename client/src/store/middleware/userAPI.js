import axios from 'axios';

export const addUser = (user) => async () => {
    try {
        const data = await axios.post('https://socialsharebackend.onrender.com/api/users/signup', user);
        return data;
    } catch (error) {
        console.log(error);
    }
};
