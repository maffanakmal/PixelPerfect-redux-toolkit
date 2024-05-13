import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    value: 0
}

const counterSlice = createSlice({
    name: "counter",
    initialState,
    reducers: {
        increment: (state) => {
            state.value += 1; // Corrected from state.count to state.value
        },
        decrement: (state) => {
            state.value -= 1; // Corrected from state.count to state.value
        },
        incrementByAmount: (state, action) => {
            state.value += action.payload; // This was already correct
        }
    }
})

export const { increment, decrement, incrementByAmount } = counterSlice.actions

export default counterSlice.reducer
