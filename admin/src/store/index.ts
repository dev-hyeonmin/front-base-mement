
import { configureStore } from '@reduxjs/toolkit';
import branchReducer from './branch';
import tokenReducer from './token';

export const store = configureStore({
    reducer: {
        tokenReducer,
        branchReducer
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AddDispatch = typeof store.dispatch;