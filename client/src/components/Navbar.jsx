import AppBar from '@mui/material/AppBar';
import { Box, Card, InputAdornment, Typography } from '@mui/material';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Container from '@mui/material/Container';
import TextField from '@mui/material/TextField';
import Tooltip from '@mui/material/Tooltip';
import { Search as SearchIcon } from '@mui/icons-material';

// import InsertEmoticonIcon from '@mui/icons-material/InsertEmoticon';
import AddIcon from '@mui/icons-material/Add';

import '../App.css';
import { useDispatch, useSelector } from 'react-redux';
import { openAddPost } from '../store/reducers/postSlice';
import { searchAllPosts } from '../store/actions/postActions';
// const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

const Navbar = () => {
    const getUser = window.localStorage.getItem('user');
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
        // console.log(text);
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
                maxWidth: '400px !important', // Ensure it has the same max width as the parent
                backgroundColor: '#004a88',
                zIndex: 1100, // Ensure it stays above other content
                padding: '0 16px',
                margin: '0 auto',
                textAlign: 'center',
                // backdropFilter: 'blur(10px)',
            }}
        >
            <Typography
                variant='h5'
                sx={{ fontWeight: 'bold', color: '#fff', mb: 1, mt: 1}}
            >
                Social Share
            </Typography>
            {/* <Toolbar sx={{ width: '100%' }}> */}
            {/* <Box sx={{ flexGrow: 0 }}>
                    <Tooltip title='add post'>
                        <IconButton onClick={handleAddPost} sx={{ p: 0 }}>
                            <AddIcon
                                sx={{
                                    color: '#fff',
                                    width: '15',
                                    height: '15',
                                }}
                            />
                        </IconButton>
                    </Tooltip>
                </Box> */}
            {!getUser && (
                <Box sx={{ mb: 1 }}>
                    <form onSubmit={(e) => handleSearch(e)} action=''>
                        {/* <TextField
                        sx={{
                            color: '#fff',
                            backgroundColor: '#fff',
                            borderRadius: '10px',
                            width: '100%',
                            padding: '0 10px',
                        }}
                        name='search'
                        type='text'
                        id='standard-basic'
                        // label='Standard'
                        placeholder='Search topics'
                        variant='standard'
                        // value={text}
                        // onChange={(e) => setText(e.target.value)}
                    /> */}
                        <TextField
                            size='small'
                            sx={{
                                color: '#fff',
                                backgroundColor: '#fff',
                                borderRadius: '10px',
                                width: '100%',
                                // padding: '0 10px',
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
            {/* </Toolbar> */}
        </Container>
    );
};

export default Navbar;
