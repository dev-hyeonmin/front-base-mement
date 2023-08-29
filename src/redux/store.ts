import { configureStore } from "@reduxjs/toolkit";
import cartReducer from './cart';

export const store = configureStore({
    reducer: {
        cartReducer
    }
});

export type RootState = ReturnType<typeof store.getState>;
export type AddDispatch = typeof store.dispatch;