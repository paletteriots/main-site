import React  from "react";
import PortFolioCard from "./PortFolioCard";
import constants, { PortFolio } from "@/utility/constants";
const Portfolio = () => {
  const { portfolio } = constants;

  const cards = [
    ...portfolio,
    ...portfolio,
    ...portfolio,
    ...portfolio,
    ...portfolio,
    ...portfolio,
    ...portfolio,
    ...portfolio,
    ...portfolio,
    ...portfolio,
    ...portfolio,
  ];

  return (
    <div id='portfolio' className="w-full h-fit relative mt-[30px] md:mt-[80px] lg:mt-[174px] overflow-hidden">
      <div className="heading">
        <h2 className="font-outfit font-medium">
          Designs That Speak for Themselves
        </h2>
        <h2 className="font-outfit font-medium ">
          <span className="gradient-bg text-bg">Our works</span>
        </h2>
      </div>
      <div className="w-fit h-auto mt-[100px] flex items-center gap-5 card-animation">
        {cards.map((eachPortFolio, index) => (
          <PortFolioCard
            key={index}
            image={eachPortFolio.image}
            title={eachPortFolio.title}
            subTitle={eachPortFolio.subTitle}
            tags={eachPortFolio.tags}
            className="slide-animation"
          />
        ))}
      </div>
    </div>
  );
};

export default Portfolio;
