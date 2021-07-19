import React from "react";

export default function FeaturedCard({ src, title, text }) {
  return (
    <div>
      <div>
        <img src={src} alt={title} />
      </div>
      <h3 className="py-5 text-center">{title.toUpperCase()}</h3>
      <p className="font-medium text-sm text-center">{text}</p>
    </div>
  );
}
