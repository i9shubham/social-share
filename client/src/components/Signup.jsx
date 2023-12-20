import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
// import CssBaseline from '@mui/material/CssBaseline';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
// import Link from '@mui/material/Link';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import { Box } from '@mui/material';
import Typography from '@mui/material/Typography';
import { addNewUser } from '../store/actions/userActions';

const Signup = () => {
    const [loggedIn, setLoggedIn] = useState(false);
    const navigate = useNavigate();
    const user = window.localStorage.getItem('user');
    const dispatch = useDispatch();

    const handleSubmit = async (event) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        console.log({
            username: data.get('username'),
            password: data.get('password'),
        });
        await dispatch(
            addNewUser({
                username: data.get('username'),
                password: data.get('password'),
            })
        );
        window.localStorage.setItem('user', data.get('username'));
        console.log(data);
        navigate('/homepage');
    };

    const handleHomePage = () => {
        navigate('/homepage');
    };

    useEffect(() => {
        if (user) {
            setLoggedIn(true);
        }
    }, []);

    return (
        <Container
            xs={{ backgroundColor: 'inherit' }}
            component='main'
            maxWidth='xs'
        >
            {loggedIn && (
                <>
                    <h1>Hey! {user} You are already logged in</h1>
                    <button onClick={handleHomePage}>Go to Homepage</button>
                </>
            )}
            {/* <CssBaseline /> */}
            {!loggedIn && (
                <Box
                    sx={{
                        marginTop: 8,
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                    }}
                >
                    <Typography component='h1' variant='h5'>
                        Sign up
                    </Typography>
                    <Box
                        component='form'
                        noValidate
                        onSubmit={handleSubmit}
                        sx={{
                            mt: 3,
                            backgroundColor: '#0E2AA4',
                            borderRadius: '10px',
                            padding: '20px',
                        }}
                    >
                        <Grid container spacing={2}>
                            <Grid item xs={12}>
                                <TextField
                                    autoComplete='given-name'
                                    name='username'
                                    required
                                    fullWidth
                                    id='firstName'
                                    label='Username'
                                    autoFocus
                                />
                            </Grid>
                            {/* <Grid item xs={12}>
                            <TextField
                                required
                                fullWidth
                                id='lastName'
                                label='username'
                                name='username'
                                autoComplete='family-name'
                            />
                        </Grid> */}
                            <Grid item xs={12}>
                                <TextField
                                    required
                                    fullWidth
                                    name='password'
                                    label='Password'
                                    type='password'
                                    id='password'
                                    autoComplete='new-password'
                                />
                            </Grid>
                        </Grid>
                        <Button
                            type='submit'
                            fullWidth
                            variant='contained'
                            sx={{ mt: 3, mb: 2 }}
                            onClick={() => handleSubmit}
                        >
                            Sign Up
                        </Button>
                        {/* <Grid container justifyContent='flex-end'>
                        <Grid item>
                            <Link href='#' variant='body2'>
                                Already have an account? Sign in
                            </Link>
                        </Grid>
                    </Grid> */}
                    </Box>
                </Box>
            )}
        </Container>
    );
};

export default Signup;
