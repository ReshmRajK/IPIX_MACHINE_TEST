import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchCategory = createAsyncThunk('(categorySlice)/fetchCategory', async () => {
    const { data } = await axios.get('https://api.escuelajs.co/api/v1/categories')
    // console.log(data);
    return data
})

const categorySlice = createSlice({
    name: 'categorySlice',
    initialState: {
        categoryProducts: [],
        categoryItemArray: []
    },

    extraReducers: (builder) => {
        builder.addCase(fetchCategory.fulfilled, (state, action) => {
            state.categoryProducts = action.payload
        })
    }

})

export default categorySlice.reducer
