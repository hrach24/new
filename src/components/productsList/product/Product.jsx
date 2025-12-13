import React from "react";
import "./Product.scss";
import ShieldSvg from "@/assets/icons/shield.svg?react";
import CloseIconSvg from "@/assets/icons/close-icon.svg?react";
import { useTranslation } from "react-i18next";

const Product = ({ clickedProduct, setClickedProduct }) => {
  const { t } = useTranslation();

  // Get translated product title and description
  const translatedTitle = t(
    `products.${clickedProduct.id}.title`,
    clickedProduct.title,
  );
  const translatedDescription = t(
    `products.${clickedProduct.id}.description`,
    clickedProduct.description,
  );

  // Get the specifications array from the translation file
  const specifications = t(`products.${clickedProduct.id}.specifications`, {
    returnObjects: true,
  });

  return (
    <>
      <div className="product__wrapper">
        <div
          className="product__closer"
          onClick={() => {
            setClickedProduct(null);
            document
              .getElementsByTagName("html")[0]
              .classList.remove("no-scroll");
          }}
        />
        <div className="product">
          <div className="product__content">
            <div className="product__title">
              <span>{translatedTitle}</span>
              <div
                className="close__icon"
                onClick={() => {
                  setClickedProduct(null);
                  document
                    .getElementsByTagName("html")[0]
                    .classList.remove("no-scroll");
                }}
              >
                <CloseIconSvg />
              </div>
            </div>
            <div className="product__imgWrapper">
              <img src={clickedProduct.image} alt={translatedTitle} />
            </div>
            <div className="product__description">
              <div className="description__title">
                {t("ui.description", "Description")}
              </div>
              <div className="description">{translatedDescription}</div>
            </div>
            <div className="product__specifications">
              <div className="product__specifications__title medium">
                {t("ui.keySpecifications", "Key Specifications")}
              </div>
              <div className="product__specifications__list">
                {specifications.map((item, index) => (
                  <div className="product__specifications__item" key={index}>
                    <div className="product__specifications__item__title small">
                      {item.title}
                    </div>
                    <div className="product__specifications__item__description">
                      {item.text}
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="certifications">
              <div className="certifications__titleWrapper">
                <div className="certification__icon">
                  <ShieldSvg />
                </div>
                <div className="product__certification__title">
                  {t("ui.certifications", "Certifications")}
                </div>
              </div>
              <div className="product__certification__list">
                {clickedProduct.certifications.map((item, index) => (
                  <div
                    className="certification__certifications__item"
                    key={index}
                  >
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
