import React from "react";
import Bed from "../assets/bed.jpg";

export default function WishlistItem() {
  return (
    <figure className="w-64 py-10 mx-4">
      <img src={Bed} alt="bed" className="w-full" />
      <figcaption className="uppercase italic text-xl font-semibold py-2">
        Neman
      </figcaption>
      <div className="flex justify-between">
        <h3 className="text-lg font-medium">$999</h3>
        <h4 className="text-lg font-medium text-red-500">50%</h4>
      </div>
      <div className="my-3">
        <button className="w-full uppercase text-sm font-medium hover:bg-red-500 hover:border-red-500 bg-black border-2 border-black text-white py-3 px-10 transition-all">
          Move to cart
        </button>
      </div>
      <div className="my-3">
        <button className="w-full uppercase text-sm font-medium hover:text-red-500 hover:border-red-500 bg-white text-black border-black border-2  py-3 px-10 transition-all">
          Remove Item
        </button>
      </div>
    </figure>
  );
}
