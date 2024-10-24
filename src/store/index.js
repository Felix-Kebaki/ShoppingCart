import { configureStore } from "@reduxjs/toolkit";
import CartReducer from './cart-slice/cart-slice'

const store=configureStore({
    reducer:{
        cart:CartReducer,
    },
})

export default store;