import React from "react";
import CollectionOne from "../assets/feat_1.jpg";
import CollectionTwo from "../assets/feat_2.jpg";
import CollectionThree from "../assets/feat_3.jpg";
export default function FeaturedCollection() {
  return (
    <div className="grid grid-cols-3 gap-5 py-8">
      <div>
        <img src={CollectionOne} alt="collection one" />
      </div>
      <div>
        <img src={CollectionTwo} alt="collection two" />
      </div>
      <div>
        <img src={CollectionThree} alt="collection three" />
      </div>
    </div>
  );
}
