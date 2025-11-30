import React, { useEffect } from "react";
import "./Home.scss";
import HealthCareInnovation from "@/components/healthCareInnovation/HealthCareInnovation.jsx";
import CompanyInfo from "@/components/companyInfo/CompanyInfo.jsx";
import ManufacturingExcellence from "@/components/manufacturingExcellence/ManufacturingExcellence.jsx";
import WhyChoose from "@/components/whyChoose/WhyChoose.jsx";
import Certifications from "@/components/certifications/Certifications.jsx";
import WorldClass from "@/components/worldClass/WorldClass.jsx";
import PartnerWithUs from "@/components/partnerWithUs/PartnerWithUs.jsx";
import "aos/dist/aos.css";
import AOS from "aos";

const Home = () => {
  useEffect(() => {
    AOS.init({});
  }, []);
  return (
    <div className={"home__content"}>
      <div className={"container"}>
        <div className={"home__content"}>
          <HealthCareInnovation />
          <CompanyInfo />
        </div>
      </div>
      <div className={"manufacturing__excellence"} data-aos={"fade-up"}>
        {/*<div className={"container"}>*/}
        <ManufacturingExcellence />
        {/*</div>*/}
      </div>
      <div className={"container"}>
        <WhyChoose />
      </div>
      <div className={"certification__wrapper"}>
        <Certifications />
      </div>
      <WorldClass />
      <PartnerWithUs />
    </div>
  );
};

export default Home;
