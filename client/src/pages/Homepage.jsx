import { useEffect } from 'react';
import Post from '../components/Post';
import { useDispatch, useSelector } from 'react-redux';
import { getAllPosts } from '../store/actions/postActions';

const Homepage = () => {
    const dispatch = useDispatch();
    const { posts } = useSelector((state) => state.post);

    useEffect(() => {
        dispatch(getAllPosts());
    }, [dispatch]);
    // console.log(posts);

    // const data = [
    //     {
    //         id: 1,
    //         username: 'Post 1',
    //         post: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod, voluptatum.',
    //     },
    //     {
    //         id: 2,
    //         username: 'Post 2',
    //         post: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod, voluptatum.',
    //     },
    //     {
    //         id: 3,
    //         username: 'Post 3',
    //         post: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod, voluptatum.',
    //     },
    //     {
    //         id: 4,
    //         username: 'Post 4',
    //         post: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod, voluptatum.',
    //     },
    //     {
    //         id: 5,
    //         username: 'Post 5',
    //         post: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod, voluptatum.',
    //     },
    //     {
    //         id: 6,
    //         username: 'Post 6',
    //         post: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod, voluptatum.',
    //     },
    // ];

    return (
        <>
            <div>
                <h1>Homepage</h1>
            </div>
            <Post data={posts?.docs?.docs} />
        </>
    );
};

export default Homepage;
