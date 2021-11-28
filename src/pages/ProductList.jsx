import React, { useEffect, Suspense } from "react";
// import Product from "../components/Product";
// import ProductFilters from "../components/ProductFilters";
import { useDispatch, useSelector } from "react-redux";
import Spinner from "../components/Spinner";
import { resetFilters } from "../redux/productSlice";
const ProductFilters = React.lazy(() => import("../components/ProductFilters"));
const Product = React.lazy(() => import("../components/Product"));

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
      <Suspense fallback={<Spinner />}>
        <div className="mb-16">
          <ProductFilters />
        </div>
        {status === "loading" && <Spinner />}
        <div className=" flex justify-center md:justify-around lg:justify-start flex-wrap">
          {status === "success" &&
            getSortedProducts(getFilteredProducts(products)).map((product) => (
              <Product key={product._id} product={product} />
            ))}
        </div>
      </Suspense>
    </div>
  );
}
