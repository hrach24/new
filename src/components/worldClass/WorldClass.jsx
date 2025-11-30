import React from "react";
import "./WorldClass.scss";
import ShieldIcon from "@/assets/icons/shield.svg?react";
import GlobalIcon from "@/assets/icons/global.svg?react";
import RewardIcon from "@/assets/icons/reward.svg?react";
import worldClass from "@/assets/images/worldClass/world-class.webp";
const WORLD__CLASS = [
  {
    id: 1,
    title: "ISO Certified",
    description: "Multiple international certifications",
    icon: <ShieldIcon />,
  },
  {
    id: 2,
    title: "Quality Assured",
    description: "Rigorous testing at every stage",
    icon: <GlobalIcon />,
  },
  {
    id: 3,
    title: "Innovation Focus",
    description: "Serving 45+ countries worldwide",
    icon: <RewardIcon />,
  },
];

const WorldClass = () => {
  return (
    <div className={"worldClass"}>
      <div className={"worldClass__content"}>
        <div className={"worldClass__title large"}>
          World-Class Manufacturing Facility
        </div>
        <div className={"worldClass__description medium"}>
          Located in Shanghai, China, our state-of-the-art 10,000 sqm facility
          produces premium medical and dental equipment with advanced technology
          and rigorous quality control.
        </div>
        <ul className={"worldClass__list"}>
          {WORLD__CLASS.map((item) => (
            <li
              className={"worldClass__list__item"}
              key={item.id}
              data-aos={"fade-down"}
            >
              <div className={"worldClass__list__item__icon"}>{item.icon}</div>
              <div className={"worldClass__list__item__title"}>
                {item.title}
              </div>
              <div className={"worldClass__list__item__description"}>
                {item.description}
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default WorldClass;
