import React from "react";

export default function OrderItem({ product }) {
  return (
    <div className="flex py-3 items-center">
      <figure className="w-32 mr-4">
        <img
          className="w-full"
          src={product.productId.images[0]}
          alt={product.productId.name}
        />
      </figure>
      <div>
        <h2 className="font-medium">{product.productId.name}</h2>
        <p className="text-sm uppercase text-gray-700">
          {product.productId.brand}
        </p>
        <p className="text-sm font-medium"> Quantity: {product.item}</p>
      </div>
    </div>
  );
}
