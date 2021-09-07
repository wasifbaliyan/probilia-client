import React from "react";
import { Link } from "react-router-dom";

export default function CustomLink({ to, children }) {
  return (
    <Link
      className="uppercase text-sm font-medium hover:bg-red-500 bg-black text-white py-3 px-10 transition-all"
      to={to}
    >
      {children}
    </Link>
  );
}
