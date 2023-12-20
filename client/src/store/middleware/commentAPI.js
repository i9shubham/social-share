import axios from 'axios';

export const addComment = (comment) => async () => {
    try {
        const data = await axios.post(
            'https://socialsharebackend.onrender.com/api/comment/addComment',
            comment
        );
        return data;
    } catch (error) {
        console.log(error);
    }
};

export const getComments = () => async () => {
    try {
        const data = await axios.get(
            'https://socialsharebackend.onrender.com/api/comment/getAllComments'
        );
        return data;
    } catch (error) {
        console.log(error);
    }
};
