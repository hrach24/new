import React, { useEffect } from "react";
import "./Company.scss";
import "aos/dist/aos.css";
import AOS from "aos";
const COMPANY_INFO = [
  { id: 1, number: "23+", title: "Years Experience" },
  { id: 2, number: "45+", title: "Countries Served" },
  { id: 3, number: "500+", title: "Healthcare Partners" },
  { id: 4, number: "100%", title: "Quality Guaranteed" },
];

const CompanyInfo = () => {
  useEffect(() => {
    AOS.init({});
  }, []);
  return (
    <div className={"company__info"} data-aos="fade-up">
      <ul className={"company__info__list"}>
        {COMPANY_INFO.map((item) => (
          <li className={"company__info__list__item"} data-aos="fade-left">
            <div className={"company__info__list__item__number large"}>
              {item.number}
            </div>
            <div className={"company__info__list__item__title medium"}>
              {item.title}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CompanyInfo;
