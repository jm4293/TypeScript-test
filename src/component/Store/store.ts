import { configureStore, createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface Ismodal {
    is: boolean
}

export const ismodal = createSlice({
    name: 'ismodal',
    initialState: { is: false } as Ismodal,
    reducers: {
        changeIs(state, actions: PayloadAction<Ismodal>) {
            state.is = !state.is
        }
    }
})

export const { changeIs } = ismodal.actions;

export default configureStore({
    reducer: {
        ismodal: ismodal.reducer
    }
})