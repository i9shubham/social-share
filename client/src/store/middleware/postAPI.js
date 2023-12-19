import axios from 'axios';

export const addPost = (post) => async () => {
    try {
        const data = await axios.post('/api/posts', post);
        return data;
    } catch (error) {
        console.log(error);
    }
};

export const getPosts = () => async () => {
    try {
        const data = await axios.get('/api/posts');
        return data;
    } catch (error) {
        console.log(error);
    }
};
