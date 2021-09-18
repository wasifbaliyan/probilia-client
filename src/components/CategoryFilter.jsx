import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { CATEGORIES } from "../data/uiData";
import { setCheckboxFilters } from "../redux/productSlice";
export default function CategoryFilter() {
  const [open, setOpen] = useState(false);
  const dispatch = useDispatch();
  return (
    <div className="relative w-72 mx-4 mb-2">
      <div className="bg-gray-300">
        <button
          className="w-full py-3 text-left px-5"
          onClick={() => setOpen(!open)}
        >
          Categories
        </button>
      </div>
      {open && (
        <div className="absolute w-full z-10 bg-gray-300 pb-3">
          {CATEGORIES.map((category) => (
            <div key={category} className="w-full py-2 px-5">
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
                name="category"
                id={`${category}-id`}
                value={category}
              />
              <label
                className="ml-2 uppercase text-gray-700"
                htmlFor={`${category}-id`}
              >
                {category}
              </label>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
