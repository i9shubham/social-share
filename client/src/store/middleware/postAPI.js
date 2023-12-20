import axios from 'axios';

export const addPost = async (post) => {
    try {
        const data = await axios.post(
            'https://socialsharebackend.onrender.com/api/post/addPost',
            post
        );
        console.log(post);
        return data;
    } catch (error) {
        console.log(error);
    }
};

export const getPosts = async () => {
    try {
        const data = await axios.get(
            'https://socialsharebackend.onrender.com/api/post/getAllPosts'
        );
        return data;
    } catch (error) {
        console.log(error);
    }
};

export const searchPosts = async (text) => {
    try {
        const data = await axios.get(
            `https://socialsharebackend.onrender.com/api/post/searchPost`,
            {
                params: {
                    keywords: text,
                },
            }
        );
        return data;
    } catch (error) {
        console.log(error);
    }
};
