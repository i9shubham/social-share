import AppBar from '@mui/material/AppBar';
import { Box, Card } from '@mui/material';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Container from '@mui/material/Container';
import TextField from '@mui/material/TextField';
import Tooltip from '@mui/material/Tooltip';

// import InsertEmoticonIcon from '@mui/icons-material/InsertEmoticon';
import AddIcon from '@mui/icons-material/Add';

import '../App.css';
import { useDispatch, useSelector } from 'react-redux';
import { openAddPost } from '../store/reducers/postSlice';
import { searchAllPosts } from '../store/actions/postActions';
// const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

const Navbar = () => {
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
        <AppBar
            position='fixed'
            sx={{
                backgroundColor: '#081863',
                backdropFilter: 'blur(10px)',
                borderBottom: '1px solid #182233',
            }}
        >
            <Container maxWidth='xl'>
                <Toolbar disableGutters>
                    <Box sx={{ flexGrow: 0 }}>
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
                    </Box>
                    <Box sx={{ flexGrow: 0 }}>
                        <form onSubmit={(e) => handleSearch(e)} action=''>
                            <TextField
                                sx={{
                                    color: '#fff',
                                    backgroundColor: '#fff',
                                    borderRadius: '5px',
                                }}
                                name='search'
                                type='text'
                                id='standard-basic'
                                // label='Standard'
                                placeholder='Search'
                                variant='standard'
                                // value={text}
                                // onChange={(e) => setText(e.target.value)}
                            />
                        </form>
                        <div>
                            {searchPosts?.map((post, i) => (
                                <Card sx={{ display: 'flex' }} key={i}></Card>
                            ))}
                        </div>
                    </Box>
                </Toolbar>
            </Container>
        </AppBar>
    );
};

export default Navbar;
