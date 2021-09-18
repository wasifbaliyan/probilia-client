import React from "react";
import Order from "./Order";

export default function Orders() {
  return (
    <div className="p-5 relative">
      <h1 className="text-2xl font-light mb-5">My Orders</h1>
      <div>
        <Order />
        <hr />
        <Order />
      </div>
    </div>
  );
}
