import React from "react";
import CustomLink from "./CustomLink";

export default function CollectionCard({
  heading,
  subHeading,
  text,
  btnTxt,
  imgSrc,
  align,
}) {
  return (
    <div className="grid grid-cols-2 items-center">
      {align === "left" && (
        <div className="col-span-2 md:col-span-1">
          <img src={imgSrc} alt={heading} />
        </div>
      )}
      <div className="px-10 col-span-2 md:col-span-1 py-10">
        <h1 className="text-4xl font-semibold italic pb-3">{heading}</h1>
        <h3 className="text-2xl font-normal pb-4">{subHeading}</h3>
        <p className="text-sm font-medium pb-7 leading-relaxed">{text}</p>
        <div>
          <CustomLink to="/products">{btnTxt}</CustomLink>
        </div>
      </div>
      {align === "right" && (
        <div className="col-span-2 md:col-span-1">
          <img src={imgSrc} alt={heading} />
        </div>
      )}
    </div>
  );
}
