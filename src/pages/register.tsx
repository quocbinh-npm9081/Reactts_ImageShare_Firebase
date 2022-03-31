import React from 'react'
import RegisterForm from '../components/RegisterForm/RegisterForm';
import { Link } from 'react-router-dom';
const Register = () => {
    return (
        <div className='flex justify-center items-center min-h-[calc(100vh - 6rem)]'>
            <div className="container max-w-md shadow-sm p-5">
                <h2 className='my-3 text-2xl font-semibold tracking-widest text-center uppercase'>
                    REGISTER
                </h2>
                <RegisterForm />
                <div>
                    You already have an account ?
                    <Link to="/login"
                        className='text-red-500 hover:underline'
                    >Login</Link>
                </div>
            </div>
        </div>
    )
}

export default Register