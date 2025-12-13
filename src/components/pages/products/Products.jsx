import React, { useEffect, useMemo } from "react";
import "./Products.scss";
import { PRODUCTS } from "@/utils/products.js";
import ProductsList from "@/components/productsList/ProductsList.jsx";
import classNames from "classnames";
import SearchSvg from "@/assets/icons/search.svg?react";
import DownSvg from "@/assets/icons/arrow-down.svg?react";
import "aos/dist/aos.css";
import AOS from "aos";
import { useTranslation } from "react-i18next";

const Products = () => {
  const { t, i18n } = useTranslation();

  // Default to "dentalEquipment" (the key, not the title)
  const [selectedCategory, setSelectedCategory] =
    React.useState("dentalEquipment");
  const [showCategoryDropDown, setShowCategoryDropDown] = React.useState(false);
  const [searchQuery, setSearchQuery] = React.useState("");

  useEffect(() => {
    AOS.init({});
  }, []);

  // Find the selected category object by key
  const selectedCategoryObj =
    PRODUCTS.find((cat) => cat.key === selectedCategory) || PRODUCTS[0];
  console.log(selectedCategoryObj);

  // Get translated category names
  const translatedCategories = PRODUCTS.map((category) => ({
    key: category.key,
    name: t(`categories.${category.title}`), // Use the key for translation
    count: category.items.length,
  }));

  // Get the translated name for the selected category
  const currentCategoryName = selectedCategoryObj
    ? t(`categories.${selectedCategoryObj.title}`)
    : t(`categories.dentalEquipment`);

  const filteredProducts = useMemo(() => {
    const categoryItems = selectedCategoryObj?.items || [];

    if (!searchQuery.trim()) return categoryItems;

    const query = searchQuery.toLowerCase().trim();
    return categoryItems.filter((product) =>
      t(`products.${product.id}.title`).toLowerCase().includes(query),
    );
  }, [selectedCategory, searchQuery, t, selectedCategoryObj]);

  // Apply translations to products
  const translatedProducts = filteredProducts.map((product) => ({
    ...product,
    title: t(`products.${product.id}.title`),
    description: t(`products.${product.id}.description`),
  }));

  return (
    <div className="products">
      <div className="container">
        <div className="products__content" data-aos="fade-up">
          <div className="products__content__title large">
            {t("ourProducts")}
          </div>
          <div className="products__content__description medium">
            {t("description")}
          </div>
        </div>
      </div>

      <div className="products__buttons">
        <div className="container">
          <div className="products__buttonsWrapper">
            <div className="products__search__wrapper">
              <div className="search__icon">
                <SearchSvg />
              </div>
              <input
                type="text"
                className="products__search"
                placeholder={t("searchPlaceholder")}
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>

            <div className="product__category__wrapper">
              <div
                className="product__category"
                onClick={() => setShowCategoryDropDown(!showCategoryDropDown)}
              >
                <div className="category">{currentCategoryName}</div>
                <div className="down__icon">
                  <DownSvg />
                </div>
              </div>

              {showCategoryDropDown && (
                <>
                  <div
                    className="closer"
                    onClick={() => setShowCategoryDropDown(false)}
                  />
                  <div className="products__wrapper">
                    {translatedCategories.map(({ key, name, count }) => (
                      <button
                        key={key}
                        className={classNames("products__button", {
                          active__category: key === selectedCategory,
                        })}
                        onClick={() => {
                          setSelectedCategory(key);
                          setShowCategoryDropDown(false);
                          setSearchQuery("");
                        }}
                      >
                        <span>{name}</span>
                        <span>({count})</span>
                      </button>
                    ))}
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      </div>

      <div className="container">
        {searchQuery && translatedProducts.length === 0 ? (
          <div className="no-results">
            {t("noResults", {
              query: searchQuery,
              category: currentCategoryName,
            })}
          </div>
        ) : (
          <ProductsList
            data={translatedProducts}
            selectedCategoryName={currentCategoryName} // Pass the translated name
          />
        )}
      </div>
    </div>
  );
};

export default Products;
