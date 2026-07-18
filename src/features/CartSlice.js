import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    cartItems: [],
};

const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        addToCart: (state, action) => {
            state.cartItems.push({...action.payload, cartId:crypto.randomUUID()});
            
        },
        removeFromCart: (state, action) => {
            state.cartItems = state.cartItems.filter((item) => item.cartId !== action.payload);
        },

    }
});

export const {cartItems, addToCart, removeFromCart } = cartSlice.actions;
export default cartSlice.reducer;