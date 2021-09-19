import React, { useState } from "react";
import OrderBreakUpModal from "./OrderBreakUpModal";
import OrderItem from "./OrderItem";

export default function Order({ order }) {
  const [breakModalOpen, setBreakUpModalOpen] = useState(false);
  return (
    <div className="py-3">
      <h2 className="text-green-500 text-lg font-medium">Order Confirmed</h2>
      <h6 className="font-light text-sm">Sat Sep 18 2021</h6>
      <p className="mt-3 ">Order# {order._id}</p>
      <div className="flex my-2">
        <p>
          Total:{" "}
          <span className="font-medium">₹{order.payment.totalPaidAmount}</span>
        </p>{" "}
        <div className="relative">
          <button
            onClick={() => setBreakUpModalOpen(true)}
            className="text-red-500 ml-4"
          >
            View Breakup
          </button>
          {breakModalOpen && (
            <OrderBreakUpModal
              order={order}
              setBreakUpModalOpen={setBreakUpModalOpen}
            />
          )}
        </div>
      </div>
      <div>
        <p className="text-gray-700">
          <span className="font-normal">Address:</span> {order.addressId.name}{" "}
          {order.addressId.street}, {order.addressId.city}-
          {order.addressId.pinCode} {order.addressId.state},{" "}
          {order.addressId.country}
        </p>
      </div>
      <div>
        {order.products.map((product) => (
          <OrderItem key={product._id} product={product} />
        ))}
      </div>
    </div>
  );
}
