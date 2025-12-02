import React, { useState } from "react";
import "./ProductsList.scss";
import logo from "@/assets/images/header/logo.webp";
import Product from "@/components/productsList/product/Product.jsx";
import { PRODUCTS } from "@/utils/products.js";

const ProductsList = ({ data, selectedCategory }) => {
  const [clickedProduct, setClickedProduct] = useState(null);
  return (
    <>
      <ul className={"products__list"}>
        {data.map((item) => (
          <li
            className={"products__list__item"}
            data-aos={"fade-up"}
            key={item.id}
            onClick={() => {
              setClickedProduct(
                PRODUCTS[selectedCategory].find((i) => i.id === item.id),
              );
            }}
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
                  <div
                    className={"products__list__item_certification small"}
                    key={certification.title}
                  >
                    {certification}
                  </div>
                ))}
              </div>
            </div>
          </li>
        ))}
      </ul>
      {clickedProduct !== null && (
        <Product
          clickedProduct={clickedProduct}
          setClickedProduct={setClickedProduct}
        />
      )}
    </>
  );
};

export default ProductsList;
