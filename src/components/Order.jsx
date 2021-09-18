import React, { useState } from "react";
import OrderBreakUpModal from "./OrderBreakUpModal";
import OrderItem from "./OrderItem";

export default function Order() {
  const [breakModalOpen, setBreakUpModalOpen] = useState(false);
  return (
    <div className="py-3">
      <h2 className="text-green-500 text-lg font-medium">Order Confirmed</h2>
      <h6 className="font-light text-sm">Sat Sep 18 2021</h6>
      <p className="mt-3 ">Order# 6144b242431c85001571b321</p>
      <div className="flex my-2">
        <p>
          Total: <span className="font-medium">₹481.99</span>
        </p>{" "}
        <div className="relative">
          <button
            onClick={() => setBreakUpModalOpen(true)}
            className="text-red-500 ml-4"
          >
            View Breakup
          </button>
          {breakModalOpen && (
            <OrderBreakUpModal setBreakUpModalOpen={setBreakUpModalOpen} />
          )}
        </div>
      </div>
      <p>
        Address: John Doe, #1/4 , 100ft Ring Road, Jp Nagar - 4 Phase, Dollars
        Colony, Bangalore, 560078
      </p>
      <div>
        <OrderItem />
        <OrderItem />
        <OrderItem />
      </div>
    </div>
  );
}
