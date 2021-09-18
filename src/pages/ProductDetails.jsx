import React, { useEffect } from "react";
import Bed from "../assets/bed.jpg";
import { useDispatch, useSelector } from "react-redux";
import { getProductDetails } from "../redux/productSlice";
import { useParams } from "react-router-dom";
import { getDiscountedPrice } from "../utils/getDiscountedPrice";

export default function ProductDetails() {
  const dispatch = useDispatch();
  const { status, productDetails } = useSelector((state) => state.product);
  const { id } = useParams();
  useEffect(() => {
    dispatch(getProductDetails(id));
  }, [dispatch, id]);
  return (
    <div className="bg-white">
      {status === "loading" && <p>Loading...</p>}
      {status === "success" && (
        <div className="max-w-screen-xl mx-auto">
          <div className="flex justify-between pt-10 mb-5">
            <div>
              <h1 className="italic font-semibold text-3xl uppercase mb-3">
                {productDetails.brand}
              </h1>
              <h3 className="font-medium text-md uppercase">
                {productDetails.name}
              </h3>
              <h4 className="">A world of more wow</h4>
            </div>
            <div>
              <h2 className="font-medium text-3xl mb-3">
                ${getDiscountedPrice(productDetails)}
              </h2>
              <h3 className="font-medium text-lg line-through  text-gray-500">
                ${productDetails.price}
              </h3>
              <h1 className="font-medium text-xl text-red-500">
                {productDetails.discount}%
              </h1>
            </div>
          </div>
          <hr className="h-1 bg-gray-900" />
          <div className="grid grid-cols-3 gap-5 py-10">
            <div className="col-span-2 flex">
              <div>
                <div>
                  <img className="m-4 w-32" src={Bed} alt="bed" />
                </div>
                <div>
                  <img className="m-4 w-32" src={Bed} alt="bed" />
                </div>
                <div>
                  <img className="m-4 w-32" src={Bed} alt="bed" />
                </div>
              </div>
              <div className="mx-auto">
                <img src={Bed} alt="bed" />
              </div>
            </div>
            <div className="">
              <div>
                <h1 className="font-medium text-xl">Product Details</h1>
                <div className="flex justify-between py-3 mt-5">
                  <h3>ID</h3>
                  <p>{productDetails._id}</p>
                </div>
                <hr />
                <div className="flex justify-between py-3">
                  <h3>Availability</h3>
                  <p>
                    {productDetails.quantity > 0 ? "In Stock" : "Out Of Stock"}
                  </p>
                </div>
                <hr />
                <div className="flex justify-between py-3">
                  <h3>Category</h3>
                  <p>{productDetails.category}</p>
                </div>
                <hr />
                <div className="flex justify-between py-3">
                  <h3>Ratings</h3>
                  <p>{productDetails.rating} / 5</p>
                </div>
                <div className="mb-3 mt-10">
                  <button className="w-full uppercase text-sm font-medium hover:bg-red-500 hover:border-red-500 bg-black border-2 border-black text-white py-3 px-10 transition-all">
                    Add to cart
                  </button>
                </div>
                <div className="my-3">
                  <button className="w-full uppercase text-sm font-medium hover:text-red-500 hover:border-red-500 bg-white text-black border-black border-2  py-3 px-10 transition-all">
                    add to wishlist
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
