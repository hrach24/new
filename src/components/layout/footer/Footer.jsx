import React from "react";
import "./Footer.scss";
import TelegramSvg from "@/assets/icons/telegram.svg?react";
import logo from "@/assets/images/header/logo.webp";
import EmailSvg from "@/assets/icons/email.svg?react";
import LocationSvg from "@/assets/icons/location.svg?react";
import PhoneSvg from "@/assets/icons/Phone.svg?react";
import { Link } from "react-router-dom";
const FOOTER_LIST = [
  {
    id: 1,
    title: "Quick Links",
    linksArr: [
      {
        id: "1.1",
        title: "Products",
        link: "/productsList",
      },
      {
        id: "1.2",
        title: "News & Updates",
        link: "/news",
      },
      {
        id: "1.3",
        title: "Contact",
        link: "/contact",
      },
    ],
  },
  {
    id: 2,
    title: "Product Categories",
    linksArr: [
      {
        id: "2.1",
        title: "Medical Gloves",
        link: "/medical-gloves",
      },
      {
        id: "2.2",
        title: "Face Masks",
        link: "/face-masks",
      },
      {
        id: "2.3",
        title: "Disposable Materials",
        link: "/disposable-materials",
      },
      {
        id: "2.3",
        title: "Dental Equipment",
        link: "/dental-equipment",
      },
    ],
  },
  {
    id: 3,
    title: "Contact Us",
    linksArr: [
      {
        id: "3.1",
        title:
          "Plot 12, Unit A, North Ridge Industrial Park, No. 3 Hengshan Road, Jiading District, Shanghai 201800, China",
        icon: <LocationSvg />,
      },
      {
        id: "3.2",
        title:
          "Incheon Factory Zone 145 Namdong Industrial Complex, Namdong-gu, Incheon 21632 Vitaro Manufacturing Co., Ltd. Republic of Korea",
        icon: <LocationSvg />,
      },
      {
        id: "3.3",
        title: "+86 21 6798 1203, +82-32-821-4570",
        icon: <PhoneSvg />,
      },
      {
        id: "3.3",
        title: "info@myvitaro.com",
        icon: <EmailSvg />,
      },
    ],
  },
];

const Footer = () => {
  return (
    <div className={"footer"}>
      <div className={"footer__stayUpdated"}>
        <div className={"footer__stayUpdated__title"}>Stay Updated</div>
        <div className={"footer__stayUpdated__description"}>
          Subscribe to our newsletter for the latest news and product updates
        </div>
        {/*<div className={"footer__subscribe"}>*/}
        {/*  <div className={"email__wrapper"}>*/}
        {/*    <div className={"email__svgWrapper"}>*/}
        {/*      <EmailSvg />*/}
        {/*    </div>*/}
        {/*    <input*/}
        {/*      type="text"*/}
        {/*      className={"email__input"}*/}
        {/*      placeholder={"Enter your email"}*/}
        {/*    />*/}
        {/*  </div>*/}
        {/*  <button className={"footer__subscribe__button"}>*/}
        {/*    <span className={"footer__subscribe__button__icon"}>*/}
        {/*      <TelegramSvg />*/}
        {/*    </span>*/}
        {/*    <span>Subscribe</span>*/}
        {/*  </button>*/}
        {/*</div>*/}
      </div>
      <div className={"footer__links"}>
        <div className={"container"}>
          <div className={"footer__quickLinks__list"}>
            <div className={"footer__quickLinks__list__item"}>
              <div className={"company__logo"}>
                <img src={logo} alt={"logo"} />
              </div>
              <div className={"footer__quickLinks__list__item__description"}>
                Leading manufacturer of high-quality medical and dental
                products. Chinese-Korean joint venture committed to healthcare
                excellence and innovation.
              </div>
            </div>

            {FOOTER_LIST.map((item) => (
              <div className={"footer__quickLinks__list__item"} key={item.id}>
                <div className={"footer__quickLinks__list__item__title"}>
                  {item.title}
                </div>
                <ul className={"footer__quickLinks__list__item__list"}>
                  {item.linksArr.map((link) => (
                    <li className={"list__item"} key={link.id}>
                      {link.icon && (
                        <div className={"list__item__icon"}>{link.icon}</div>
                      )}

                      <a
                        className={"list__item__link"}
                        href={link.link && link.link}
                      >
                        {link.title}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className={"privacy__policy"}>
        <div className={"container"}>
          <div className={"privacy__policy__content small"}>
            <div className={"reserved__rights"}>
              © 2025 VITARO Medical. All rights reserved
            </div>
            <div className={"privacy__policyLinks"}>
              <Link className={"privacy__policy__link"} to={"privacy-policy"}>
                Privacy Policy
              </Link>
              <Link className={"privacy__policy__link"} to={"privacy-policy"}>
                Terms of Service
              </Link>
              <Link className={"privacy__policy__link"} to={"privacy-policy"}>
                Cookie Policy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
