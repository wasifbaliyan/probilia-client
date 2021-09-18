import React, { useEffect } from "react";
import Product from "../components/Product";
import ProductFilters from "../components/ProductFilters";
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "../redux/productSlice";
export default function ProductList() {
  const dispatch = useDispatch();
  const { products, status } = useSelector((state) => state.product);
  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);

  return (
    <div className="max-w-screen-xl mx-auto py-10 ">
      <div className="mb-16">
        <ProductFilters />
      </div>
      {status === "loading" && <div>Loading...</div>}
      <div className=" flex justify-center flex-wrap">
        {status === "success" &&
          products.map((product) => (
            <Product key={product._id} product={product} />
          ))}
      </div>
    </div>
  );
}
