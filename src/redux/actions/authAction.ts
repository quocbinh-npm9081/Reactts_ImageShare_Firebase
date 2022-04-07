import { IRegister, ILogin } from '../types';
import { browserLocalPersistence, browserSessionPersistence, createUserWithEmailAndPassword, sendPasswordResetEmail, setPersistence, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import { auth, providerFacebook, providerGoogle } from '../../config/firebase';
import { toast } from 'react-toastify';


export const registerApi = async (user: IRegister) => {


    try {
        const res = await createUserWithEmailAndPassword(auth, user.email, user.password);

        await updateProfile(res.user, {
            displayName: user.name // update name for user
        })

        // console.log(res);

    } catch (error: any) {

        console.log(error);
        toast.error(error.message)
        //   console.log(process.env.REACT_APP_API_KEY);

    }
}


export const loginApi = async (user: ILogin) => {


    try {
        console.log(user);

        const { email, password, remember } = user;

        //Kiem tra remember
        await setPersistence(auth, remember ? browserLocalPersistence : browserSessionPersistence);

        const res = await signInWithEmailAndPassword(auth, email, password);

        return res.user;

    } catch (error: any) {

        console.log('error' + error.message);

        toast.error('Email or password wrong !', {
            position: "top-right",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: false,
            draggable: false,
            progress: undefined,
        });

    }
}


export const signOutApi = async () => {


    try {
        await signOut(auth);
        return toast('Log out success !', {
            position: "top-right",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: false,
            draggable: false,
            progress: undefined,
        });

    } catch (error: any) {

        toast.error(error.message)

    }
}



export const googleApi = async () => {

    try {

        const res = await signInWithPopup(auth, providerGoogle);

        const user = res.user;

        return user;

    } catch (error: any) {

        console.log('error' + error.message);
        toast.error(error.message)

    }
}


export const facebookApi = async () => {

    try {

        const res = await signInWithPopup(auth, providerFacebook);

        const user = res.user;

        return user;

    } catch (error: any) {

        console.log('error' + error.message);
        toast.error(error.message)

    }
}


export const forgotPasswordApi = async (email: string) => {

    try {

        const res = await sendPasswordResetEmail(auth, email);

        //const user = res.user;

        return toast.success('Success ! Check your email', {
            position: "top-right",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: false,
            draggable: false,
            progress: undefined,
        });;

    } catch (error: any) {

        console.log('error' + error.message);

    }
}





