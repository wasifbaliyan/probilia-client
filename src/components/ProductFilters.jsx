import React, { useState } from "react";
import BrandFilter from "./BrandFilter";
import CategoryFilter from "./CategoryFilter";
import SortFilter from "./SortFilter";
import StockFilter from "./StockFilter";

export default function ProductFilters() {
  const [openSort, setOpenSort] = useState(false);
  const [openStock, setOpenStock] = useState(false);
  const [openCategory, setOpenCategory] = useState(false);
  const [openBrand, setOpenBrand] = useState(false);

  const handleOpen = (type) => {
    if (type === "sort") {
      setOpenSort(!openSort);
      setOpenCategory(false);
      setOpenBrand(false);
      setOpenStock(false);
    } else if (type === "category") {
      setOpenSort(false);
      setOpenCategory(!openCategory);
      setOpenBrand(false);
      setOpenStock(false);
    } else if (type === "brand") {
      setOpenSort(false);
      setOpenCategory(false);
      setOpenBrand(!openBrand);
      setOpenStock(false);
    } else if (type === "stock") {
      setOpenSort(false);
      setOpenCategory(false);
      setOpenBrand(false);
      setOpenStock(!openStock);
    } else {
      setOpenSort(false);
      setOpenCategory(false);
      setOpenBrand(false);
      setOpenStock(false);
    }
  };

  return (
    <div className="flex justify-center md:justify-evenly lg:justify-start flex-wrap">
      <CategoryFilter open={openCategory} handleOpen={handleOpen} />
      <BrandFilter open={openBrand} handleOpen={handleOpen} />
      <StockFilter open={openStock} handleOpen={handleOpen} />

      <SortFilter
        open={openSort}
        setOpen={setOpenSort}
        handleOpen={handleOpen}
      />
    </div>
  );
}
