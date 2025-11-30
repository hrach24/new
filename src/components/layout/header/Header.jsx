import React, { useState } from "react";
import "./Header.scss";
import logo from "@/assets/images/header/logo.webp";
import usa from "@/assets/images/header/usa-flag.webp";
import MenuBurgerSvg from "@/assets/icons/menu-burger.svg?react";
import CloseIconSvg from "@/assets/icons/close-icon.svg?react";
import LanguageDropDown from "@/components/languageDropDown/LanguageDropDown.jsx";
import { Link, useLocation } from "react-router-dom";
import classNames from "classnames";
import { HEADER__LINKS } from "@/utils/headerLinks.js";
import MobileMenu from "@/components/mobileMenu/MobileMenu.jsx";

const Header = () => {
  const location = useLocation();
  const [openLanguage, setOpenLanguage] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [defaultLanguage, setDefaultLanguage] = useState({
    title: "EN",
    img: usa,
  });
  return (
    <div className={"header"}>
      <div className={"container"}>
        <div className={"header__content"}>
          <Link className={"header__logo"} to={"/"}>
            <img src={logo} alt={"header__logo"} />
          </Link>
          <ul className={"header__ist"}>
            {HEADER__LINKS.map((item) => (
              <li
                className={classNames("header__ist__item", {
                  active__link: item.route === location.pathname,
                })}
              >
                <Link className={"header__ist__link"} to={item.route}>
                  {item.title}
                </Link>
              </li>
            ))}
          </ul>
          <div className={"header__language"}>
            <div
              className={"language__wrapper"}
              onClick={() => setOpenLanguage(true)}
            >
              <div className={"language"}>{defaultLanguage.title}</div>
              <div className={"flag"}>
                <img src={defaultLanguage.img} alt={"lang_flag"} />
              </div>
            </div>
            <Link to={"/contact-us"} className={"getInTouchButton"}>
              Get in Touch
            </Link>
            <div
              className={"menu__burger"}
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <CloseIconSvg /> : <MenuBurgerSvg />}
            </div>
            {openLanguage && (
              <LanguageDropDown
                setOpenLanguage={setOpenLanguage}
                setDefaultLanguage={setDefaultLanguage}
              />
            )}
          </div>
        </div>
      </div>
      {mobileMenuOpen && <MobileMenu setMobileMenuOpen={setMobileMenuOpen} />}
    </div>
  );
};

export default Header;
