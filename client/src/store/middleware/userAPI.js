import axios from 'axios';

export const addUser = async (user) => {
    try {
        const data = await axios.post(
            'http://localhost:8080/api/user/signup',
            user
        );
        console.log(data);
        return data;
    } catch (error) {
        console.log(error);
    }
};
