import { createSlice } from '@reduxjs/toolkit';
import { addNewComment, getAllComments } from '../actions/commentActions';

const initialState = {
    comments: [],
    isLoading: false,
};

const commentSlice = createSlice({
    name: 'comment',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(addNewComment.fulfilled, (state, action) => {
            state.comments = action.payload;
            state.isLoading = false;
        });
        builder.addCase(getAllComments.pending, (state) => {
            state.isLoading = true;
        }),
            builder.addCase(getAllComments.fulfilled, (state, action) => {
                state.comments = action.payload;
                state.isLoading = false;
            });
    },
});

export const userSelector = (state) => state.commment;

export default commentSlice.reducer;
