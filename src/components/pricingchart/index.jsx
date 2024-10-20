import React from "react";
import PricingDetails from "../constants";
import PricingCard from "../pricingcard";
import "./index.css";

const PricingChart = () => {
  return (
    <div className="chart">
      {PricingDetails.map((card, index) => (
        <PricingCard
          key={index}
          title={card.title}
          price={card.price}
          oldPrice={card.oldPrice}
          features={card.features}
          buttonText={card.buttonText}
          isPrimary={card.isPrimary}
          indexy={index}
          extrafeatures={card.extrafeatures}
        />
      ))}
    </div>
  );
};

export default PricingChart;
