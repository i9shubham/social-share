import { Box } from '@mui/material';
import Card from '@mui/material/Card';
import TextField from '@mui/material/TextField';
// import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
// import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { addNewComment } from '../store/actions/commentActions';

const Comment = ({ data, post }) => {
    const { userDetails } = useSelector((state) => state.user);
    console.log(userDetails);
    const dispatch = useDispatch();

    const handleAddComment = (e) => {
        e.preventDefault();
        const data = new FormData(e.currentTarget);
        console.log(data.get('comment'));
        dispatch(
            addNewComment({
                user: userDetails.id,
                username: userDetails.user,
                post: post,
                comment: data.get('comment'),
            })
        );
        window.location.reload();
    };

    console.log(data);
    return (
        <>
            <Box sx={{ minWidth: 275 }}>
                <Box sx={{ minWidth: 275 }}>
                    <form onSubmit={(e) => handleAddComment(e)}>
                        <TextField
                            autoFocus
                            id='name'
                            name='comment'
                            label='add a comment'
                            type='text'
                            fullWidth
                            variant='standard'
                        />
                    </form>
                </Box>
                {data?.length === 0 && (
                    <p>There are no comments add new comments</p>
                )}
                {data?.map((comment) => {
                    return (
                        <Card
                            sx={{ textAlign: 'left', marginBottom: '10px' }}
                            variant='outlined'
                            key={comment._id}
                        >
                            <CardContent>
                                <Typography
                                    sx={{
                                        fontSize: 10,
                                        textDecoration: 'underline',
                                    }}
                                    color='text.secondary'
                                    gutterBottom
                                >
                                    {comment.username}
                                </Typography>
                                <Typography variant='p' component='div'>
                                    {comment.comment}
                                </Typography>
                            </CardContent>
                        </Card>
                    );
                })}
            </Box>
        </>
    );
};

Comment.propTypes = {
    data: PropTypes.array,
    post: PropTypes.string,
};

export default Comment;
