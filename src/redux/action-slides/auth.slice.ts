import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { registerApi, loginApi, facebookApi, googleApi, forgotPasswordApi, signOutApi } from '../actions/authAction';
import { RootState } from '../store';
import { IRegister, ILogin } from '../types';


export interface AuthState {
    currentUser?: any,
    loading: boolean
}


export const initialState = {
    currentUser: undefined,
    loading: false
}


export const authRegister = createAsyncThunk(
    'auth/register',
    async (user: IRegister, thunkAPI) => {
        return await registerApi(user)
    }
)


export const authLogin = createAsyncThunk(
    'auth/login',
    async (user: ILogin, thunkAPI) => {
        return await loginApi(user)
    }
)

export const authLogout = createAsyncThunk(
    'auth/signout',
    async () => {
        return await signOutApi()
    }
)


export const authGoogleLogin = createAsyncThunk(
    'auth/google',
    async () => {
        return await googleApi();
    }
)


export const authFacebookLogin = createAsyncThunk(
    'auth/facebook',
    async () => {
        return await facebookApi();
    }
)


export const authForgotPassword = createAsyncThunk(
    'auth/forgot_password',
    async (email: string) => {
        return await forgotPasswordApi(email);
    }
)


const auth = createSlice({

    name: 'auth',

    initialState: initialState,

    reducers: {
        addUser: (state, action) => {
            //console.log(action);
            state.currentUser = action.payload
        }
    },

    extraReducers: (builder) => {  // trang thai cua action tao user
        builder
            // //register
            // .addCase(authRegister.pending, (state, action) => { // dang tao, thi` loading
            //     state.loading = true;
            // })
            // .addCase(authRegister.fulfilled, (state, action) => { // tao thanh cong thi` stop loading
            //     state.loading = false;
            // })
            // // .addCase(authRegister.rejected, (state, action) => { // loi~ trong khi tao user len firebase thi van loading
            // //     state.loading = false;
            // // })
            // //login
            // .addCase(authLogin.pending, (state, action) => {
            //     state.loading = true;
            // })
            // .addCase(authLogin.fulfilled, (state, action) => {
            //     state.loading = false;
            // })
            // // .addCase(authLogin.rejected, (state, action) => {
            // //     state.loading = false;
            // // })
            // //Login with Google
            // .addCase(authGoogleLogin.pending, (state, action) => {
            //     state.loading = true;
            // })
            // .addCase(authGoogleLogin.fulfilled, (state, action) => {
            //     state.loading = false;
            // })
            // // .addCase(authGoogleLogin.rejected, (state, action) => {
            // //     state.loading = false;
            // // })
            // // Login with Facebook
            // .addCase(authFacebookLogin.pending, (state, action) => {
            //     state.loading = true;
            // })
            // .addCase(authFacebookLogin.fulfilled, (state, action) => {
            //     state.loading = false;
            // })
            // .addCase(authFacebookLogin.rejected, (state, action) => {
            //     state.loading = false;
            // })
            // //Forgot Password
            // .addCase(authForgotPassword.pending, (state, action) => {
            //     state.loading = true;
            // })
            // .addCase(authForgotPassword.fulfilled, (state, action) => {
            //     state.loading = false;
            // })
            // // .addCase(authForgotPassword.rejected, (state, action) => {
            // //     state.loading = false;
            // // })
            // //Log out
            // .addCase(authLogout.pending, (state, action) => {
            //     state.loading = true;
            // })
            // .addCase(authLogout.fulfilled, (state, action) => {
            //     state.loading = false;
            // })
            .addMatcher(
                ({ type }) => type.startsWith('auth') && type.endsWith('/pending'),
                (state) => { state.loading = true }
            )
            .addMatcher(
                ({ type }) => type.startsWith('auth') && type.endsWith('/fulfilled'),
                (state) => { state.loading = false }
            )
    }

})






export const getStateAuth = (state: RootState) => state.auth;
export const { addUser } = auth.actions;
export default auth.reducer;