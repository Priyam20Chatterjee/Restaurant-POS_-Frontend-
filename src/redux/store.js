import { configureStore } from "@reduxjs/toolkit";
import customerSlice from "./slice/customerSlice"; 
import cartSlice from "./slice/cartSlice";

const store = configureStore({
       reducer:{
              customer: customerSlice,
              cart: cartSlice
       },

       devTools: import.meta.env.NODE_ENV !== "production",
});

export default store 