import React from "react";
import Bed from "../assets/bed.jpg";

export default function OrderItem() {
  return (
    <div className="flex py-3 items-center">
      <figure className="w-32 mr-4">
        <img className="w-full" src={Bed} alt="bed" />
      </figure>
      <div>
        <h2 className="font-medium">RECLINING SECTIONAL SOFA</h2>
        <p className="text-sm uppercase text-gray-700">Wagner</p>
        <p className="text-sm font-medium"> Quantity: 1</p>
      </div>
    </div>
  );
}
