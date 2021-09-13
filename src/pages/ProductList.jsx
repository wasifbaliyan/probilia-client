import React from "react";
import Product from "../components/Product";

export default function ProductList() {
  return (
    <div className="max-w-screen-xl mx-auto py-10">
      <div className=" flex justify-between">
        <Product />
        <Product />
        <Product />
      </div>
    </div>
  );
}
