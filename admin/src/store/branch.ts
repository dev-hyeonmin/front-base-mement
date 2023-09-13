import { PayloadAction, createSlice } from "@reduxjs/toolkit";

type branchState = {
    branchId: number;
}

const initialState = {
    branchId: 1
} as branchState;

export const branch = createSlice({
    name: "branch",
    initialState: initialState,
    reducers: {
        setBranch: (state, action: PayloadAction<branchState[]>) => {
            return {
                ...state,
                ...action.payload,
            }
        }
    }
});

export const { setBranch } = branch.actions;
export default branch.reducer;