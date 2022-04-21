import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import { changeProfile, getProfile } from '../actions/profileAction';
import { IAuth, IProfile } from '../types';

export interface ProfileState {
    profile?: IProfile
}


const initialState: ProfileState = {
    profile: undefined
}

export const fetchProfile = createAsyncThunk(
    'profile/fetch',
    async (uid: string) => {

        return await getProfile(uid);
    }
)


export const profileUpdate = createAsyncThunk(
    'profile/update',
    async (params: { user: IAuth, data: IProfile }) => {
        const { user, data } = params;
        return await changeProfile(user, data)
    }
)



const profileSlices = createSlice({

    name: 'profile',

    initialState: initialState,

    reducers: {

    },

    extraReducers: (builder) => {  // trang thai cua action tao user
        builder
            .addMatcher(
                ({ type }) => type.startsWith('profile') && type.endsWith('/fulfilled'),
                (state, action: PayloadAction<IProfile | undefined>) => {
                    // console.log(action.payload);

                    state.profile = action.payload;
                }
            )
    }

})






// export const getStateAuth = (state: RootState) => state.profileSlices;
// export const { addUser } = profileSlices.actions;
export default profileSlices.reducer;