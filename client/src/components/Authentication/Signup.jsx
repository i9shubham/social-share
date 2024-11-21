import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { ErrorMessage } from '@hookform/error-message';
import {
    TextField,
    Container,
    Grid,
    InputLabel,
    Typography,
    Button,
    IconButton,
    InputAdornment,
} from '@mui/material';
import { Visibility, VisibilityOff } from '@mui/icons-material';
// import { addNewUser } from '../../store/actions/userActions';

const Signup = () => {
    const [loggedIn, setLoggedIn] = useState(false);
    const navigate = useNavigate();

    const user = window.localStorage.getItem('user');
    // const id = window.localStorage.getItem('id');
    const { userDetails } = useSelector((state) => state.user);
    // const dispatch = useDispatch();

    const [showPassword, setShowPassword] = useState(false);

    const handleClickShowPassword = () => {
        setShowPassword(!showPassword);
    };

    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };

    const onSubmit = async (data) => {
        const newData = data;
        console.log({
            username: newData.name,
            email: newData.email,
        });
        // await dispatch(
        //     addNewUser({
        //         username: data.get('username'),
        //         password: data.get('password'),
        //     })
        // );
        window.localStorage.setItem('user', newData.name);
        navigate('/homepage');
    };

    const {
        register,
        formState: { errors },
        handleSubmit,
        // watch,
        // getValues,
        // setValue,
        // setError,
        // clearErrors,
    } = useForm({
        defaultValues: {
            name: '',
            email: '',
            password: '',
        },
    });

    useEffect(() => {
        if (userDetails) {
            window.localStorage.setItem('id', userDetails?.user?._id);
        }
    }, [userDetails]);

    const handleHomePage = () => {
        navigate('/homepage');
    };

    useEffect(() => {
        if (user) {
            setLoggedIn(true);
        }
    }, []);

    return (
        // <Container
        //     xs={{ backgroundColor: 'inherit' }}
        //     component='main'
        //     maxWidth='xs'
        // >
        <>
            {loggedIn && (
                <>
                    <h1>Hey! {user} You are already logged in</h1>
                    <button onClick={handleHomePage}>Go to Homepage</button>
                </>
            )}
            {/* <CssBaseline /> */}
            {!loggedIn && (
                <Container
                    sx={{
                        height: '100%',
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'center',
                        alignItems: 'center',
                    }}
                >
                    <>
                        <Typography
                            component='h1'
                            variant='h4'
                            mb={2}
                            sx={{ fontWeight: 'bold', color: '#004a88' }}
                        >
                            Signup
                        </Typography>
                        <form
                            autoComplete='off'
                            onSubmit={handleSubmit(onSubmit)}
                            // style={{}}
                        >
                            <Grid
                                container
                                component='paper'
                                elevation={2}
                                sx={{
                                    backgroundColor: '#fff',
                                    boxShadow:
                                        '0px 0px 4px 4px rgba(0,0,0,0.1)',
                                    padding: '3rem',
                                    borderRadius: 2,
                                }}
                            >
                                <Grid item xs={12} mb={1}>
                                    <InputLabel htmlFor='name' required>
                                        Name
                                    </InputLabel>
                                    <TextField
                                        // required
                                        placeholder='John Doe'
                                        id='name'
                                        size='small'
                                        type='text'
                                        // label="Item"
                                        style={{
                                            width: '100%',
                                            backgroundColor: '#f5f3f6',
                                        }}
                                        variant='outlined'
                                        {...register('name', {
                                            required: 'please enter the name',
                                        })}
                                    />
                                    <ErrorMessage
                                        style={{
                                            color: 'red',
                                            fontSize: '0.8em',
                                        }}
                                        errors={errors}
                                        name='name'
                                        as='span'
                                    />
                                </Grid>
                                <Grid item xs={12} mb={1}>
                                    <InputLabel htmlFor='email' required>
                                        Email
                                    </InputLabel>
                                    <TextField
                                        // required
                                        placeholder='johndoe@gmail.com'
                                        id='email'
                                        size='small'
                                        type='email'
                                        // label="Item"
                                        style={{
                                            width: '100%',
                                            backgroundColor: '#f5f3f6',
                                        }}
                                        variant='outlined'
                                        {...register('email', {
                                            required: 'please enter the email',
                                        })}
                                    />
                                    <ErrorMessage
                                        style={{
                                            color: 'red',
                                            fontSize: '0.8em',
                                        }}
                                        errors={errors}
                                        name='email'
                                        as='span'
                                    />
                                </Grid>
                                <Grid item xs={12} mb={2}>
                                    <InputLabel htmlFor='password' required>
                                        Password
                                    </InputLabel>
                                    <TextField
                                        // required
                                        placeholder='********'
                                        id='password'
                                        size='small'
                                        // label="Item"
                                        type={
                                            showPassword ? 'text' : 'password'
                                        }
                                        style={{
                                            width: '100%',
                                            backgroundColor: '#f5f3f6',
                                        }}
                                        variant='outlined'
                                        {...register('password', {
                                            required:
                                                'Please enter the password',
                                            pattern: {
                                                value: /^(?=.*[a-zA-Z])(?=.*[0-9])/,
                                                message:
                                                    'Password must contain both letters and numbers',
                                            },
                                        })}
                                        InputProps={{
                                            endAdornment: (
                                                <InputAdornment position='end'>
                                                    <IconButton
                                                        aria-label='toggle password visibility'
                                                        onClick={
                                                            handleClickShowPassword
                                                        }
                                                        onMouseDown={
                                                            handleMouseDownPassword
                                                        }
                                                        edge='end'
                                                    >
                                                        {showPassword ? (
                                                            <VisibilityOff />
                                                        ) : (
                                                            <Visibility />
                                                        )}
                                                    </IconButton>
                                                </InputAdornment>
                                            ),
                                        }}
                                    />
                                    <ErrorMessage
                                        style={{
                                            color: 'red',
                                            fontSize: '0.8em',
                                        }}
                                        errors={errors}
                                        name='password'
                                        as='span'
                                    />
                                </Grid>
                                <Grid item xs={12} mb={1}>
                                    <Button
                                        size='small'
                                        type='submit'
                                        variant='contained'
                                    >
                                        Signup
                                    </Button>
                                </Grid>
                                <Grid item xs={12} mt={2}>
                                    <Typography
                                        variant='body2'
                                        color='textSecondary'
                                        align='center'
                                    >
                                        Already have an account?{' '}
                                        <Typography
                                            variant='p'
                                            color='primary'
                                            sx={{
                                                cursor: 'pointer',
                                                textDecoration: 'underline',
                                            }}
                                            onClick={() => navigate('/login')}
                                        >
                                            Login
                                        </Typography>
                                    </Typography>
                                </Grid>
                            </Grid>
                        </form>
                    </>
                </Container>
            )}
        </>
        // </Container>
    );
};

export default Signup;
