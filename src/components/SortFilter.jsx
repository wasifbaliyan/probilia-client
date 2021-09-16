import React, { useState } from "react";

export default function SortFilter() {
  const [open, setOpen] = useState(false);

  return (
    <div className="relative w-72 mx-4">
      <div className="bg-gray-300">
        <button
          className="w-full py-3 text-left px-5"
          onClick={() => setOpen(!open)}
        >
          Sort By{" "}
        </button>
      </div>
      {open && (
        <div className="absolute w-full z-10 bg-gray-300 pb-3">
          <div className="w-full py-2 px-5">
            <input type="radio" name="sortBy" id="highToLow" />
            <label className="ml-2" htmlFor="highToLow">
              Price High to Low
            </label>
          </div>
          <div className="w-full  py-2 px-5">
            <input type="radio" name="sortBy" id="lowToHigh" />
            <label className="ml-2" htmlFor="lowToHigh">
              Price Low to High
            </label>
          </div>
        </div>
      )}
    </div>
  );
}
