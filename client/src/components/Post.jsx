import { useState } from 'react';
import { Box } from '@mui/material';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import PropTypes from 'prop-types';

import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import TextField from '@mui/material/TextField';
// import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import MapsUgcIcon from '@mui/icons-material/MapsUgc';

import { useDispatch, useSelector } from 'react-redux';
import { openAddPost } from '../store/reducers/postSlice';
import { addNewPost } from '../store/actions/postActions';
import { getAllComments } from '../store/actions/commentActions';
import Comment from './Comment';

const Post = ({ data }) => {
    const { openAdd } = useSelector((state) => state.post);
    const { userDetails } = useSelector((state) => state.user);
    const { comments } = useSelector((state) => state.comment);
    const user = window.localStorage.getItem('user');
    const id = window.localStorage.getItem('id');
    console.log(user, userDetails);
    const dispatch = useDispatch();

    const handleCancelPopup = () => {
        dispatch(openAddPost(!openAdd));
    };

    const [post, setPost] = useState('');
    const [show, showComments] = useState(null);

    const handleAddNewPost = (e) => {
        e.preventDefault();
        console.log(post);
        dispatch(addNewPost({ user: id, username: user, content: post }));
        dispatch(openAddPost(!openAdd));
        window.location.reload();
    };

    const handleOpenComment = (e, id) => {
        e.stopPropagation();
        showComments(id);
        console.log(id);
        dispatch(getAllComments(id));
        console.log(comments);
    };

    return (
        <Box sx={{ minWidth: 275 }}>
            {data?.length === 0 && (
                <p>There are no posts please create new post</p>
            )}
            {data?.map((post) => {
                return (
                    <Card
                        sx={{ textAlign: 'left', marginBottom: '10px' }}
                        variant='outlined'
                        key={post._id}
                    >
                        <CardContent>
                            <Typography
                                sx={{
                                    fontSize: 14,
                                    textDecoration: 'underline',
                                }}
                                color='text.secondary'
                                gutterBottom
                            >
                                {post.username}
                            </Typography>
                            <Typography variant='h5' component='div'>
                                {post.content}
                            </Typography>
                        </CardContent>
                        <hr />
                        <CardActions
                            sx={{
                                display: 'flex',
                                justifyContent: 'flex-end',
                            }}
                        >
                            <Button
                                onClick={(e) => handleOpenComment(e, post._id)}
                                size='small'
                            >
                                <MapsUgcIcon />
                            </Button>
                        </CardActions>
                        {show === post._id && (
                            <Comment
                                post={post._id}
                                data={comments?.docs?.docs}
                            />
                        )}
                    </Card>
                );
            })}
            {openAdd === true && (
                <Dialog open={openAdd} onClose={handleCancelPopup}>
                    <DialogTitle>Add New Post</DialogTitle>
                    <DialogContent>
                        {/* <DialogContentText>{popup.content}</DialogContentText> */}
                        <TextField
                            autoFocus
                            onChange={(e) => setPost(e.target.value)}
                            margin='dense'
                            id='name'
                            label='Create a post'
                            type='text'
                            fullWidth
                            variant='standard'
                        />
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={handleCancelPopup}>Cancel</Button>
                        <Button onClick={(e) => handleAddNewPost(e)}>
                            Add Post
                        </Button>
                    </DialogActions>
                </Dialog>
            )}
        </Box>
    );
};

Post.propTypes = {
    data: PropTypes.array,
};

export default Post;
