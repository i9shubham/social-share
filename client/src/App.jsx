import { Routes, Route, useNavigate } from 'react-router-dom';
import './App.css';
import Homepage from './pages/Homepage';
import Signup from './components/Authentication/Signup';
import Navbar from './components/Navbar';
import { useDispatch, useSelector } from 'react-redux';
import { setUserDetails } from './store/reducers/userSlice';
import Login from './components/Authentication/Login';
import { Container, Grid } from '@mui/material';

function App() {
    const isLoading = useSelector(
        (state) => state.post.isLoading || state.comment.isLoading
    );
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const getUser = window.localStorage.getItem('user');
    const userId = window.localStorage.getItem('id');
    // useEffect(() => {
    //     console.log(getUser);
    //     if (!getUser) {
    //         navigate('/login');
    //     } else {
    //         dispatch(setUserDetails({ user: getUser, id: userId }));
    //         navigate('/homepage');
    //     }
    // }, []);
    return (
        <Container
            sx={{
                width: '100%',
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'center',
                alignItems: 'center',
            }}
        >
            <Grid
                container
                sx={{
                    width: '100%',
                    height: '100vh',
                    overflow: 'auto',
                    '&::-webkit-scrollbar': {
                      width: '2px'
                    },
                    '&::-webkit-scrollbar-thumb': {
                      backgroundColor: '#adb3bd',
                      borderRadius: '2px'
                    },
                    maxWidth: '400px',
                    // backgroundColor: '#fff',
                    boxShadow: '0px 0px 4px 0px rgba(0,0,0,0.3)',
                }}
            >
                <Grid item xs={12}>
                    <Navbar />
                    {getUser && isLoading && <p>Loading...</p>}
                    <Routes>
                        <Route exact path='/' element={<Homepage />} />
                        <Route exact path='/homepage' element={<Homepage />} />
                        {!getUser && (
                            <>
                                <Route
                                    exact
                                    path='/login'
                                    element={<Login />}
                                />
                                <Route
                                    exact
                                    path='/signup'
                                    element={<Signup />}
                                />
                            </>
                        )}
                    </Routes>
                </Grid>
            </Grid>
        </Container>
    );
}

export default App;
