import React from "react";
import "./Product.scss";
import ShieldSvg from "@/assets/icons/shield.svg?react";
import CloseIconSvg from "@/assets/icons/close-icon.svg?react";
const Product = ({ clickedProduct, setClickedProduct }) => {
  return (
    <>
      <div className={"product__wrapper"}>
        <div
          className={"product__closer"}
          onClick={() => setClickedProduct(null)}
        />
        <div className={"product"}>
          <div className={"product__content"}>
            <div className={"product__title"}>
              <span>{clickedProduct.title}</span>
              <div
                className={"close__icon"}
                onClick={() => setClickedProduct(null)}
              >
                <CloseIconSvg />
              </div>
            </div>
            <div className={"product__imgWrapper"}>
              <img src={clickedProduct.image} alt={clickedProduct.title} />
            </div>
            <div className={"product__description"}>
              <div className={"description__title"}>Description</div>
              <div className={"description"}>{clickedProduct.description}</div>
            </div>
            <div className={"product__specifications"}>
              <div className={"product__specifications__title medium"}>
                Key Specifications
              </div>
              <div className={"product__specifications__list"}>
                {clickedProduct.specifications.map((item) => (
                  <div className={"product__specifications__item"}>
                    <div
                      className={"product__specifications__item__title small"}
                    >
                      {item.title}
                    </div>
                    <div
                      className={"product__specifications__item__description"}
                    >
                      {item.text}
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className={"certifications"}>
              <div className={"certifications__titleWrapper"}>
                <div className={"certification__icon"}>
                  <ShieldSvg />
                </div>
                <div className={"product__certification__title"}>
                  Certifications
                </div>
              </div>
              <div className={"product__certification__list"}>
                {clickedProduct.certifications.map((item) => (
                  <div className={"certification__certifications__item"}>
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Product;
