import { createAsyncThunk } from '@reduxjs/toolkit';
import { addPost, getPosts } from '../middleware/postAPI';

export const addNewPost = createAsyncThunk('post/addPost', async (post) => {
    const response = await addPost(post);
    return response?.data;
});


export const getAllPosts = createAsyncThunk('post/getAllPosts', async () => {
    const response = await getPosts();
    return response?.data;
});