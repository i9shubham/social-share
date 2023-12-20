import { createSlice } from '@reduxjs/toolkit';
import {
    addNewPost,
    getAllPosts,
    searchAllPosts,
} from '../actions/postActions';

const initialState = {
    posts: [],
    searchPosts: [],
    openAdd: false,
    isLoading: false,
};

const postSlice = createSlice({
    name: 'post',
    initialState,
    reducers: {
        openAddPost: (state) => {
            state.openAdd = !state.openAdd;
        },
    },
    extraReducers: (builder) => {
        builder.addCase(addNewPost.fulfilled, (state, action) => {
            state.posts = action.payload;
            state.isLoading = false;
        }),
            builder.addCase(getAllPosts.pending, (state) => {
                state.isLoading = true;
            }),
            builder.addCase(getAllPosts.fulfilled, (state, action) => {
                state.posts = action.payload;
                state.isLoading = false;
            }),
            builder.addCase(searchAllPosts.pending, (state) => {
                state.isLoading = true;
            }),
            builder.addCase(searchAllPosts.fulfilled, (state, action) => {
                state.searchPosts = action.payload;
                state.isLoading = false;
            });
    },
});

export const { openAddPost } = postSlice.actions;
export const userSelector = (state) => state.post;

export default postSlice.reducer;
