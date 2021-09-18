import React, { useState } from "react";

export default function BrandFilter() {
  const [open, setOpen] = useState(false);

  return (
    <div className="relative w-72 mx-4 mb-2">
      <div className="bg-gray-300">
        <button
          className="w-full py-3 text-left px-5"
          onClick={() => setOpen(!open)}
        >
          Brands
        </button>
      </div>
      {open && (
        <div className="absolute w-full z-10 bg-gray-300 pb-3">
          <div className="w-full py-2 px-5">
            <input type="checkbox" name="sortBy" id="highToLow" />
            <label className="ml-2" htmlFor="highToLow">
              Nike
            </label>
          </div>
          <div className="w-full  py-2 px-5">
            <input type="checkbox" name="sortBy" id="lowToHigh" />
            <label className="ml-2" htmlFor="lowToHigh">
              Adidas
            </label>
          </div>
        </div>
      )}
    </div>
  );
}
