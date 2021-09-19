import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  addresses: [],
  status: "idle",
};

export const getAddresses = createAsyncThunk(
  "account/getAddresses",
  async () => {
    const { data } = await axios.get("/api/addresses");
    return data;
  }
);

export const accountSlice = createSlice({
  name: "account",
  initialState,
  reducers: {},
  extraReducers: {
    [getAddresses.pending]: (state, action) => {
      state.status = "loading";
    },
    [getAddresses.fulfilled]: (state, action) => {
      state.status = "success";
      state.addresses = action.payload.response.addresses;
    },
    [getAddresses.rejected]: (state, action) => {
      state.status = "failed";
    },
  },
});

export default accountSlice.reducer;
// export const {  } = accountSlice.actions;
