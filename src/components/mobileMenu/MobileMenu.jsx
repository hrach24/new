import React from "react";
import "./MobileMenu.scss";
import { HEADER__LINKS } from "@/utils/headerLinks.js";
import { Link, useLocation } from "react-router-dom";
import classNames from "classnames";
const MobileMenu = ({ setMobileMenuOpen }) => {
  const location = useLocation();

  return (
    <>
      <div
        className={"mobile__menuCloser"}
        onClick={() => setMobileMenuOpen(false)}
      />
      <ul className={"mobile__menu"}>
        {HEADER__LINKS.map((link) => (
          <li
            className={classNames("mobile__menu__item", {
              active__link: link.route === location.pathname,
            })}
            onClick={() => setMobileMenuOpen(false)}
            key={link.id}
          >
            <Link className={"mobile__menu__link"} to={link.route}>
              {link.title}
            </Link>
          </li>
        ))}
        <Link
          className={"get__inTouch__button"}
          to={"/contact-us"}
          onClick={() => setMobileMenuOpen(false)}
        >
          Get In Touch
        </Link>
      </ul>
    </>
  );
};

export default MobileMenu;
