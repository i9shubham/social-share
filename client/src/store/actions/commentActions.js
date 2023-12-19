import { createAsyncThunk } from '@reduxjs/toolkit';
import { addComment } from '../middleware/commentAPI';

export const addNewComment = createAsyncThunk(
    'post/addComment',
    async (comment) => {
        const response = await addComment(comment);
        return response?.data;
    }
);
