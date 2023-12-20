import { Routes, Route, useNavigate } from 'react-router-dom';
import './App.css';
import Homepage from './pages/Homepage';
import { useEffect } from 'react';
import Signup from './components/Signup';
import Navbar from './components/Navbar';
import { useDispatch, useSelector } from 'react-redux';
import { setUserDetails } from './store/reducers/userSlice';

function App() {
    const isLoading = useSelector(
        (state) => state.post.isLoading || state.comment.isLoading
    );
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const getUser = window.localStorage.getItem('user');
    const userId = window.localStorage.getItem('id');
    useEffect(() => {
        console.log(getUser);
        if (!getUser) {
            navigate('/login');
        } else {
            dispatch(setUserDetails({ user: getUser, id: userId }));
            navigate('/homepage');
        }
    }, []);
    return (
        <>
            {getUser && <Navbar />}
            {isLoading && <p>Loading...</p>}
            <Routes>
                <Route exact path='/' element={<Homepage />} />
                <Route exact path='/homepage' element={<Homepage />} />
                <Route exact path='/login' element={<Signup />} />
            </Routes>
        </>
    );
}

export default App;
