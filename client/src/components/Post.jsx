import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import PropTypes from 'prop-types';

const Post = (props) => {
    return (
        <Box sx={{ minWidth: 275 }}>
            {props.data?.map((post) => {
                return (
                    <Card variant='outlined' key={post.id}>
                        <CardContent>
                            <Typography
                                sx={{ fontSize: 14 }}
                                color='text.secondary'
                                gutterBottom
                            >
                                {post.username}
                            </Typography>
                            <Typography variant='h5' component='div'>
                                {post.post}
                            </Typography>
                        </CardContent>
                        <CardActions>
                            <Button size='small'>Learn More</Button>
                        </CardActions>
                    </Card>
                );
            })}
        </Box>
    );
};

Post.propTypes = {
    data: PropTypes.array,
};

export default Post;
