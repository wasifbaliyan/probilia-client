import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../redux/authSlice";

export default function AccountSettings() {
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.auth);
  return (
    <div className="p-5">
      <h1 className="text-2xl font-light mb-5">Settings</h1>
      <p className="font-medium">{user.name && user.name}</p>
      <p className="text-sm mb-5">{user.email && user.email}</p>
      <button
        onClick={() => dispatch(logout())}
        className="uppercase text-sm font-medium bg-red-500 border-red-500  border-2  text-white py-1 px-5 transition-all"
      >
        Logout
      </button>
    </div>
  );
}
