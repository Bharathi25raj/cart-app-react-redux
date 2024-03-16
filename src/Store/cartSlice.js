import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: 'cart',
    initialState: [],
    reducers: {
        addToCart(state, action){
            return [...state, action.payload];
        },
        removeFromCart(state, action){
            return state.filter((item) => {
                return item.id !== action.payload;
            })
        }
    }
})


export default cartSlice.reducer;

export const { addToCart, removeFromCart } = cartSlice.actions;