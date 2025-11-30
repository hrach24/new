import React, { useEffect } from "react";
import "./Certifications.scss";
import CompletedIcon from "@/assets/icons/completed.svg?react";
import "aos/dist/aos.css";
import AOS from "aos";
const Certifications = () => {
  useEffect(() => {
    AOS.init({});
  }, []);
  return (
    <div className={"container"}>
      <div className={"certification__content"}>
        <div className={"certification__title large"}>
          Certifications & Standards
        </div>
        <div className={"certification__description medium"}>
          Our commitment to quality is reflected in our certifications
        </div>
        <ul className={"certification__list"} data-aos={"fade-right"}>
          <li className={"certification__list__item"} data-aos={"fade-top"}>
            <div className={"certification__list__item__icon"}>
              <CompletedIcon />
            </div>
            <div className={"certification__list__item__text small"}>
              ISO 13485:2016
            </div>
          </li>
          <li className={"certification__list__item"} data-aos={"fade-top"}>
            <div className={"certification__list__item__icon"}>
              <CompletedIcon />
            </div>
            <div className={"certification__list__item__text"}>
              ISO 13485:2016
            </div>
          </li>
          <li className={"certification__list__item"} data-aos={"fade-top"}>
            <div className={"certification__list__item__icon"}>
              <CompletedIcon />
            </div>
            <div className={"certification__list__item__text"}>
              ISO 13485:2016
            </div>
          </li>
          <li className={"certification__list__item"} data-aos={"fade-top"}>
            <div className={"certification__list__item__icon"}>
              <CompletedIcon />
            </div>
            <div className={"certification__list__item__text"}>
              ISO 13485:2016
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Certifications;
