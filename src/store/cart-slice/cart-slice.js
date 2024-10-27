import { createSlice } from "@reduxjs/toolkit";

const cartSlide = createSlice({
  name: "cart",
  initialState: {
    CartItems: [],
  },
  reducers: {
    addToCart(state, action) {
      const item = action.payload;
      state.CartItems.push({
        id: item.id,
        name: item.Name,
        image: item.image,
        description: item.desc,
        price:item.price
      });
    },
    removeFromCart(state, action) {
      state.CartItems = state.CartItems.filter(
        (item) => item.id !== action.payload
      );
    },
    addQuantity(state,action){
        state.CartItems.map((each)=>{
            if(each.id===action.payload){
                return each.quantity+1
            }
        })
    }
  },
});

export const { addToCart, removeFromCart,addQuantity } = cartSlide.actions;

export default cartSlide.reducer;
