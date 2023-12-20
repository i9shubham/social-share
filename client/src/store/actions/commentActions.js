import { createAsyncThunk } from '@reduxjs/toolkit';
import { addComment, getComments } from '../middleware/commentAPI';

export const addNewComment = createAsyncThunk(
    'post/addComment',
    async (comment) => {
        const response = await addComment(comment);
        return response?.data;
    }
);

export const getAllComments = createAsyncThunk(
    'post/getAllComments',
    async (id) => {
        const response = await getComments(id);
        return response?.data;
    }
);
