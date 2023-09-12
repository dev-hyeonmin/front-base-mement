import { PayloadAction, createSlice } from "@reduxjs/toolkit";

type TokenState = {
    token: string;
}

const initialState = [{
    token: ""
}] as TokenState[];

export const token = createSlice({
    name: "token",
    initialState: initialState,
    reducers: {
        setToken: (state, action: PayloadAction<TokenState[]>) => {
            return {
                ...state,
                ...action.payload,
            }
        }
    }
});

export const { setToken } = token.actions;
export default token.reducer;