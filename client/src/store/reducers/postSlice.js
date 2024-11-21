import { createSlice } from '@reduxjs/toolkit';
import {
    addNewPost,
    getAllPosts,
    searchAllPosts,
} from '../actions/postActions';

const initialState = {
    posts: [
        {
            _id: 1,
            image: 'https://placehold.co/400x400/orange/white?text=i',
            user: { username: 'i9shubham', bio: 'Owner' },
            stats: {
                upvotes: 45,
                favorites: 32,
                insights: 20,
                commentsCount: 36,
            },
            post: 'As the Owner, I am responsible for overseeing all operations and ensuring everything runs smoothly.',
        },
        {
            _id: 2,
            image: 'https://placehold.co/400x400/orange/white?text=t',
            user: { username: 'tushar91', bio: 'Doctorate' },
            stats: {
                upvotes: 45,
                favorites: 32,
                insights: 20,
                commentsCount: 36,
            },
            post: 'Working as a doctor, I focus on medical science and research.',
        },
        {
            _id: 3,
            image: 'https://placehold.co/400x400/orange/white?text=b',
            user: { username: 'stargirl', bio: 'Developer' },
            stats: {
                upvotes: 45,
                favorites: 32,
                insights: 20,
                commentsCount: 36,
            },
            post: 'As a Developer, I create and maintain software applications.',
        },
        {
            _id: 4,
            image: 'https://placehold.co/400x400/orange/white?text=u',
            user: { username: 'username16', bio: 'Engineer' },
            stats: {
                upvotes: 45,
                favorites: 32,
                insights: 20,
                commentsCount: 36,
            },
            post: 'Being an Engineer, I design and build complex systems and structures.',
        },
        {
            _id: 5,
            image: 'https://placehold.co/400x400/orange/white?text=u',
            user: { username: 'usernane9', bio: 'Developer' },
            stats: {
                upvotes: 45,
                favorites: 32,
                insights: 20,
                commentsCount: 36,
            },
            post: 'As a Developer, I am involved in coding and software development.',
        },
        {
            _id: 6,
            image: 'https://placehold.co/400x400/orange/white?text=u',
            user: { username: 'username8', bio: 'Reviewer' },
            stats: {
                upvotes: 45,
                favorites: 32,
                insights: 20,
                commentsCount: 36,
            },
            post: 'In my role as a Reviewer, I evaluate and provide feedback on various products and services.',
        },
    ],
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
        filterPosts: (state, action) => {
            if (action.payload === '') {
                return state.posts;
            } else {
                state.posts = state.posts.filter((post) =>
                    post.post.includes(action.payload)
                );
            }
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

export const { openAddPost, filterPosts } = postSlice.actions;
export const userSelector = (state) => state.post;

export default postSlice.reducer;
