import { configureStore } from '@reduxjs/toolkit';
import authSlice from './action-slides/auth.slice';
import profileSlides from './action-slides/profile.slides';
const store = configureStore({
    reducer: {
        auth: authSlice,
        profile: profileSlides
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({
        serializableCheck: false
    })
})
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch;

export default store;