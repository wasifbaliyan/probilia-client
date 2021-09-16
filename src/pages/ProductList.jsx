import React from "react";
import Product from "../components/Product";
import ProductFilters from "../components/ProductFilters";

export default function ProductList() {
  return (
    <div className="max-w-screen-xl mx-auto py-10">
      <div className="mb-16">
        <ProductFilters />
      </div>
      <div className=" flex justify-between">
        <Product />
        <Product />
        <Product />
      </div>
    </div>
  );
}
