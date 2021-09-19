import React from "react";

export default function OrderBreakUpModal({ setBreakUpModalOpen, order }) {
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
          <div className="pb-3 ">
            {order.products.map((product) => (
              <div
                key={product._id}
                className="text-sm flex justify-between text-gray-700"
              >
                <p>
                  <span>{product.item}</span> x {product.productId.name}
                </p>
                <h3 className="font-medium text-sm ml-4">
                  ₹{product.productId.price}
                </h3>
              </div>
            ))}
          </div>
          <hr />
          <div className="flex py-3 justify-between">
            <p className="text-sm text-gray-700">Discount</p>
            <h3 className="font-medium text-sm ml-4 text-green-500">
              ₹{order.payment.totalDiscount}
            </h3>
          </div>
          <hr />
          <div className="flex py-3 justify-between">
            <p className="text-sm font-medium">Total Paid</p>
            <h3 className="font-medium text-sm ml-4 ">
              ₹{order.payment.totalPaidAmount}
            </h3>
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
