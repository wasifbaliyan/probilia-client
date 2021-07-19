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
          src="https://mobilia.ca/media/2021_HOMEPAGE/05_ROTIN_mondes/3-DESK_4COL_NATURAL.jpg"
        />
        <FeaturedCard
          text="Softness, refinement, fabrics and Scandinavian inspiration."
          title="EURO STYLE"
          src="https://mobilia.ca/media/2021_HOMEPAGE/05_ROTIN_mondes/3-DESK_4COL_EURO.jpg"
        />
        <FeaturedCard
          text="Bold, sophisticated and timeless materials"
          title="WOW STYLE"
          src="https://mobilia.ca/media/2021_HOMEPAGE/05_ROTIN_mondes/3-DESK_4COL_WOW.jpg"
        />
        <FeaturedCard
          text="Eclecticism, design, inspiration and creativity."
          title="SPONTANEOUS STYLE"
          src="https://mobilia.ca/media/2021_HOMEPAGE/05_ROTIN_mondes/3-DESK_4COL_SPONTANE.jpg"
        />
      </div>
    </div>
  );
}
