import React from "react";
import { useDispatch } from "react-redux";
import { removeFromWishlist } from "../api";
import Bed from "../assets/bed.jpg";
import { getWishlist } from "../redux/wishlistSlice";
import { getDiscountedPrice } from "../utils/getDiscountedPrice";

export default function WishlistItem({ product }) {
  const dispatch = useDispatch();
  const handleRemoveFromWishlist = async (id) => {
    const data = await removeFromWishlist({ productId: id });
    if (data) {
      dispatch(getWishlist());
    }
  };
  return (
    <figure className="w-64 py-10 mx-4">
      <img src={Bed} alt="bed" className="w-full" />
      <figcaption className="uppercase italic text-xl font-semibold py-2">
        {product.name}
      </figcaption>
      <div className="flex justify-between">
        <h3 className="text-lg font-medium">${getDiscountedPrice(product)}</h3>
        <h4 className="text-lg font-medium text-red-500">
          {product.discount}%
        </h4>
      </div>
      <h3 className="uppercase pt-2 text-gray-700">{product.brand}</h3>
      <div className="my-3">
        <button className="w-full uppercase text-sm font-medium hover:bg-red-500 hover:border-red-500 bg-black border-2 border-black text-white py-3 px-10 transition-all">
          Move to cart
        </button>
      </div>
      <div className="my-3">
        <button
          onClick={() => handleRemoveFromWishlist(product._id)}
          className="w-full uppercase text-sm font-medium hover:text-red-500 hover:border-red-500 bg-white text-black border-black border-2  py-3 px-10 transition-all"
        >
          Remove Item
        </button>
      </div>
    </figure>
  );
}
