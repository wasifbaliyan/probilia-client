import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  products: [],
  status: "idle",
  productDetails: {},
  filters: {
    category: [],
    sortBy: "",
    brand: [],
    stock: [],
  },
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
  reducers: {
    setFilters: (state, action) => {
      state.filters[action.payload.name] = action.payload.value;
    },
    setCheckboxFilters: (state, action) => {
      if (action.payload.checked === true) {
        state.filters[action.payload.name].push(action.payload.value);
      } else {
        const index = state.filters[action.payload.name].indexOf(
          action.payload.value
        );
        state.filters[action.payload.name].splice(index, 1);
      }
    },
  },
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
export const { setFilters, setCheckboxFilters } = productSlice.actions;
