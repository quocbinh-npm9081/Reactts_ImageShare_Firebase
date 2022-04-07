import React, { useEffect } from 'react';
import { useAppSelector, useAppDispatch } from '../redux/store.hooks';
import { useNavigate } from 'react-router-dom';


const Home = () => {

    const { currentUser, loading } = useAppSelector(state => state.auth);

    // const dispatch = useAppDispatch();

    const history = useNavigate();

    useEffect(() => {
        if (!currentUser) {
            return history("/login", { replace: true });
        }
    }, [history, currentUser])

    return (
        <h1 className="text-3xl font-bold underline">
            Hello Home
        </h1>
    );
}



export default Home;