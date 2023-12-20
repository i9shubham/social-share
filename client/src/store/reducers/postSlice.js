import { createSlice } from '@reduxjs/toolkit';
import { addNewPost, getAllPosts } from '../actions/postActions';

const initialState = {
    posts: [],
    openAdd: false,
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
        }),
        builder.addCase(getAllPosts.fulfilled, (state, action) => {
            state.posts = action.payload;
        });
    },
});

export const { openAddPost } = postSlice.actions;
export const userSelector = (state) => state.post;

export default postSlice.reducer;
