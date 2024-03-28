import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const filterCategory = createAsyncThunk('(categoryProductSlice)/filterCategory', async (userData) => {
    const { data } = await axios.get(`https://api.escuelajs.co/api/v1/categories/${userData}/products`)
    // console.log(data);
    return data

})

const categoryProductSlice = createSlice({
    name: 'categoryProductSlice',
    initialState: {
        filterArray: []
    },
    extraReducers: (builder) => {
        builder.addCase(filterCategory.fulfilled, (state, action) => {
            state.filterArray = action.payload
        })
    }
})

export default categoryProductSlice.reducer
