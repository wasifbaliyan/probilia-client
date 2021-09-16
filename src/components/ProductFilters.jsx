import React from "react";
import BrandFilter from "./BrandFilter";
import CategoryFilter from "./CategoryFilter";
import SortFilter from "./SortFilter";
import StockFilter from "./StockFilter";

export default function ProductFilters() {
  return (
    <div className="flex">
      <CategoryFilter />
      <BrandFilter />
      <StockFilter />
      <SortFilter />
    </div>
  );
}
