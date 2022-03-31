import React, { useEffect } from 'react'
import LoginForm from '../components/LoginForm/LoginForm';
import { useAppSelector } from '../redux/store.hooks';
import { useNavigate } from 'react-router-dom';


const Login = () => {

    const history = useNavigate();

    const { currentUser } = useAppSelector(state => state.auth);

    useEffect(() => {

        if (currentUser) return history('/', { replace: true });

    }, [history])



    return (
        <div className='flex justify-center items-center min-h-[calc(100vh - 6rem)]'>
            <div className="container max-w-md shadow-sm p-5">
                <h2 className='my-3 text-2xl font-semibold tracking-widest text-center uppercase'>
                    LOGIN
                </h2>
                <LoginForm />

            </div>
        </div>)
}



export default Login;