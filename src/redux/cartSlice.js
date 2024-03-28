import { createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
    name: 'cartSlice',
    initialState: [],
    reducers: {
        addToCart: (state, action) => {
            state.push(action.payload)
        }

    }
})

export default cartSlice.reducer
export const { addToCart } = cartSlice.actions