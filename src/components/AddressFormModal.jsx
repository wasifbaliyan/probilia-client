import React from "react";

export default function AddressFormModal({ setOpenModal }) {
  return (
    <div className="w-full h-full top-0 left-0 fixed backdrop-filter backdrop-blur-sm ">
      <div className="flex justify-center items-center h-full">
        <div className="bg-white p-10 rounded w-96">
          <div className="text-right">
            <button
              className="text-red-500"
              onClick={() => setOpenModal(false)}
            >
              X
            </button>
          </div>
          <h1 className="text-lg font-medium uppercase italic py-3">
            Enter Address Details
          </h1>
          <form>
            <div>
              <input
                onChange={(e) => console.log(e.target.value)}
                className="w-full p-2 my-3 border-2 border-gray-300"
                type="text"
                placeholder="Full Name"
                name="name"
              />
            </div>
            <div>
              <input
                onChange={(e) => console.log(e.target.value)}
                className="w-full p-2 my-3 border-2 border-gray-300"
                type="text"
                placeholder="Home Address, street etc."
                name="street"
              />
            </div>
            <div>
              <input
                onChange={(e) => console.log(e.target.value)}
                className="w-full p-2 my-3 border-2 border-gray-300"
                type="text"
                placeholder="Country"
                name="country"
              />
            </div>
            <div>
              <input
                onChange={(e) => console.log(e.target.value)}
                className="w-full p-2 my-3 border-2 border-gray-300"
                type="text"
                placeholder="State"
                name="state"
              />
            </div>
            <div>
              <input
                onChange={(e) => console.log(e.target.value)}
                className="w-full p-2 my-3 border-2 border-gray-300"
                type="text"
                placeholder="City"
                name="city"
              />
            </div>
            <div>
              <input
                onChange={(e) => console.log(e.target.value)}
                className="w-full p-2 my-3 border-2 border-gray-300"
                type="text"
                placeholder="Mobile Number"
                name="phone"
              />
            </div>
          </form>
          <div className="mt-3 flex">
            <button className="w-40 uppercase text-sm font-medium mr-4 bg-red-500 border-red-500  border-2  text-white py-2 px-5 transition-all">
              Submit
            </button>
            <button
              onClick={() => setOpenModal(false)}
              className="w-40 uppercase text-sm font-medium bg-white border-red-500  border-2  text-red-500 py-2 px-5 transition-all"
            >
              Cancel
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
