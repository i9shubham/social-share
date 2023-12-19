import { createAsyncThunk } from '@reduxjs/toolkit';
import { addUser } from '../middleware/userAPI';

export const addNewUser = createAsyncThunk('user/addUser', async (user) => {
    const response = await addUser(user);
    return response?.data;
});
