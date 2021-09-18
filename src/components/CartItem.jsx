import React from "react";
import Bed from "../assets/bed.jpg";

export default function CartItem() {
  return (
    <div className="flex py-3 items-center">
      <figure className="w-32 mr-4">
        <img className="w-full" src={Bed} alt="bed" />
      </figure>
      <div>
        <h2 className="font-medium">RECLINING SECTIONAL SOFA</h2>
        <p className="text-sm uppercase text-gray-700">Wagner</p>
        <div className="flex my-3">
          <button className="border-2 font-medium border-gray-200  text-2xl w-10">
            -
          </button>
          <span className="border-2 border-gray-200 mx-4 w-10 flex items-center justify-center">
            1
          </span>
          <button className="border-2 font-medium  border-gray-200 text-2xl w-10">
            +
          </button>
        </div>
        <div className="mt-5">
          <button className="uppercase text-sm font-medium bg-black text-white hover:border-red-500 hover:text-red-500 border-black border-2  hover:bg-white py-1 px-5 transition-all">
            Move to wishlist
          </button>
        </div>
      </div>
    </div>
  );
}
