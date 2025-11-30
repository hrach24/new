import React, { useEffect } from "react";
import "./ContactU.scss";
import LocationSvg from "@/assets/icons/location.svg?react";
import PhoneSvg from "@/assets/icons/phone.svg?react";
import HoursSvg from "@/assets/icons/hours.svg?react";
import "aos/dist/aos.css";
import AOS from "aos";
const CONTACT__LIST = [
  {
    id: 1,
    title: "Address",
    description:
      "Plot 12, Unit A, North Ridge Industrial Park, No. 3 Hengshan Road, Jiading District, Shanghai 201800, China",
    icon: <LocationSvg />,
  },
  {
    id: 2,
    title: "Address",
    description:
      "Incheon Factory Zone 145 Namdong Industrial Complex, Namdong-gu, Incheon 21632 Vitaro Manufacturing Co., Ltd. Republic of Korea",
    icon: <LocationSvg />,
  },
  {
    id: 3,
    title: "Phone",
    description: "+86 21 6798 1203, +82-32-821-4570",
    icon: <PhoneSvg />,
  },
  {
    id: 4,
    title: "Email",
    description: "info@myvitaro.com",
    icon: <LocationSvg />,
  },
  {
    id: 5,
    title: "Business Hours",
    description: "Monday - Friday: 9:00 AM - 6:00 PM (CST)",
    icon: <HoursSvg />,
  },
];

const ContactUs = () => {
  useEffect(() => {
    AOS.init({});
  }, []);
  return (
    <div className={"contactUs"}>
      <div className={"container"}>
        <div className={"contactUs__content"} data-aos={"fade-down"}>
          <div className={"contactUs__title large"}>Contact Us</div>
          <div className={"contactUs__description medium"}>
            Get in touch with our team for inquiries, support, or partnership
            opportunities
          </div>
          <ul className={"contactUs__list"} data-aos={"fade-left"}>
            {CONTACT__LIST.map((item) => (
              <li className={"contactUs__list__item"} key={item.id}>
                <div className={"contactUs__list__item__icon"}>{item.icon}</div>
                <div className={"contactUs__list__item__title"}>
                  {item.title}
                </div>
                <div className={"contactUs__list__item__description"}>
                  {item.description}
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
