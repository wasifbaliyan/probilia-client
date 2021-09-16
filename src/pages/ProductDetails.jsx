import React from "react";
import Bed from "../assets/bed.jpg";

export default function ProductDetails() {
  return (
    <div className="bg-white">
      <div className="max-w-screen-xl mx-auto">
        <div className="flex justify-between pt-10 mb-5">
          <div>
            <h1 className="italic font-semibold text-3xl uppercase mb-3">
              Wilnoir
            </h1>
            <h3 className="font-medium text-md uppercase">
              Fabric Reclining Sofa
            </h3>
            <h4 className="">A world of more wow</h4>
          </div>
          <div>
            <h2 className="font-medium text-3xl mb-3">$999</h2>
            <h3 className="font-medium text-lg line-through  text-gray-500">
              $2299
            </h3>
            <h1 className="font-medium text-xl text-red-500">60%</h1>
          </div>
        </div>
        <hr className="h-1 bg-gray-900" />
        <div className="grid grid-cols-3 gap-5 py-10">
          <div className="col-span-2 flex">
            <div>
              <div>
                <img className="m-4 w-32" src={Bed} alt="bed" />
              </div>
              <div>
                <img className="m-4 w-32" src={Bed} alt="bed" />
              </div>
              <div>
                <img className="m-4 w-32" src={Bed} alt="bed" />
              </div>
            </div>
            <div className="mx-auto">
              <img src={Bed} alt="bed" />
            </div>
          </div>
          <div className="">Details</div>
        </div>
      </div>
    </div>
  );
}
