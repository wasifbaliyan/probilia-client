import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { setCheckboxFilters } from "../redux/productSlice";

export default function StockFilter() {
  const [open, setOpen] = useState(false);
  const dispatch = useDispatch();

  return (
    <div className="relative w-72 mx-4 mb-2">
      <div className="bg-gray-300">
        <button
          className="w-full py-3 text-left px-5"
          onClick={() => setOpen(!open)}
        >
          Availabilty
        </button>
      </div>
      {open && (
        <div className="absolute w-full z-10 bg-gray-300 pb-3">
          <div className="w-full py-2 px-5">
            <input
              onChange={(e, value) =>
                dispatch(
                  setCheckboxFilters({
                    name: e.target.name,
                    value: e.target.value,
                    checked: e.target.checked,
                  })
                )
              }
              className="w-4 h-4"
              type="checkbox"
              name="stock"
              id="instock"
              value="inStock"
            />
            <label className="ml-2 uppercase text-gray-700" htmlFor="instock">
              In Stock
            </label>
          </div>
          <div className="w-full  py-2 px-5">
            <input
              onChange={(e, value) =>
                dispatch(
                  setCheckboxFilters({
                    name: e.target.name,
                    value: e.target.value,
                    checked: e.target.checked,
                  })
                )
              }
              className="w-4 h-4"
              type="checkbox"
              name="stock"
              id="outStock"
              value="outStock"
            />
            <label className="ml-2 uppercase text-gray-700" htmlFor="outStock">
              Out of Stock
            </label>
          </div>
        </div>
      )}
    </div>
  );
}
