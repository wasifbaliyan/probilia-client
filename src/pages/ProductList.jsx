import React from "react";
import Product from "../components/Product";

export default function ProductList() {
  return (
    <div className=" flex justify-between">
      <Product />
      <Product />
      <Product />
    </div>
  );
}
