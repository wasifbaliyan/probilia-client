import React from "react";
import WishlistItem from "../components/WishlistItem";

export default function Wishlist() {
  return (
    <div className="max-w-screen-xl mx-auto pb-10">
      <h1 className="uppercase italic text-3xl font-medium text-center py-10">
        My Wishlist ❤ - 3 Items
      </h1>
      <hr />
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
