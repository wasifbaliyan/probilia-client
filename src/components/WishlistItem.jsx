import React, { useState } from "react";
import { toast } from "react-toastify";
import { useDispatch } from "react-redux";
import { addToCart, removeFromWishlist } from "../api";
import { getCart } from "../redux/cartSlice";
import { getWishlist } from "../redux/wishlistSlice";
import { getDiscountedPrice } from "../utils/getDiscountedPrice";
import { useHistory } from "react-router";

export default function WishlistItem({ product }) {
  const [wishStatus, setWishStatus] = useState("idle");
  const [cartStatus, setCartStatus] = useState("idle");
  const history = useHistory();

  const dispatch = useDispatch();
  const handleRemoveFromWishlist = async (id) => {
    try {
      setWishStatus("loading");

      const data = await removeFromWishlist({ productId: id });
      if (data) {
        setWishStatus("success");
        dispatch(getWishlist());
        toast.success("Item removed from wishlist");
      }
    } catch (error) {
      setWishStatus("failed");

      toast.error("Something went wrong. Please try again");
    }
  };
  const handleMoveToCart = async (id) => {
    try {
      setCartStatus("loading");
      await addToCart({ productId: id, item: 1 });
      const data = await removeFromWishlist({ productId: id });
      if (data) {
        setCartStatus("success");
        toast.success("Item moved to cart");

        dispatch(getCart());
        dispatch(getWishlist());
        history.push("/cart");
      }
    } catch (error) {
      setCartStatus("failed");

      toast.error("Something went wrong. Please try again");
    }
  };
  return (
    <figure className="w-64 py-10 mx-4">
      <img src={product.images[0]} alt="bed" className="w-full" />
      <figcaption className="uppercase italic text-xl font-semibold py-2">
        {product.name}
      </figcaption>
      <div className="flex justify-between">
        <h3 className="text-lg font-medium">₹{getDiscountedPrice(product)}</h3>
        <h4 className="text-lg font-medium text-red-500">
          {product.discount}%
        </h4>
      </div>
      <h3 className="uppercase pt-2 text-gray-700">{product.brand}</h3>
      <div className="my-3">
        <button
          onClick={() => handleMoveToCart(product._id)}
          className="w-full uppercase text-sm font-medium hover:bg-red-500 hover:border-red-500 bg-black border-2 border-black text-white py-3 px-10 transition-all"
        >
          {cartStatus === "loading" ? "Moving..." : "Move to cart"}
        </button>
      </div>
      <div className="my-3">
        <button
          onClick={() => handleRemoveFromWishlist(product._id)}
          className="w-full uppercase text-sm font-medium hover:text-red-500 hover:border-red-500 bg-white text-black border-black border-2  py-3 px-10 transition-all"
        >
          {wishStatus === "loading" ? "Removing..." : "Remove Item"}
        </button>
      </div>
    </figure>
  );
}
