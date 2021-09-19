import { configureStore } from "@reduxjs/toolkit";
import accountReducer from "./accountSlice";
import authReducer from "./authSlice";
import cartReducer from "./cartSlice";
import productReducer from "./productSlice";
import wishlistReducer from "./wishlistSlice";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    product: productReducer,
    wishlist: wishlistReducer,
    cart: cartReducer,
    account: accountReducer,
  },
});
