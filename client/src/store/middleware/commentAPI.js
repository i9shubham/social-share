import axios from 'axios';

export const addComment = async (comment) => {
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

export const getComments = async (id) => {
    try {
        const data = await axios.get(
            `https://socialsharebackend.onrender.com/api/comment/getAllComments/${id}`
        );
        return data;
    } catch (error) {
        console.log(error);
    }
};
