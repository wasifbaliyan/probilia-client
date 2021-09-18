import React from "react";
import { useDispatch } from "react-redux";
import { logout } from "../redux/authSlice";

export default function AccountSettings() {
  const dispatch = useDispatch();
  return (
    <div className="p-5">
      <h1 className="text-2xl font-light mb-5">Settings</h1>
      <button
        onClick={() => dispatch(logout())}
        className="uppercase text-sm font-medium bg-red-500 border-red-500  border-2  text-white py-3 px-10 transition-all"
      >
        Logout
      </button>
    </div>
  );
}
