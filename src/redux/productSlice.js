import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  products: [],
  status: "idle",
  productDetails: {},
};

export const getProducts = createAsyncThunk("product/getProducts", async () => {
  const { data } = await axios.get("/api/products");
  return data;
});
export const getProductDetails = createAsyncThunk(
  "product/getProductDetails",
  async (id) => {
    const { data } = await axios.get("/api/products/" + id);
    return data;
  }
);

export const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {},
  extraReducers: {
    [getProducts.pending]: (state, action) => {
      state.status = "loading";
    },
    [getProducts.fulfilled]: (state, action) => {
      state.status = "success";
      state.products = action.payload.response.products;
    },
    [getProducts.rejected]: (state, action) => {
      state.status = "failed";
    },

    [getProductDetails.pending]: (state, action) => {
      state.status = "loading";
    },
    [getProductDetails.fulfilled]: (state, action) => {
      state.status = "success";
      state.productDetails = action.payload.response.product;
    },
    [getProductDetails.rejected]: (state, action) => {
      state.status = "failed";
    },
  },
});

export default productSlice.reducer;
// export const {  } = productSlice.actions;
