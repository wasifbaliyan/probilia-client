import React, { useEffect } from "react";

import WishlistItem from "../components/WishlistItem";
import { useDispatch, useSelector } from "react-redux";
import { getWishlist } from "../redux/wishlistSlice";
export default function Wishlist() {
  const dispatch = useDispatch();
  const { status, wishlist } = useSelector((state) => state.wishlist);

  useEffect(() => {
    dispatch(getWishlist());
  }, [dispatch]);

  return (
    <div className="max-w-screen-xl mx-auto pb-10 pt-10">
      {status === "loading" && "Loading..."}
      {status === "success" && (
        <div>
          <h1 className="uppercase italic text-3xl font-medium text-center py-10">
            My Wishlist ❤ -{" "}
            <span className="text-red-500 font-semibold">
              {wishlist.products.length}
            </span>{" "}
            Items
          </h1>
          <hr />
          <div className="flex flex-wrap justify-center">
            {wishlist.products.map((product) => (
              <WishlistItem key={product._id} product={product} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
