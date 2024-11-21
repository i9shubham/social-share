import '../App.css';
import { Box, Card, InputAdornment, Typography } from '@mui/material';
import Container from '@mui/material/Container';
import TextField from '@mui/material/TextField';
import { Search as SearchIcon } from '@mui/icons-material';
import { useDispatch, useSelector } from 'react-redux';
import { openAddPost } from '../store/reducers/postSlice';
import { searchAllPosts } from '../store/actions/postActions';

const Navbar = () => {
    const getUser = window.localStorage.getItem('user');
    console.log(!getUser);

    const dispatch = useDispatch();
    const { searchPosts } = useSelector((state) => state.post);

    // const [text, setText] = useState('');
    // const navigate = useNavigate();
    // const [anchorElNav, setAnchorElNav] = useState(null);
    // // const [anchorElUser, setAnchorElUser] = useState(null);

    // const handleOpenNavMenu = (event) => {
    //     setAnchorElNav(event.currentTarget);
    // };
    // const handleOpenUserMenu = () => {
    //     // setAnchorElUser(event.currentTarget);
    //     navigate('/godfather');
    // };

    // const handleCloseNavMenu = () => {
    //     setAnchorElNav(null);
    // };

    const handleAddPost = () => {
        console.log('clicked');
        dispatch(openAddPost(!openAddPost));
    };

    // const handleCloseUserMenu = () => {
    //     setAnchorElUser(null);
    // };
    const handleSearch = (e) => {
        e.preventDefault();
        const data = new FormData(e.currentTarget);
        console.log(data.get('search'));
        dispatch(searchAllPosts(data.get('search')));
        console.log(searchPosts);
    };

    return (
        <Container
            sx={{
                position: 'fixed',
                top: 0,
                left: 0,
                right: 0,
                width: '100%',
                maxWidth: '400px !important',
                backgroundColor: '#004a88',
                zIndex: 1100,
                padding: '0 16px',
                margin: '0 auto',
                textAlign: 'center',
                // backdropFilter: 'blur(10px)',
            }}
        >
            <Typography
                variant='h5'
                sx={{ fontWeight: 'bold', color: '#fff', mb: 1, mt: 1 }}
            >
                Social Share
            </Typography>
            {getUser && (
                <Box sx={{ mb: 1 }}>
                    <form onSubmit={(e) => handleSearch(e)} action=''>
                        <TextField
                            size='small'
                            sx={{
                                color: '#fff',
                                backgroundColor: '#fff',
                                borderRadius: '10px',
                                width: '100%',
                            }}
                            id='filled-basic'
                            placeholder='Search topics'
                            InputProps={{
                                startAdornment: (
                                    <InputAdornment position='start'>
                                        <SearchIcon />
                                    </InputAdornment>
                                ),
                            }}
                        />
                    </form>
                    <div>
                        {searchPosts?.map((post, i) => (
                            <Card sx={{ display: 'flex' }} key={i}></Card>
                        ))}
                    </div>
                </Box>
            )}
        </Container>
    );
};

export default Navbar;
