import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { BRANDS } from "../data/uiData";
import { setCheckboxFilters } from "../redux/productSlice";

export default function BrandFilter({ open, handleOpen }) {
  const dispatch = useDispatch();
  const { filters } = useSelector((state) => state.product);

  return (
    <div className="relative w-72 mx-4 mb-2">
      <div className="bg-gray-300">
        <button
          className="w-full py-3 text-left px-5"
          onClick={() => handleOpen("brand")}
        >
          Brands
        </button>
      </div>
      {open && (
        <div className="absolute w-full z-10 bg-gray-300 pb-3">
          {BRANDS.map((brand) => (
            <div key={brand} className="w-full py-2 px-5">
              <input
                checked={filters.brand.includes(brand)}
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
                name="brand"
                id={`${brand}-id`}
                value={brand}
              />
              <label
                className="ml-2 uppercase text-gray-700"
                htmlFor={`${brand}-id`}
              >
                {brand}
              </label>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
