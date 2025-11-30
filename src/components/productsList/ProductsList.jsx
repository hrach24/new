import React from "react";
import "./ProductsList.scss";
import logo from "@/assets/images/header/logo.webp";
const ProductsList = ({ data, selectedCategory }) => {
  return (
    <ul className={"products__list"}>
      {data.map((item, index) => (
        <li
          className={"products__list__item"}
          data-aos={index % 2 === 0 ? "fade-left" : "fade-right"}
        >
          <div className={"products__list__item__img"}>
            <img src={item.image} alt={item.title} />
            <div className={"list__category"}>{selectedCategory}</div>
            <div className={"brand__logo"}>
              <img src={logo} alt={"logo"} />
            </div>
          </div>
          <div className={"products__list__item__info"}>
            <div className={"products__list__item__title medium"}>
              {item.title}
            </div>
            <div className={"products__list__item_description small"}>
              {item.description}
            </div>
            <div className={"products__list__item_certifications__wrapper"}>
              {item.certifications.map((certification) => (
                <div className={"products__list__item_certification small"}>
                  {certification}
                </div>
              ))}
            </div>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default ProductsList;
