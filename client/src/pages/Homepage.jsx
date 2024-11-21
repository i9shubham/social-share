import { useEffect } from 'react';
import Post from '../components/Post';
// import { useDispatch, useSelector } from 'react-redux';
// import { getAllPosts } from '../store/actions/postActions';

const Homepage = () => {
    // const dispatch = useDispatch();
    // const { posts } = useSelector((state) => state.post);

    useEffect(() => {
        // dispatch(getAllPosts());
        console.log('render');
    }, []);
    // console.log(posts);

    const data = [
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
            user: { username: 'tushar91', bio: 'DRX/Pharmasyst' },
            stats: {
                upvotes: 45,
                favorites: 32,
                insights: 20,
                commentsCount: 36,
            },
            post: 'Working as a DRX/Pharmasyst, I focus on pharmaceutical research and development.',
        },
        {
            _id: 3,
            image: 'https://placehold.co/400x400/orange/white?text=b',
            user: { username: 'bunny6', bio: 'Developer' },
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
    ];

    return (
        <div style={{ marginTop: '7rem', marginBottom: '7rem' }}>
            <Post data={data} />
        </div>
    );
};

export default Homepage;
