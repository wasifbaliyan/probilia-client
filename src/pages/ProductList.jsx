import React, { useEffect } from "react";
import Product from "../components/Product";
import ProductFilters from "../components/ProductFilters";
import { useDispatch, useSelector } from "react-redux";
import { resetFilters } from "../redux/productSlice";
export default function ProductList() {
  const dispatch = useDispatch();
  const { products, status, filters } = useSelector((state) => state.product);

  const getSortedProducts = (products) => {
    const newProducts = [...products];
    if (filters.sortBy === "highToLow") {
      return newProducts.sort((a, b) => b.price - a.price);
    } else if (filters.sortBy === "lowToHigh") {
      newProducts.sort((a, b) => a.price - b.price);
    }
    return newProducts;
  };

  const getFilteredProducts = (products) => {
    const newProducts = [...products];
    if (filters.brand.length !== 0) {
      return newProducts.filter((product) => {
        return filters.brand.includes(product.brand);
      });
    } else if (filters.category.length !== 0) {
      return newProducts.filter((product) => {
        return filters.category.includes(product.category);
      });
    } else if (filters.stock.length !== 0) {
      return newProducts.filter((product) => {
        return filters.stock.includes(product.stock ? "inStock" : "outStock");
      });
    }
    return newProducts;
  };

  useEffect(() => {
    return () => {
      dispatch(resetFilters());
    };
  }, [dispatch]);

  return (
    <div className="max-w-screen-xl mx-auto py-10 ">
      <div className="mb-16">
        <ProductFilters />
      </div>
      {status === "loading" && <div>Loading...</div>}
      <div className=" flex justify-center md:justify-around lg:justify-start flex-wrap">
        {status === "success" &&
          getSortedProducts(getFilteredProducts(products)).map((product) => (
            <Product key={product._id} product={product} />
          ))}
      </div>
    </div>
  );
}
