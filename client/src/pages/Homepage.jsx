import { useEffect } from 'react';
import Post from '../components/Post';
import { useSelector } from 'react-redux';
// import { getAllPosts } from '../store/actions/postActions';

const Homepage = () => {
    // const dispatch = useDispatch();
    const { posts } = useSelector((state) => state.post);

    useEffect(() => {
        // dispatch(getAllPosts());
        console.log('render');
    }, []);
    // console.log(posts);

    return (
        <div style={{ marginTop: '7rem', marginBottom: '7rem' }}>
            <Post data={posts} />
        </div>
    );
};

export default Homepage;
