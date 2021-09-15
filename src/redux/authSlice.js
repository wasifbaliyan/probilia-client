import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  isLoggedIn: false,
  status: "idle",
};

export const loginUser = createAsyncThunk("auth/loginUser", async (data) => {
  return axios.post("/auth/login", data);
});
export const registerUser = createAsyncThunk(
  "auth/registerUser",
  async (data) => {
    return axios.post("/auth/register", data);
  }
);

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    logout: (state, action) => {
      localStorage.clear();
      state.isLoggedIn = false;
    },
    setAuth: (state, action) => {
      state.isLoggedIn = action.payload.isLoggedIn;
    },
  },
  extraReducers: {
    [loginUser.pending]: (state, action) => {
      state.status = "loading";
    },
    [loginUser.fulfilled]: (state, action) => {
      state.status = "success";
      const { token, name, email } = action.payload.data.response;
      localStorage.setItem(
        "login",
        JSON.stringify({ token, name, email, isLoggedIn: true })
      );
      state.isLoggedIn = true;
    },
    [loginUser.rejected]: (state, action) => {
      state.status = "failed";
    },

    [registerUser.pending]: (state, action) => {
      state.status = "loading";
    },
    [registerUser.fulfilled]: (state, action) => {
      state.status = "success";
      const { token, name, email } = action.payload.data.response;
      localStorage.setItem(
        "login",
        JSON.stringify({ token, name, email, isLoggedIn: true })
      );
      state.isLoggedIn = true;
    },
    [registerUser.rejected]: (state, action) => {
      state.status = "failed";
    },
  },
});

export default authSlice.reducer;
export const { logout, setAuth } = authSlice.actions;
