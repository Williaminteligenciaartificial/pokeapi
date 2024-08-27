import { createSlice } from "@reduxjs/toolkit";

export const traainerSlice = createSlice({
    name: 'trainer',
    initialState: '',
    reducers: {
        setTrainer: (state, action) => action.payload, 

    },
});
export const {setTrainer} = traainerSlice.actions;

export default traainerSlice.reducer;

