import React, { useState } from "react";
import AddressSelectModal from "../components/AddressSelectModal";
import CartItem from "../components/CartItem";

export default function Cart() {
  const [openAddressSelectModal, setOpenAddressSelectModal] = useState(false);
  return (
    <div className="max-w-screen-xl mx-auto pb-20 ">
      <h1 className="uppercase italic text-3xl font-medium text-center py-10">
        My Cart
      </h1>
      <hr />
      <div className="grid grid-cols-5 pt-10">
        <div className="col-span-3 bg-white pt-10 px-5 pb-5">
          <div className="flex justify-between mb-3">
            <div>
              <div className="font-medium mb-2">
                <span className="font-normal">Address:</span> John Doe
              </div>
              <p className="text-gray-700">
                #1/4 , 100ft Ring Road, Jp Nagar - 4 Phase, Dollars Colony,
                Bangalore 11105
              </p>
            </div>
            <div className="relative">
              <button
                onClick={() => setOpenAddressSelectModal(true)}
                className="uppercase text-sm font-medium bg-white border-red-500  border-2  text-red-500 py-1 px-5 transition-all"
              >
                Change
              </button>
              {openAddressSelectModal && (
                <AddressSelectModal
                  setOpenAddressSelectModal={setOpenAddressSelectModal}
                />
              )}
            </div>
          </div>
          <div>
            <CartItem />
            <CartItem />
            <CartItem />
          </div>
        </div>

        <div className="col-span-2 bg-gray-200 p-5">
          <h1 className=" font-medium text-lg  italic py-3 mb-5">
            Payment Details
          </h1>
          <div className="flex pb-3 justify-between">
            <p className=" text-gray-700">Total MRP</p>
            <h3 className="font-medium  ml-4">₹10000</h3>
          </div>

          <div className="flex py-2 justify-between">
            <p className=" text-gray-700">Discount</p>
            <h3 className="font-medium  ml-4 text-green-500">₹100</h3>
          </div>

          <div className="flex py-2 justify-between">
            <p className=" font-medium">Total Paid</p>
            <h3 className="font-medium  ml-4 ">₹11000</h3>
          </div>
          <div>
            <button className="mt-8 uppercase text-sm w-full py-2 hover:bg-red-400 transition-all hover:border-red-400 bg-red-500 border-2 border-red-500 text-white">
              Place Order
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
