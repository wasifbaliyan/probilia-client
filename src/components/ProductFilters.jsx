import React from "react";
import BrandFilter from "./BrandFilter";
import CategoryFilter from "./CategoryFilter";
import SortFilter from "./SortFilter";
import StockFilter from "./StockFilter";

export default function ProductFilters() {
  return (
    <div className="flex justify-center flex-wrap">
      <CategoryFilter />
      <BrandFilter />
      <StockFilter />
      <SortFilter />
    </div>
  );
}
