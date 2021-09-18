import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  wishlist: [],
  status: "idle",
};

export const getWishlist = createAsyncThunk("product/getWishlist", async () => {
  const { data } = await axios.get("/api/wishlist");
  return data;
});

export const wishlistSlice = createSlice({
  name: "wishlist",
  initialState,
  reducers: {},
  extraReducers: {
    [getWishlist.pending]: (state, action) => {
      state.status = "loading";
    },
    [getWishlist.fulfilled]: (state, action) => {
      state.status = "success";
      state.wishlist = action.payload.response.wishlist;
    },
    [getWishlist.rejected]: (state, action) => {
      state.status = "failed";
    },
  },
});

export default wishlistSlice.reducer;
// export const {  } = wishlistSlice.actions;
