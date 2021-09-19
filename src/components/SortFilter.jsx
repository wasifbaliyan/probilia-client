import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setFilters } from "../redux/productSlice";

export default function SortFilter({ open, handleOpen }) {
  const dispatch = useDispatch();
  const { filters } = useSelector((state) => state.product);
  return (
    <div className="relative w-72 mx-4 mb-2">
      <div className="bg-gray-300">
        <button
          className="w-full py-3 text-left px-5"
          onClick={() => {
            handleOpen("sort");
          }}
        >
          Sort By
        </button>
      </div>
      {open && (
        <div className="absolute w-full z-10 bg-gray-300 pb-3">
          <div className="w-full py-2 px-5">
            <input
              onChange={(e) =>
                dispatch(
                  setFilters({ value: e.target.value, name: e.target.name })
                )
              }
              checked={filters.sortBy === "highToLow"}
              className="w-4 h-4"
              type="radio"
              name="sortBy"
              value="highToLow"
              id="highToLow"
            />
            <label className="ml-2 uppercase text-gray-700" htmlFor="highToLow">
              Price High to Low
            </label>
          </div>
          <div className="w-full  py-2 px-5">
            <input
              onChange={(e) =>
                dispatch(
                  setFilters({ value: e.target.value, name: e.target.name })
                )
              }
              checked={filters.sortBy === "lowToHigh"}
              className="w-4 h-4"
              type="radio"
              name="sortBy"
              id="lowToHigh"
              value="lowToHigh"
            />
            <label className="ml-2 uppercase text-gray-700" htmlFor="lowToHigh">
              Price Low to High
            </label>
          </div>
        </div>
      )}
    </div>
  );
}
