import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchProduct = createAsyncThunk('(productSlice)/fetchProduct', async () => {
    const { data } = await axios.get('https://api.escuelajs.co/api/v1/products')
    // console.log(data);
    return data
})

const productSlice = createSlice({
    name: 'productSlice',
    initialState: {
        loading: false,
        allProducts: [],
        searchProduct: []

    },
    reducers: {
        searchData: (state, action) => {
            state.allProducts = state.searchProduct.filter(i => i.title.toLowerCase().trim().includes(action.payload.toLowerCase().trim()) || i.category.name.toLowerCase().trim()
                .includes(action.payload.toLowerCase().trim()))

        }

    },

    extraReducers: (builder) => {
        builder.addCase(fetchProduct.pending, (state, action) => {
            state.loading=true
        })
        builder.addCase(fetchProduct.fulfilled, (state, action) => {
            state.allProducts = action.payload
            state.searchProduct = action.payload
        })
    }

})

export default productSlice.reducer
export const { searchData } = productSlice.actions
