import React from "react";
import "./LanguageDropDown.scss";
import cnFlag from "@/assets/images/header/chinese-flag.webp";
import krFlag from "@/assets/images/header/korean-flag.webp";
const LanguageDropDown = ({ setOpenLanguage, setDefaultLanguage }) => {
  return (
    <>
      <div
        className={"language__dropDown__close"}
        onClick={() => setOpenLanguage(false)}
      ></div>
      <div className={"language__dropDown"}>
        <button
          className={"language__dropDown__item"}
          onClick={() => {
            setDefaultLanguage({ title: "CN", img: cnFlag });
            setOpenLanguage(false);
          }}
        >
          <span>CN</span>
          <span className={"language__imgWrapper"}>
            <img src={cnFlag} alt={"cnFlag"} />
          </span>
        </button>
        <button
          className={"language__dropDown__item"}
          onClick={() => {
            setDefaultLanguage({ title: "KR", img: krFlag });
            setOpenLanguage(false);
          }}
        >
          <span>KR</span>
          <span className={"language__imgWrapper"}>
            <img src={krFlag} alt={"krFlag"} />
          </span>
        </button>
      </div>
    </>
  );
};

export default LanguageDropDown;
