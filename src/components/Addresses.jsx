import React from "react";
import Address from "./Address";

export default function Addresses() {
  return (
    <div className="p-5 relative">
      <h1 className="text-2xl font-light mb-5">My Addresses</h1>
      <button className="uppercase text-sm font-medium text-left bg-white text-red-500 py-2  transition-all">
        Add new address
      </button>
      <div>
        <Address />
        <Address />
      </div>
    </div>
  );
}
