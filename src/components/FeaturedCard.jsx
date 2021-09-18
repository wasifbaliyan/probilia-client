import React from "react";

export default function FeaturedCard({ src, title, text }) {
  return (
    <div className="col-span-4 sm:col-span-2 md:col-span-1 w-full">
      <div>
        <img className="w-full" src={src} alt={title} />
      </div>
      <h3 className="py-5 text-center">{title.toUpperCase()}</h3>
      <p className="font-medium text-sm text-center">{text}</p>
    </div>
  );
}
