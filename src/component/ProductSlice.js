import { createSlice } from "@reduxjs/toolkit";



const ProductState = {
    item :[]
}

const ProductSlice = createSlice({
    name:"Product",
    initialState : ProductState,
    reducers:{
        addToCart:(state,action)=>{
            state.item.push(action.payload)
    }
}})




export default ProductSlice;
