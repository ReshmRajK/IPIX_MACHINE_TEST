import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchProductDetails = createAsyncThunk('(productDetailsSlice)/fetchProductDetails', async () => {
    const { data } = await axios.get(' https://api.escuelajs.co/api/v1/products')
    // console.log(data);
    return data
})

const productDetailsSlice = createSlice({
    name: 'productDetailsSlice',
    initialState: {
        loading: false,
        allProductsDetails: []
    },

    extraReducers: (builder) => {
        builder.addCase(fetchProductDetails.fulfilled, (state, action) => {
            state.allProductsDetails = action.payload
        })
    }

})

export default productDetailsSlice.reducer
