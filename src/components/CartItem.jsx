import React, { useState } from "react";
import { toast } from "react-toastify";
import { useDispatch } from "react-redux";
import { addToCart, addToWishlist, removeFromCart } from "../api";
import { getCart } from "../redux/cartSlice";
import { getWishlist } from "../redux/wishlistSlice";

export default function CartItem({ product }) {
  const [wishStatus, setWishStatus] = useState("idle");

  const dispatch = useDispatch();
  const handleMoveToWishlist = async (id) => {
    try {
      setWishStatus("loading");

      await addToWishlist({ productId: id });
      toast.success("Item moved to wishlist");

      setWishStatus("success");
      const data = await removeFromCart({ productId: id });
      if (data) {
        dispatch(getCart());
        dispatch(getWishlist());
      }
    } catch (error) {
      setWishStatus("failed");
      toast.error("Something went wrong. Please try again");
    }
  };

  const handleAddProduct = async (id) => {
    try {
      const data = await addToCart({ productId: id, item: 1 });
      if (data) {
        toast.success("Item quantity updated");
        dispatch(getCart());
      }
    } catch (error) {
      toast.error("Something went wrong. Please try again");
    }
  };
  const handleRemoveProduct = async (id) => {
    try {
      const data = await removeFromCart({ productId: id, item: 1 });
      if (data) {
        toast.success("Item quantity updated");
        dispatch(getCart());
      }
    } catch (error) {
      toast.error("Something went wrong. Please try again");
    }
  };

  return (
    <div className="flex py-3 items-center">
      <figure className="w-32 mr-4">
        <img className="w-full" src={product.productId.images[0]} alt="bed" />
      </figure>
      <div>
        <h2 className="font-medium">{product.productId.name}</h2>
        <p className="text-sm uppercase text-gray-700">
          {product.productId.brand}
        </p>
        <div className="flex my-3">
          <button
            onClick={() => handleRemoveProduct(product.productId._id)}
            className="border-2 font-medium border-gray-200  text-2xl w-10 flex items-center justify-center"
          >
            {product.item === 1 ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                class="bi bi-trash"
                viewBox="0 0 16 16"
              >
                <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z" />
                <path
                  fill-rule="evenodd"
                  d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"
                />
              </svg>
            ) : (
              "-"
            )}
          </button>
          <span className="border-2 border-gray-200 mx-4 w-10 flex items-center justify-center">
            {product.item}
          </span>
          <button
            onClick={() => handleAddProduct(product.productId._id)}
            className="border-2 font-medium  border-gray-200 text-2xl w-10"
          >
            +
          </button>
        </div>
        <div className="mt-5">
          <button
            onClick={() => handleMoveToWishlist(product.productId._id)}
            className="uppercase text-sm font-medium bg-black text-white hover:border-red-500 hover:text-red-500 border-black border-2  hover:bg-white py-1 px-5 transition-all"
          >
            {wishStatus === "loading" ? "Moving..." : "Move to wishlist"}
          </button>
        </div>
      </div>
    </div>
  );
}
