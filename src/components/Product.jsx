import React, { useState } from "react";
import CustomLink from "../common/CustomLink";
import Bed from "../assets/bed.jpg";
export default function Product() {
  const [hover, setHover] = useState(false);
  return (
    <div className="w-96">
      <div
        onMouseOver={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
        style={{ clipPath: "polygon(20% 0, 100% 0, 100% 100%, 0 97%, 0 27%)" }}
        className="py-12 px-12 bg-white relative"
      >
        {hover && (
          <div className="absolute top-2/4 left-20">
            <CustomLink to="/">View the product</CustomLink>
          </div>
        )}
        <img src={Bed} alt="bed" />
      </div>
      <div className="py-4">
        <h2 className="text-2xl font-medium italic uppercase text-gray-900">
          Carlyle
        </h2>
        <h3 className="text-base font-medium uppercase text-gray-700">
          fabric bed
        </h3>
        <p className="text-sm text-gray-800">
          Starting at{" "}
          <strong className="text-gray-900 text-sm font-medium">$1499</strong>
        </p>
      </div>
    </div>
  );
}
