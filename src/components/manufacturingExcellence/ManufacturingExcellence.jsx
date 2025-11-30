import React from "react";
import "./ManufacturingExcellence.scss";
import RightSvg from "@/assets/icons/arrow-right.svg?react";

const EXCELLENCE_LIST = [
  {
    id: 1,
    number: "10,000+",
    title: "Sq. Meter Facility",
  },
  {
    id: 2,
    number: "23+",
    title: "Years Experience",
  },
  {
    id: 3,
    number: "100%",
    title: "Automated Quality",
  },
];

const ManufacturingExcellence = () => {
  return (
    <div className={"excellence__content"}>
      <div className={"manufacturing__excellence__title large"}>
        Precision Manufacturing Excellence
      </div>
      <div className={"manufacturing__excellence__description medium"}>
        Our 10,000+ square meter facility in Shanghai combines cutting-edge
        automation, precision robotics, and ISO-certified clean rooms to produce
        medical devices that exceed international quality standards.
      </div>
      <div className={"manufacturing__excellence__list"}>
        {EXCELLENCE_LIST.map((item) => (
          <div
            className={"manufacturing__excellence__list__item"}
            key={item.id}
          >
            <div className={"manufacturing__excellence__list__item__title"}>
              {item.number}
            </div>
            <div
              className={
                "manufacturing__excellence__list__item__description small"
              }
            >
              {item.title}
            </div>
          </div>
        ))}
      </div>
      <button className={"excellence__content__button small"}>
        <span>Explore Our Facility</span>
        <span className={"excellence__content__button__icon"}>
          <RightSvg />
        </span>
      </button>
    </div>
  );
};

export default ManufacturingExcellence;
