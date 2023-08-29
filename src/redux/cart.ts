import { PayloadAction, createSlice } from "@reduxjs/toolkit";

type CartState = {
    id: string;
    name: string;
}

const initialState = [{
    id: "",
    name: "",
}] as CartState[];

export const cart = createSlice({
    name: "cart",
    initialState: initialState,
    reducers: {
        addCart: (state, action: PayloadAction<CartState[]>) => {
            state = {
                ...state,
                ...action.payload,
            }
            console.log(state);
        },
        deleteCart: () => {
            console.log("DELETE CART");
        }
    }
});

export const { addCart, deleteCart } = cart.actions;
export default cart.reducer;
