import React, { useEffect } from "react";
import "./PartnerWithUs.scss";
import "aos/dist/aos.css";
import AOS from "aos";
const PartnerWithUs = () => {
  useEffect(() => {
    AOS.init({});
  }, []);
  return (
    <div className={"partnerWithUs"}>
      <div className={"partnerWithUs__content"} data-aos={"fade-up-lef"}>
        <div className={"partnerWithUs__content__title large"}>
          Ready to Partner With Us?
        </div>
        <div className={"partnerWithUs__content__description medium"}>
          Get in touch with our team to discuss your medical supply needs and
          discover how VITARO can support your healthcare facility.
        </div>
        <div className={"partnerWithUs__buttons"}>
          <button className={"partnerWithUs__button white"}>
            Contact Sales Team
          </button>
          <button className={"partnerWithUs__button darkOrange"}>
            Browse Catalog
          </button>
        </div>
      </div>
    </div>
  );
};

export default PartnerWithUs;
