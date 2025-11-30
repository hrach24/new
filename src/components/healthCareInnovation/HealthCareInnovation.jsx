import React, { useEffect } from "react";
import "./HealthCareInnovation.scss";
import innovationHealthCare from "@/assets/images/innovationHealth/innovationHealth.jpg";
import shield from "@/assets/icons/shield.svg";
import RightArrow from "@/assets/icons/arrow-right.svg?react";
import DownloadArrow from "@/assets/icons/download.svg?react";
import "aos/dist/aos.css";
import AOS from "aos";
const HealthCareInnovation = () => {
  useEffect(() => {
    AOS.init({});
  }, []);
  return (
    <div className={"healthCare__innovation"} data-aos="fade-down">
      <div className={"healthCare__innovation__info"}>
        <div className={"healthCare__innovation__info__trusted"}>
          Trusted Healthcare Solutions
        </div>
        <div className={"healthCare__innovation__info__title"}>
          Innovation in <span className={"colored"}>Healthcare Solutions</span>
        </div>
        <div className={"healthCare__innovation__info__description medium"}>
          VITARO Medical delivers premium medical and dental products to
          healthcare professionals worldwide. Quality, safety, and innovation in
          every product.
        </div>
        <div className={"healthCare__innovation__info__buttons"}>
          <button
            className={"healthCare__innovation__info__button orange small"}
          >
            Explore Products
            <span className={"right__arrow"}>
              <RightArrow />
            </span>
          </button>
          <button
            className={
              "healthCare__innovation__info__button healthCare__white__button small"
            }
          >
            <span className={"right__arrow"}>
              <DownloadArrow />
            </span>
            Download Catalog
          </button>
        </div>
      </div>
      <div className={"healthCare__innovation__img"}>
        <div className={"healthCare__innovation__img__wrapper"}>
          <img src={innovationHealthCare} alt={"innovationHealthCare"} />
        </div>
        <div className={"certified__iso"}>
          <div className={"certified__iso__shield"}>
            <img src={shield} alt={"shield"} />
          </div>
          <div className={"certified__iso__info"}>
            <div className={"certified__iso__info__title"}>ISO Certified</div>
            <div className={"certified__iso__info__description small"}>
              Quality Assured
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HealthCareInnovation;
