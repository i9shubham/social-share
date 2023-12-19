import { combineReducers } from 'redux';

// project import
import userSlice from './userSlice';
import postSlice from './postSlice';
import commentSlice from './commentSlice';

// ==============================|| COMBINE REDUCERS ||============================== //

const reducers = combineReducers({
    user: userSlice,
    post: postSlice,
    comment: commentSlice,
});

export default reducers;
