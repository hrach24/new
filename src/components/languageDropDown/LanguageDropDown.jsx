import React from "react";
import "./LanguageDropDown.scss";
import cnFlag from "@/assets/images/header/chinese-flag.webp";
import krFlag from "@/assets/images/header/korean-flag.webp";
import usFlag from "@/assets/images/header/usa-flag.webp";
import { useTranslation } from "react-i18next";

const LanguageDropDown = ({ setOpenLanguage, setDefaultLanguage }) => {
  const { i18n } = useTranslation();

  const handleLanguageChange = (lng) => {
    // Change the language using i18n
    i18n.changeLanguage(lng);

    // IMPORTANT: Save to localStorage
    localStorage.setItem("i18nextLng", lng);

    // Update the flag in the header
    if (lng === "zh") {
      setDefaultLanguage({ title: "CN", img: cnFlag });
    } else if (lng === "kr") {
      setDefaultLanguage({ title: "KR", img: krFlag });
    } else {
      // Default to English
      setDefaultLanguage({ title: "EN", img: usFlag });
    }

    // Close the dropdown
    setOpenLanguage(false);

    // Optional: Force a small re-render to ensure all components update
    window.dispatchEvent(new Event("storage"));
  };

  return (
    <>
      <div
        className={"language__dropDown__close"}
        onClick={() => setOpenLanguage(false)}
      ></div>
      <div className={"language__dropDown"}>
        {/* English option */}
        <button
          className={"language__dropDown__item"}
          onClick={() => handleLanguageChange("en")}
        >
          <span>EN</span>
          <span className={"language__imgWrapper"}>
            <img src={usFlag} alt={"English Flag"} />
          </span>
        </button>

        {/* Chinese option */}
        <button
          className={"language__dropDown__item"}
          onClick={() => handleLanguageChange("zh")}
        >
          <span>CN</span>
          <span className={"language__imgWrapper"}>
            <img src={cnFlag} alt={"Chinese Flag"} />
          </span>
        </button>

        {/* Korean option */}
        <button
          className={"language__dropDown__item"}
          onClick={() => handleLanguageChange("kr")}
        >
          <span>KR</span>
          <span className={"language__imgWrapper"}>
            <img src={krFlag} alt={"Korean Flag"} />
          </span>
        </button>
      </div>
    </>
  );
};

export default LanguageDropDown;
