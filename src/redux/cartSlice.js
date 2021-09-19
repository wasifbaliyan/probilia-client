import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  cart: [],
  status: "idle",
  orders: [],
};

export const getCart = createAsyncThunk("cart/getCart", async () => {
  const { data } = await axios.get("/api/cart");
  return data;
});
export const getOrders = createAsyncThunk("cart/getOrders", async () => {
  const { data } = await axios.get("/api/orders");
  return data;
});

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {},
  extraReducers: {
    [getCart.pending]: (state, action) => {
      state.status = "loading";
    },
    [getCart.fulfilled]: (state, action) => {
      state.status = "success";
      state.cart = action.payload.response.cart;
    },
    [getCart.rejected]: (state, action) => {
      state.status = "failed";
    },

    [getOrders.pending]: (state, action) => {
      state.status = "loading";
    },
    [getOrders.fulfilled]: (state, action) => {
      state.status = "success";
      state.orders = action.payload.orders;
    },
    [getOrders.rejected]: (state, action) => {
      state.status = "failed";
    },
  },
});

export default cartSlice.reducer;
// export const {  } = cartSlice.actions;
