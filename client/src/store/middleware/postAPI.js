import axios from 'axios';

export const addPost = async (post) => {
    try {
        const data = await axios.post(
            'http://localhost:8080/api/post/addPost',
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
            'http://localhost:8080/api/post/getAllPosts'
        );
        return data;
    } catch (error) {
        console.log(error);
    }
};
