import React from "react";
import FeaturedCard from "./FeaturedCard";

export default function FeaturedCategories() {
  return (
    <div className="max-w-screen-xl mx-auto py-14">
      <div>
        <h1 className="text-center text-2xl pb-12">
          Furnishing a world of your own
        </h1>
      </div>
      <div className="grid grid-cols-4 gap-10">
        <FeaturedCard
          text="Comfort, coziness, raw materials and warm colours."
          title="NATURAL STYLE"
          src="https://res.cloudinary.com/dnboldv5r/image/upload/v1631972327/probilia/ui/cat_sofa_specpz.jpg"
        />
        <FeaturedCard
          text="Softness, refinement, fabrics and Scandinavian inspiration."
          title="EURO STYLE"
          src="https://res.cloudinary.com/dnboldv5r/image/upload/v1631972353/probilia/ui/cat_2_pi9qlf.jpg"
        />
        <FeaturedCard
          text="Bold, sophisticated and timeless materials"
          title="WOW STYLE"
          src="https://res.cloudinary.com/dnboldv5r/image/upload/v1631972357/probilia/ui/cat_3_plyui9.jpg"
        />
        <FeaturedCard
          text="Eclecticism, design, inspiration and creativity."
          title="SPONTANEOUS STYLE"
          src="https://res.cloudinary.com/dnboldv5r/image/upload/v1631972355/probilia/ui/cat_4_g6kg3l.jpg"
        />
      </div>
    </div>
  );
}
