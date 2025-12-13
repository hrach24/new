import React, { useState, useEffect } from "react"; // ADD useEffect import
import "./Header.scss";
import logo from "@/assets/images/header/logo.webp";
import usa from "@/assets/images/header/usa-flag.webp";
import chineseFlag from "@/assets/images/header/chinese-flag.webp"; // ADD this import
import koreanFlag from "@/assets/images/header/korean-flag.webp"; // ADD this import
import MenuBurgerSvg from "@/assets/icons/menu-burger.svg?react";
import CloseIconSvg from "@/assets/icons/close-icon.svg?react";
import LanguageDropDown from "@/components/languageDropDown/LanguageDropDown.jsx";
import { Link, useLocation } from "react-router-dom";
import classNames from "classnames";
import { HEADER__LINKS } from "@/utils/headerLinks.js";
import MobileMenu from "@/components/mobileMenu/MobileMenu.jsx";
import { useTranslation } from "react-i18next"; // ADD this import

const Header = () => {
  const location = useLocation();
  const { i18n } = useTranslation(); // ADD this line
  const [openLanguage, setOpenLanguage] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [defaultLanguage, setDefaultLanguage] = useState({
    title: "EN",
    img: usa,
  });

  // ADD this useEffect to load saved language on page load
  useEffect(() => {
    // Get saved language from localStorage
    const savedLanguage = localStorage.getItem("i18nextLng");

    if (savedLanguage) {
      // Update flag based on saved language
      if (savedLanguage === "zh") {
        setDefaultLanguage({ title: "CN", img: chineseFlag });
      } else if (savedLanguage === "kr") {
        setDefaultLanguage({ title: "KR", img: koreanFlag });
      } else {
        // Default to English
        setDefaultLanguage({ title: "EN", img: usa });
      }
    }

    // Optional: Listen for language changes from other components
    const handleLanguageChange = () => {
      const currentLang =
        i18n.language || localStorage.getItem("i18nextLng") || "en";
      if (currentLang === "zh") {
        setDefaultLanguage({ title: "CN", img: chineseFlag });
      } else if (currentLang === "kr") {
        setDefaultLanguage({ title: "KR", img: koreanFlag });
      } else {
        setDefaultLanguage({ title: "EN", img: usa });
      }
    };

    // Listen for i18n language changes
    i18n.on("languageChanged", handleLanguageChange);

    // Cleanup
    return () => {
      i18n.off("languageChanged", handleLanguageChange);
    };
  }, [i18n]);

  return (
    <div className={"header"}>
      <div className={"container"}>
        <div className={"header__content"}>
          <Link className={"header__logo"} to={"/"}>
            <img src={logo} alt={"header__logo"} />
          </Link>
          <ul className={"header__ist"}>
            {HEADER__LINKS.map((item) => (
              <li className={"header__ist__item"}>
                <Link
                  className={classNames("header__ist__link", {
                    active__link: item.route === location.pathname,
                  })}
                  to={item.route}
                >
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
