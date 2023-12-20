import axios from 'axios';

export const addComment = async (comment) => {
    try {
        const data = await axios.post(
            'http://localhost:8080/api/comment/addComment',
            comment
        );
        return data;
    } catch (error) {
        console.log(error);
    }
};

export const getComments = async () => {
    try {
        const data = await axios.get(
            'http://localhost:8080/api/comment/getAllComments'
        );
        return data;
    } catch (error) {
        console.log(error);
    }
};
