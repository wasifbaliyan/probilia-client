import React, { useState } from "react";
import CustomLink from "../common/CustomLink";
import Bed from "../assets/bed.jpg";
import { getDiscountedPrice } from "../utils/getDiscountedPrice";
export default function Product({ product }) {
  const [hover, setHover] = useState(false);

  return (
    <div className="w-96 mx-4 mb-8">
      <div
        onMouseOver={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
        style={{ clipPath: "polygon(20% 0, 100% 0, 100% 100%, 0 97%, 0 27%)" }}
        className="py-12 px-12 bg-white relative"
      >
        <img src={Bed} alt="bed" />
        {hover && (
          <div className="absolute mx-auto top-2/4 left-20">
            <CustomLink to={`/products/${product._id}`}>
              View the product
            </CustomLink>
          </div>
        )}
      </div>

      <div className="py-4">
        <h2 className="text-2xl font-medium italic uppercase text-gray-900">
          {product.name}
        </h2>
        <h3 className="text-sm font-medium uppercase text-gray-700">
          {product.brand}
        </h3>
        <div className="flex">
          <p className="text-xl text-gray-800 font-medium">
            ${getDiscountedPrice(product)}
          </p>
          <p className="text-lg text-red-500 font-medium mx-2">
            {product.discount}%
          </p>
          <p className="text-lg text-gray-500 font-medium line-through">
            ${product.price}
          </p>
        </div>
      </div>
    </div>
  );
}
