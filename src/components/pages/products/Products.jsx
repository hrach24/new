import React, { useEffect, useState, useMemo } from "react";
import "./Products.scss";
import { PRODUCTS } from "@/utils/products.js";
import ProductsList from "@/components/productsList/ProductsList.jsx";
import classNames from "classnames";
import SearchSvg from "@/assets/icons/search.svg?react";
import DownSvg from "@/assets/icons/arrow-down.svg?react";
import "aos/dist/aos.css";
import AOS from "aos";

const Products = () => {
  useEffect(() => {
    AOS.init({});
  }, []);

  const [selectedCategory, setSelectedCategory] = useState("Dental Equipment");
  const [showCategoryDropDown, setShowCategoryDropDown] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  const categoryButtons = Object.keys(PRODUCTS);

  const filteredProducts = useMemo(() => {
    const categoryProducts = PRODUCTS[selectedCategory] || [];

    if (!searchQuery.trim()) {
      return categoryProducts;
    }

    const query = searchQuery.toLowerCase().trim();
    return categoryProducts.filter((product) =>
      product.title.toLowerCase().trim().includes(query),
    );
  }, [selectedCategory, searchQuery]);

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
            <div className={"products__search__wrapper"}>
              <div className={"search__icon"}>
                <SearchSvg />
              </div>
              <input
                type="text"
                className={"products__search"}
                placeholder={"Search..."}
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
            <div className={"product__category__wrapper"}>
              <div
                className={"product__category"}
                onClick={() => setShowCategoryDropDown(!showCategoryDropDown)}
              >
                <div className={"category"}>{selectedCategory}</div>
                <div className={"down__icon"}>
                  <DownSvg />
                </div>
              </div>
              {showCategoryDropDown && (
                <>
                  <div
                    className={"closer"}
                    onClick={() => setShowCategoryDropDown(false)}
                  ></div>
                  <div className={"products__wrapper"}>
                    {categoryButtons.map((button) => (
                      <button
                        key={button}
                        className={classNames("products__button", {
                          active__category: button === selectedCategory,
                        })}
                        onClick={() => {
                          setSelectedCategory(button);
                          setShowCategoryDropDown(false);
                          setSearchQuery("");
                        }}
                      >
                        <span>{button}</span>
                        <span>({PRODUCTS[button].length})</span>
                      </button>
                    ))}
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
      <div className={"container"}>
        {/* Show search results count */}
        {/*{searchQuery && (*/}
        {/*  <div className={"search-results-info"}>*/}
        {/*    Found {filteredProducts.length} result*/}
        {/*    {filteredProducts.length !== 1 ? "s" : ""} for "{searchQuery}"*/}
        {/*  </div>*/}
        {/*)}*/}
        {searchQuery && filteredProducts.length === 0 ? (
          <div className={"no-results"}>
            No products found matching "{searchQuery}" in {selectedCategory}
          </div>
        ) : (
          <ProductsList
            data={filteredProducts}
            selectedCategory={selectedCategory}
          />
        )}
      </div>
    </div>
  );
};

export default Products;
