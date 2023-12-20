import axios from 'axios';

export const addPost = (post) => async () => {
    try {
        const data = await axios.post('https://socialsharebackend.onrender.com/api/post/addPost', post);
        return data;
    } catch (error) {
        console.log(error);
    }
};

export const getPosts = () => async () => {
    try {
        const data = await axios.get('https://socialsharebackend.onrender.com/api/post/getPosts');
        return data;
    } catch (error) {
        console.log(error);
    }
};
