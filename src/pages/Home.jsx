import React from "react";
import CollectionCard from "../common/CollectionCard";
import FeaturedCollection from "../components/FeaturedCollection";
import FeaturedCategories from "../components/FeaturedCategories";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div>
      <div className="relative w-full h-full flex justify-center items-center">
        <img
          src={`https://res.cloudinary.com/dnboldv5r/image/upload/v1631972351/probilia/ui/main_sofa_big_rbru0o.jpg`}
          alt="hero"
        />

        <button className="absolute text-3xl  bg-red-500 border-2 border-red-500 hover:border-red-400 transition-all hover:bg-red-400 text-white">
          <Link to="/products" className="py-4 px-16 block">
            Shop Now
          </Link>
        </button>
      </div>
      <FeaturedCollection />
      <div className="pb-8">
        <CollectionCard
          align={"left"}
          heading="SO-O-O SAVINGS, SO-O-O NOW"
          subHeading="For all tastes, at all prices"
          text="Until August 1st, get an additional 20% off all discontinued items.*"
          btnTxt="DECLUTTER, SAVE, BREATHE."
          imgSrc="https://res.cloudinary.com/dnboldv5r/image/upload/v1631972352/probilia/ui/sale_v0cxsk.jpg"
        />
      </div>
      <FeaturedCategories />
      <CollectionCard
        align={"right"}
        heading="SAVOIA MATTRESS"
        subHeading="Perfect down to the core"
        text="As a “dual-core” mattress, the Savoia contains two sides: one medium-firm and the other semi-soft, offering individualised comfort to each sleeper."
        btnTxt="FIND OUT MORE"
        imgSrc="https://res.cloudinary.com/dnboldv5r/image/upload/v1631973738/probilia/ui/5-Flexi_DESK_HP_MATRESS_hohlvv.jpg"
      />

      <CollectionCard
        align={"left"}
        heading="YELLOW AND GREY."
        subHeading="ANY DAY."
        text="Our 4 worlds of style get to grips with the most dynamic duo of the year, to bring color into your home."
        btnTxt="GET INSPIRED"
        imgSrc="https://res.cloudinary.com/dnboldv5r/image/upload/v1631972354/probilia/ui/main_sofa_casgbw.jpg"
      />
      <CollectionCard
        align={"right"}
        heading="SCANDINAVIAN, CANADIAN"
        subHeading="Our collection designed by local artisans"
        text="Practicality, clean lines, light- coloured wood: the Nicolas collection blends the inherent qualities of Scandinavian style with Canadian know-how."
        btnTxt="SHOP LOCAL"
        imgSrc="https://res.cloudinary.com/dnboldv5r/image/upload/v1631972358/probilia/ui/main_bed_zuuah3.jpg"
      />
    </div>
  );
}
