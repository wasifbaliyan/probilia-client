import React from "react";
import MainImage from "../assets/main_hero.jpg";
import CollectionCard from "../common/CollectionCard";
import FeaturedCollection from "../components/FeaturedCollection";
// import PickUpImg from "../assets/pickup.jpg";
// import DeliveryImg from "../assets/delivery_van.jpg";
// import ReturnImg from "../assets/return_policy.jpg";
import FeaturedCategories from "../components/FeaturedCategories";

export default function Home() {
  return (
    <div>
      <div>
        <img src={MainImage} alt="hero" />
      </div>
      <FeaturedCollection />
      <div className="pb-8">
        <CollectionCard
          align={"left"}
          heading="SO-O-O SAVINGS, SO-O-O NOW"
          subHeading="For all tastes, at all prices"
          text="Until August 1st, get an additional 20% off all discontinued items.*"
          btnTxt="DECLUTTER, SAVE, BREATHE."
          imgSrc="https://mobilia.ca/media/2021_HOMEPAGE/06_SOLDES_ete/FLEXI_DESK_SOLDES_HP_ete2021.jpg"
        />
      </div>
      <FeaturedCategories />
      <CollectionCard
        align={"right"}
        heading="SAVOIA MATTRESS"
        subHeading="Perfect down to the core"
        text="As a “dual-core” mattress, the Savoia contains two sides: one medium-firm and the other semi-soft, offering individualised comfort to each sleeper."
        btnTxt="FIND OUT MORE"
        imgSrc="https://mobilia.ca/media/2021_HOMEPAGE/05_ROTIN_mondes/5-Flexi_DESK_HP_MATRESS.jpg"
      />
      <CollectionCard
        align={"left"}
        heading="BUY NOW, PAY LATER…"
        subHeading="Flexible financing"
        text="Take advantage of our flexible, interest free, Flexiti financing plans to furnish your home sooner than later! Why wait? Our simplified application process is available online and in-stores."
        btnTxt="I'm interested"
        imgSrc="https://mobilia.ca/media/2021_HOMEPAGE/05_ROTIN_mondes/5-Flexi_DESK_HP_FLEXITI.jpg"
      />
      <CollectionCard
        align={"right"}
        heading="A CLASSIC IS BACK!"
        subHeading="Available for pre-order and in three colours"
        text="Choose a comfortable, modern and versatile leather sofa!"
        btnTxt="I'LL GO WITH ROCKLAND"
        imgSrc="https://mobilia.ca/media/2021_HOMEPAGE/05_ROTIN_mondes/DESK_Rockland_Flexi_Priscilla.jpg"
      />
      <CollectionCard
        align={"left"}
        heading="YELLOW AND GREY."
        subHeading="ANY DAY."
        text="Our 4 worlds of style get to grips with the most dynamic duo of the year, to bring color into your home."
        btnTxt="GET INSPIRED"
        imgSrc="https://mobilia.ca/media/2021_HOMEPAGE/04_CAMPAGNE_PRINTEMPS_MONDES/PRINTEMPS_2/Flexi_DESK_PANTONE_no.text.jpg"
      />
      <CollectionCard
        align={"right"}
        heading="SCANDINAVIAN, CANADIAN"
        subHeading="Our collection designed by local artisans"
        text="Practicality, clean lines, light- coloured wood: the Nicolas collection blends the inherent qualities of Scandinavian style with Canadian know-how."
        btnTxt="SHOP LOCAL"
        imgSrc="https://mobilia.ca/media/2021_HOMEPAGE/04_CAMPAGNE_PRINTEMPS_MONDES/PRINTEMPS_2/Flexi_DESK_Nicholas.jpg"
      />
    </div>
  );
}
