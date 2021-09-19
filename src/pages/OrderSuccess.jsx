import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

export default function OrderSuccess() {
  const { user } = useSelector((state) => state.auth);

  return (
    <div className="max-w-screen-xl mx-auto py-20 text-center">
      <h3 className="pb-2 text-lg font-medium">
        Congratulations, {user.name}!
      </h3>
      <p>Your order has been placed successfully.</p>
      <div className="mt-8">
        <Link
          to="/my-account"
          className="px-5 uppercase text-sm w-full py-2 hover:bg-red-400 transition-all hover:border-red-400 bg-red-500 border-2 border-red-500 text-white"
        >
          View Orders
        </Link>
      </div>
    </div>
  );
}
