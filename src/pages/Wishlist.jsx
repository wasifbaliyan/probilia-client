import React from "react";
import WishlistItem from "../components/WishlistItem";

export default function Wishlist() {
  return (
    <div className="max-w-screen-xl mx-auto">
      <h1 className="uppercase italic text-2xl font-semibold text-center pt-5">
        My Wishlist ❤ - 3 Items
      </h1>
      <div className="flex flex-wrap justify-center">
        <WishlistItem />
        <WishlistItem />
        <WishlistItem />
        <WishlistItem />
        <WishlistItem />
        <WishlistItem />
      </div>
    </div>
  );
}
