import React from "react";

export default function OrderBreakUpModal({ setBreakUpModalOpen }) {
  return (
    <div className="w-full h-full top-0 left-0 fixed backdrop-filter backdrop-blur-sm ">
      <div className="flex justify-center items-center h-full">
        <div className="bg-white p-10 rounded">
          <div className="text-right">
            <button
              className="text-red-500"
              onClick={() => setBreakUpModalOpen(false)}
            >
              X
            </button>
          </div>
          <h1 className=" font-medium uppercase italic py-3">
            Order Payment Details
          </h1>
          <div className="flex pb-3 justify-between">
            <p className="text-sm text-gray-700">
              <span>1</span> x Wagner Cornred Sofa for living room
            </p>
            <h3 className="font-medium text-sm ml-4">₹10000</h3>
          </div>
          <hr />
          <div className="flex py-3 justify-between">
            <p className="text-sm text-gray-700">Discount</p>
            <h3 className="font-medium text-sm ml-4 text-green-500">₹100</h3>
          </div>
          <hr />
          <div className="flex py-3 justify-between">
            <p className="text-sm font-medium">Total Paid</p>
            <h3 className="font-medium text-sm ml-4 ">₹11000</h3>
          </div>
          <div className="mt-5">
            <button
              onClick={() => setBreakUpModalOpen(false)}
              className=" uppercase text-sm font-medium bg-white border-red-500  border-2  text-red-500 py-1 px-5 transition-all"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
