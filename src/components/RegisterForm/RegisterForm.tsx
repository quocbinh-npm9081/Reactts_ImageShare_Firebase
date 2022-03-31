import React, { FormEvent, useState, useEffect } from 'react'
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import { authRegister } from '../../redux/action-slides/auth.slice';
//import { registerApi } from '../../redux/actions/authAction';
import { useAppDispatch, useAppSelector } from '../../redux/store.hooks';
import validRegister from '../../utils/validator/register';
import Error from '../Error/Error';
import Loading from '../Loading/Loading';


const RegisterForm = () => {

    const [name, setName] = useState('');

    const [email, setEmail] = useState('');

    const [password, setPassword] = useState('');

    const [cf_password, setCfPassword] = useState('');

    const dispatch = useAppDispatch();

    const { loading, currentUser } = useAppSelector(state => state.auth);

    const history = useNavigate();

    useEffect(() => {

        if (currentUser) return history('/', { replace: true });

    }, [history])



    const onhandleSumit = (e: FormEvent) => {

        e.preventDefault();
        //console.log({ name, email, password, cf_password })

        const user = { name, email, password, cf_password };

        const resultValid_register = validRegister(user);

        if (resultValid_register.errorLength) {

            setPassword("");

            setCfPassword("");

            toast.error(() => (<Error errors={resultValid_register.errorMsg} />), {
                position: "top-right",
                autoClose: 4000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: false,
                draggable: false,
                progress: undefined,
            });

        } else {

            //registerApi(user);

            dispatch(authRegister(user))

        }

    }




    return (
        <>
            {loading && <Loading />}
            <form onSubmit={onhandleSumit}>
                <div className='my-3'>
                    <label htmlFor="name">Name</label>
                    <input type="text"
                        name="name"
                        id="name"
                        className="w-full p-2 border-solid outline-none border-2 rounded-md"
                        placeholder='dislay name...'
                        onChange={(e) => { setName(e.target.value) }}
                        value={name}
                        autoComplete="on"

                    />
                </div>
                <div className='my-3'>
                    <label htmlFor="email">Email</label>
                    <input type="text"
                        name="email"
                        id="email"
                        className="w-full p-2 border-solid outline-none border-2 rounded-md"
                        placeholder='youremail@gmail.com'
                        onChange={(e) => { setEmail(e.target.value) }}
                        value={email}
                        autoComplete="on"

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
                        required

                    />
                </div>
                <div className='my-3'>
                    <label htmlFor="cf_password">Confirm Password</label>
                    <input type="password"
                        name="cf_password"
                        id="cf_password"
                        className="w-full p-2 border-solid outline-none border-2 rounded-md"
                        placeholder='Confirm your password'
                        onChange={(e) => { setCfPassword(e.target.value) }}
                        value={cf_password}
                        autoComplete="off"
                        required

                    />
                </div>
                <button type='submit'
                    className='w-full px-5 py-2 rounded-md bg-emerald-500 text-white hover:bg-neutral-900'
                >
                    Register
                </button>
            </form>
        </>
    )
}



export default RegisterForm