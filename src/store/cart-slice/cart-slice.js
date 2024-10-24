import { createSlice } from "@reduxjs/toolkit";


const cartSlide=createSlice({
    name:"cart",
    initialState:{
        CartItems:[]
    },
    reducers:{
        addToCart(state,action){
          const item=action.payload;
            state.CartItems.push({
                id:item.id,
                name:item.Name,
                image:item.image,
                description:item.desc
        })
        },
        removeFromCart(state,action){
            state.CartItems= state.CartItems.filter((item)=>item.id!==action.payload)
        }
    }
})

export const {addToCart,removeFromCart}=cartSlide.actions;

export default cartSlide.reducer