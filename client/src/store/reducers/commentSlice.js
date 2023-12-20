import { createSlice } from '@reduxjs/toolkit';
import { addNewComment, getAllComments } from '../actions/commentActions';

const initialState = {
    comments: [],
};

const commentSlice = createSlice({
    name: 'comment',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(addNewComment.fulfilled, (state, action) => {
            state.comments = action.payload;
        });
        builder.addCase(getAllComments.fulfilled, (state, action) => {
            state.comments = action.payload;
        });
    },
});

export const userSelector = (state) => state.commment;

export default commentSlice.reducer;
