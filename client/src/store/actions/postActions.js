import { createAsyncThunk } from '@reduxjs/toolkit';
import { addPost, getPosts, searchPosts } from '../middleware/postAPI';

export const addNewPost = createAsyncThunk('post/addPost', async (post) => {
    const response = await addPost(post);
    return response?.data;
});

export const getAllPosts = createAsyncThunk('post/getAllPosts', async () => {
    const response = await getPosts();
    return response?.data;
});

export const searchAllPosts = createAsyncThunk(
    'post/searchAllPosts',
    async (text) => {
        const response = await searchPosts(text);
        return response?.data;
    }
);
