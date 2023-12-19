import { createSlice } from '@reduxjs/toolkit';
import { addNewPost } from '../actions/postActions';

const initialState = {
    posts: [],
};

const postSlice = createSlice({
    name: 'post',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(addNewPost.fulfilled, (state, action) => {
            state.posts = action.payload;
        });
    },
});


export const userSelector = (state) => state.post;

export default postSlice.reducer;
