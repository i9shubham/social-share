import axios from 'axios';

export const addComment = (comment) => async () => {
    try {
        const data = await axios.post('/api/posts', comment);
        return data;
    } catch (error) {
        console.log(error);
    }
};
