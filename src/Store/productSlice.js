import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

    const productSlice = createSlice({

    name: 'product',
    initialState: {
        data: [],
        status: 'success'
    },
    // reducers: {
    //     setProducts(state, action){
    //         return {...state, data: action.payload}
    //     },
    //     setStatus(state, action){
    //         return {...state, status: action.payload}
    //     }
    // }
    extraReducers: (builder) => {
        builder.addCase(fetchProducts.pending, (state) => {
            return {...state, status: "loading"}
        }).addCase(fetchProducts.fulfilled, (state, action) => {
            return {data: action.payload, status: 'success'}
        }).addCase(fetchProducts.rejected, (state) => {
            return {...state, status: 'error'}
        })
    }

})


//Thunk using redux - is a fxn that wraps another fxn
// export function fetchProducts(){
//     return async function(dispatch){
//         dispatch(setStatus('loading'));
//         try{
//             let res = await axios.get('https://fakestoreapi.com/products')
//             dispatch(setProducts(res.data))
//             dispatch(setStatus('success'))
//         } catch (err) {
//             dispatch(setStatus("error"));
//         }
//     }
// }


//Thunk using Redux-toolkit
export const fetchProducts = createAsyncThunk('product', async () => {
    let res = await axios.get('https://fakestoreapi.com/products')
    return res.data;
})

export default productSlice.reducer;

export const { setStatus, setProducts } = productSlice.actions;
