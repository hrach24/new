import React, { useEffect, useState } from "react";
import "./Products.scss";
import { PRODUCTS } from "@/utils/products.js";
import ProductsList from "@/components/productsList/ProductsList.jsx";
import classNames from "classnames";
import "aos/dist/aos.css";
import AOS from "aos";
const Products = () => {
  useEffect(() => {
    AOS.init({});
  }, []);
  const [selectedCategory, setSelectedCategory] = useState("Dental Equipment");
  const categoryButtons = Object.keys(PRODUCTS);
  return (
    <div className={"products"}>
      <div className={"container"}>
        <div className={"products__content"} data-aos={"fade-up"}>
          <div className={"products__content__title large"}>Our Products</div>
          <div className={"products__content__description medium"}>
            Premium medical products designed for professional healthcare
            environments
          </div>
        </div>
      </div>
      <div className={"products__buttons"}>
        <div className={"container"}>
          <div className={"products__buttonsWrapper"}>
            {categoryButtons.map((button) => (
              <button
                className={classNames("products__button", {
                  active__category: button === selectedCategory,
                })}
                onClick={() => setSelectedCategory(button)}
              >
                <span>{button}</span>
                <span>({PRODUCTS[button].length})</span>
              </button>
            ))}
          </div>
        </div>
      </div>
      <div className={"container"}>
        <ProductsList
          data={PRODUCTS[selectedCategory]}
          selectedCategory={selectedCategory}
        />
      </div>
    </div>
  );
};

export default Products;
