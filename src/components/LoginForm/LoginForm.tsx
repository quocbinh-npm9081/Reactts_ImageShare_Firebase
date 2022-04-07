import React, { FormEvent, useState } from 'react'
import { authLogin } from '../../redux/action-slides/auth.slice';
//import { registerApi } from '../../redux/actions/authAction';
import { useAppDispatch, useAppSelector } from '../../redux/store.hooks';
import { Link } from 'react-router-dom';
import validateLogin from '../../utils/validator/login';
//import validRegister from '../../utils/validator/register';
//import Error from '../Error/Error';
import { toast } from 'react-toastify';
import Loading from '../Loading/Loading';
import LoginSocialMedia from './LoginSocialMedia';
import Error from '../Error/Error';
const LoginForm = () => {

    const [email, setEmail] = useState('');

    const [password, setPassword] = useState('');

    const [remember, setRememberMe] = useState(false);

    const dispatch = useAppDispatch();

    const { loading } = useAppSelector(state => state.auth);

    const onhandleSumit = (e: FormEvent) => {

        e.preventDefault();

        const user = { email, password, remember };

        const resultValid_login = validateLogin(user);

        if (resultValid_login.errorLength) {

            setEmail('');

            setPassword('');

            toast.error(() => (<Error errors={resultValid_login.errorMsg} />), {
                position: "top-right",
                autoClose: 4000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: false,
                draggable: false,
                progress: undefined,
            });
        }


        dispatch(authLogin(user));

    }




    return (
        <>
            {loading && <Loading />}
            <form onSubmit={onhandleSumit}>

                <div className='my-3'>
                    <label htmlFor="email">Email</label>
                    <input type="text"
                        name="email"
                        id="email"
                        className="w-full p-2 border-solid outline-none border-2 rounded-md"
                        placeholder='youremail@gmail.com'
                        onChange={(e) => { setEmail(e.target.value) }}
                        value={email}
                        autoComplete="off   "
                    />
                </div>
                <div className='my-3'>
                    <label htmlFor="password">Password</label>
                    <input type="password"
                        name="password"
                        id="password"
                        className="w-full p-2 border-solid outline-none border-2 rounded-md"
                        placeholder='Your password...'
                        onChange={(e) => { setPassword(e.target.value) }}
                        value={password}
                        autoComplete="off"

                    />
                </div>
                <div className='my-3 flex items-center justify-between'>
                    <div className='flex items-center' >
                        <input type="checkbox"
                            name='cb-re-me'
                            id='rb-me'
                            className='w-4 h-4 '
                            defaultChecked={remember}
                            onClick={() => setRememberMe(!remember)}
                        />
                        <label htmlFor="rb-me" className='ml-2 text-sm cursor-pointer'>Remember me</label>
                    </div>
                    <div>
                        <Link to="/forgot_password" className='text-sm cursor-pointer  hover:underline'>Forgot password !</Link>
                    </div>
                </div>

                <button type='submit'
                    className='w-full px-5 py-2 rounded-md bg-emerald-500 text-white hover:bg-neutral-900'
                >
                    Login
                </button>
                <div className='text-center'>
                    or
                </div>
                <div>
                    <LoginSocialMedia />
                </div>
            </form>
        </>
    )
}

export default LoginForm