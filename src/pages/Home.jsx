import React from "react";
import MainImage from "../assets/main_hero.jpg";
import CollectionCard from "../common/CollectionCard";
import FeaturedCollection from "../components/FeaturedCollection";
import PickUpImg from "../assets/pickup.jpg";
import DeliveryImg from "../assets/delivery_van.jpg";
import ReturnImg from "../assets/return_policy.jpg";

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
      <div className="max-w-screen-xl mx-auto py-14">
        <div className="grid grid-cols-4 gap-6">
          <div>
            <img src={PickUpImg} alt="free pick up from store" />
          </div>
          <div>
            <img src={DeliveryImg} alt="free and hassless delivery" />
          </div>
          <div>
            <img src={ReturnImg} alt="easy returns" />
          </div>
          <div>
            <img src={DeliveryImg} alt="free and hassless delivery" />
          </div>
        </div>
      </div>
      <CollectionCard
        align={"left"}
        heading="BUY NOW, PAY LATER…"
        subHeading="Flexible financing"
        text="Take advantage of our flexible, interest free, Flexiti financing plans to furnish your home sooner than later! Why wait? Our simplified application process is available online and in-stores."
        btnTxt="I'm interested"
        imgSrc="https://mobilia.ca/media/2021_HOMEPAGE/05_ROTIN_mondes/5-Flexi_DESK_HP_FLEXITI.jpg"
      />
    </div>
  );
}
