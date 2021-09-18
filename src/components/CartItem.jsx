import React from "react";
import { useDispatch } from "react-redux";
import { addToWishlist, removeFromCart } from "../api";
import Bed from "../assets/bed.jpg";
import { getCart } from "../redux/cartSlice";
import { getWishlist } from "../redux/wishlistSlice";

export default function CartItem({ product }) {
  const dispatch = useDispatch();
  const handleMoveToWishlist = async (id) => {
    await addToWishlist({ productId: id });

    const data = await removeFromCart({ productId: id });
    if (data) {
      dispatch(getCart());
      dispatch(getWishlist());
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
          <button className="border-2 font-medium border-gray-200  text-2xl w-10">
            -
          </button>
          <span className="border-2 border-gray-200 mx-4 w-10 flex items-center justify-center">
            1
          </span>
          <button className="border-2 font-medium  border-gray-200 text-2xl w-10">
            +
          </button>
        </div>
        <div className="mt-5">
          <button
            onClick={() => handleMoveToWishlist(product.productId._id)}
            className="uppercase text-sm font-medium bg-black text-white hover:border-red-500 hover:text-red-500 border-black border-2  hover:bg-white py-1 px-5 transition-all"
          >
            Move to wishlist
          </button>
        </div>
      </div>
    </div>
  );
}
