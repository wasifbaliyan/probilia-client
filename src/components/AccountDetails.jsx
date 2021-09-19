import React from "react";
import { useSelector } from "react-redux";

export default function AccountDetails() {
  const { user } = useSelector((state) => state.auth);

  return (
    <div className="p-5">
      <h1 className="text-2xl font-light mb-5">Account Information</h1>
      <h3 className="text-lg font-normal py-2">Contact Details</h3>
      <p className="font-medium">{user.name && user.name}</p>
      <p className="text-sm">{user.email && user.email}</p>
    </div>
  );
}
