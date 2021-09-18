import React from "react";

export default function FeaturedCollection() {
  return (
    <div className="grid grid-cols-3 gap-5 py-8">
      <div className="col-span-3 md:col-span-1">
        <img
          src={`https://res.cloudinary.com/dnboldv5r/image/upload/v1631972335/probilia/ui/feat_1_ef0cbk.jpg`}
          alt="collection one"
        />
      </div>
      <div className="col-span-3 md:col-span-1">
        <img
          src={`https://res.cloudinary.com/dnboldv5r/image/upload/v1631972351/probilia/ui/feat_2_t8axgt.jpg`}
          alt="collection two"
        />
      </div>
      <div className="col-span-3 md:col-span-1">
        <img
          src={`https://res.cloudinary.com/dnboldv5r/image/upload/v1631972339/probilia/ui/feat_3_riilop.jpg`}
          alt="collection three"
        />
      </div>
    </div>
  );
}
