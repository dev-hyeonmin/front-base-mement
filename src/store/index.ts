
import { configureStore } from '@reduxjs/toolkit';
import tokenReducer from './token'

export const store = configureStore({
    reducer: {
        tokenReducer,
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AddDispatch = typeof store.dispatch;