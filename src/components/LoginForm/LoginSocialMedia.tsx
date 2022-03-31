import { FcGoogle } from '@react-icons/all-files/fc/FcGoogle';
import { SiFacebook } from '@react-icons/all-files/si/SiFacebook';

import { useAppDispatch } from '../../redux/store.hooks';
import { authFacebookLogin, authGoogleLogin } from '../../redux/action-slides/auth.slice';



const LoginSocialMedia = () => {


    const dispatch = useAppDispatch();


    return (
        <div className='flex items-center justify-center'>
            <button className='w-full my-2 p-2 font-semibold flex items-center justify-center border-2 border-transparent rounded-md hover:border-slate-100	'
                onClick={() => dispatch(authGoogleLogin())}
            >
                <FcGoogle
                    fontSize={36}
                />
                Google
            </button>
            <button className='w-full my-2 p-2 font-semibold flex items-center justify-center border-2 border-transparent rounded-md hover:border-slate-100	'
                onClick={() => dispatch(authFacebookLogin())}
            >
                <SiFacebook
                    fontSize={36}
                    color='#3A559F'
                />
                Facebook
            </button>
        </div>
    )
}









export default LoginSocialMedia