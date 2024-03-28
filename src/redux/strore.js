import { configureStore } from "@reduxjs/toolkit";
import categorySlice from "./categorySlice";
import userSlice from "./userSlice";
import productSlice from "./productSlice";
import productDetailsSlice from "./productDetailsSlice";
import singleProductSlice from "./singleProductSlice";
import categoryProductSlice from "./categoryProductSlice";
import cartSlice from "./cartSlice";


export const store=configureStore({
    reducer:{
        categorySlice,
        userSlice,
        productSlice,
        productDetailsSlice,
        singleProductSlice,
        categoryProductSlice,
        cartSlice
       

    }
})