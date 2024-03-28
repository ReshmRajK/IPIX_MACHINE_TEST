import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchUser=createAsyncThunk('(userSlice)/fetchUser',async()=>{
    const {data}=await axios.get('https://api.escuelajs.co/api/v1/users')
    // console.log(data);
    return data
})

const userSlice=createSlice({
    name:'userSlice',
    initialState:{
        userArray:[]
    },
    extraReducers:(builder)=>{
        builder.addCase(fetchUser.fulfilled,(state,action)=>{
            state.userArray=action.payload
        })
    }

})

export default userSlice.reducer