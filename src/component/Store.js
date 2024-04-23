import { configureStore } from "@reduxjs/toolkit";
import ProductSlice from "./ProductSlice";

const store = configureStore({
  reducer: {
    Product: ProductSlice.reducer
  }
});

export default store;
