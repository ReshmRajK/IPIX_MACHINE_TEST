import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const singleFetch = createAsyncThunk('(singleProductSlice)/singleFetch', async (userData) => {
    const { data } = await axios.get(`https://api.escuelajs.co/api/v1/products/${userData}`)
    // console.log(data);
    return data

})

const singleProductSlice = createSlice({
    name: 'singleProductSlice',
    initialState: {
        singleProduct: []
    },
    extraReducers: (builder) => {
        builder.addCase(singleFetch.fulfilled, (state, action) => {
            state.singleProduct = action.payload
        })
    }
})

export default singleProductSlice.reducer