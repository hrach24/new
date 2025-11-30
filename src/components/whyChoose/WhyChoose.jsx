import React, { useEffect } from "react";
import "./WhyChoose.scss";
import ShieldIcon from "@/assets/icons/shield.svg?react";
import GlobalIcon from "@/assets/icons/global.svg?react";
import RewardIcon from "@/assets/icons/reward.svg?react";
import "aos/dist/aos.css";
import AOS from "aos";
const WHY__CHOOSE = [
  {
    id: 1,
    title: "Quality Assurance",
    description:
      "All productsList meet international standards and certifications including ISO 13485, CE, and FDA approval.",
    icon: <ShieldIcon />,
  },
  {
    id: 2,
    title: "Global Reach",
    description:
      "Serving healthcare facilities in over 45 countries with reliable supply chains and logistics.",
    icon: <GlobalIcon />,
  },
  {
    id: 3,
    title: "Innovation Focus",
    description:
      "Continuous research and development to bring cutting-edge medical productsList to market.",
    icon: <RewardIcon />,
  },
];

const WhyChoose = () => {
  useEffect(() => {
    AOS.init({});
  }, []);
  return (
    <div className={"why__choose"}>
      <div className={"why__choose__title"}>Why Choose VITARO</div>
      <div className={"why__choose__description medium"}>
        Committed to excellence in every aspect of medical product manufacturing
      </div>
      <ul className={"why__choose__list"} data-aos={"fade-left"}>
        {WHY__CHOOSE.map((item) => (
          <li
            className={"why__choose__list__item"}
            id={item.id}
            data-aos={"fade-right"}
          >
            <div className={"why__choose__list__item__icon"}>{item.icon}</div>
            <div className={"why__choose__list__item__title medium"}>
              {item.title}
            </div>
            <div className={"why__choose__list__item__description small"}>
              {item.description}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default WhyChoose;
