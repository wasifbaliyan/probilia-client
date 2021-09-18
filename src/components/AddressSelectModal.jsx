import React from "react";
import Address from "./Address";

export default function AddressSelectModal({ setOpenAddressSelectModal }) {
  return (
    <div className="w-full h-full top-0 left-0 fixed backdrop-filter backdrop-blur-sm ">
      <div className="flex justify-center items-center h-full z-50">
        <div className="bg-white p-10 rounded  overflow-y-scroll h-full">
          <div className="text-right">
            <button
              className="text-red-500"
              onClick={() => setOpenAddressSelectModal(false)}
            >
              X
            </button>
          </div>
          <h1 className=" font-medium text-xl text-center italic py-3">
            Select Address
          </h1>
          <div>
            <div className="flex">
              <input
                className="my-10 w-5 h-5 mr-4"
                type="radio"
                name="address"
              />
              <Address />
            </div>
            <div className="flex">
              <input
                className="my-10 w-5 h-5 mr-4"
                type="radio"
                name="address"
              />
              <Address />
            </div>
            <div className="flex">
              <input
                className="my-10 w-5 h-5 mr-4"
                type="radio"
                name="address"
              />
              <Address />
            </div>
          </div>
          <div className="mt-5">
            <button
              onClick={() => setOpenAddressSelectModal(false)}
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
