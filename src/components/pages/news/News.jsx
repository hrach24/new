import React, { useEffect, useState } from "react";
import "./News.scss";
import news from "@/assets/images/news/news.webp";
import DateIcon from "@/assets/icons/date.svg?react";
import RightIcon from "@/assets/icons/arrow-right.svg?react";
import MarkIcon from "@/assets/icons/mark.svg?react";
import newsItem from "@/assets/images/news/news-item.webp";
import classNames from "classnames";
import "aos/dist/aos.css";
import AOS from "aos";
const NEWS__BUTTONS = [
  {
    id: 1,
    title: "All",
  },
  {
    id: 2,
    title: "Product Launch",
  },
  {
    id: 3,
    title: "Certifications",
  },
];

const News = () => {
  useEffect(() => {
    AOS.init({});
  }, []);
  const [activeButtonId, setActiveButton] = useState(1);
  return (
    <div className={"news"}>
      <div className={"container"}>
        <div className={"news__content"} data-aos={"fade-up"}>
          <div className={"news_info"}>
            <div className={"news__title large"}>News & Updates</div>
            <div className={"news__description medium"}>
              Stay informed with the latest news, product launches, and industry
              insights
            </div>
            <div className={"news__buttons"}>
              {NEWS__BUTTONS.map((button) => (
                <button
                  key={button.id}
                  className={classNames("news__button", {
                    active__newsButton: button.id === activeButtonId,
                  })}
                  onClick={() => setActiveButton(button.id)}
                >
                  {button.title}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className={"news__itemWrapper"}>
        <div className={"container"}>
          <div className={"news__item"}>
            <div className={"news__item__imgWrapper"}>
              <img src={news} alt={"news"} />
              <div className={"featuredWrapper small"}>Featured</div>
            </div>
            <div className={"news__item__info"}>
              <div className={"news__item__launchWrapper"}>
                <div className={"product__launch"}>Product Launch</div>
                <div className={"product__launch__date"}>
                  <div className={"product__launch__date__icon"}>
                    <DateIcon />
                  </div>
                  <span>October 15, 2024</span>
                </div>
              </div>
              <div className={"news__item__title"}>
                VITARO Expands Product Line with Advanced Dental Imaging
                Solutions
              </div>
              <div className={"news__item__description"}>
                We are excited to announce the launch of our new line of digital
                X-ray sensors and intraoral cameras.
              </div>
              <button className={"read__full__button"}>
                <span>Read Full Article</span>
                <span className={"button__icon"}>
                  <RightIcon />
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className={"news__listWrapper"}>
        <div className={"container"}>
          <ul className={"news__list"} data-aos={"fade-left"}>
            <li className={"news__list__item"}>
              <div className={"news__list__item__img"}>
                <img src={newsItem} alt={"newsItem"} />
              </div>
              <div className={"news__list__item__info"}>
                <div className={"news__list__item__dateWrapper"}>
                  <div className={"product__launch"}>
                    <div className={"product__launch__icon"}>
                      <MarkIcon />
                    </div>

                    <span>Certifications</span>
                  </div>
                  <div className={"product__launch__date"}>
                    <div className={"product__launch__date__icon"}>
                      <DateIcon />
                    </div>
                    <span>October 15, 2024</span>
                  </div>
                </div>
                <div className={"news__list__item__title medium"}>
                  ISO 13485:2016 Certification Renewed for 2024
                </div>
                <div className={"news__list__item__description"}>
                  VITARO Medical successfully renews its ISO 13485:2016
                  certification, demonstrating continued commitment to quality.
                </div>
                <button className={"read__full__button"}>
                  <span>Read More</span>
                  <span className={"button__icon"}>
                    <RightIcon />
                  </span>
                </button>
              </div>
            </li>
            <li className={"news__list__item"}>
              <div className={"news__list__item__img"}>
                <img src={newsItem} alt={"newsItem"} />
              </div>
              <div className={"news__list__item__info"}>
                <div className={"news__list__item__dateWrapper"}>
                  <div className={"product__launch"}>
                    <div className={"product__launch__icon"}>
                      <MarkIcon />
                    </div>

                    <span>Certifications</span>
                  </div>
                  <div className={"product__launch__date"}>
                    <div className={"product__launch__date__icon"}>
                      <DateIcon />
                    </div>
                    <span>October 15, 2024</span>
                  </div>
                </div>
                <div className={"news__list__item__title medium"}>
                  ISO 13485:2016 Certification Renewed for 2024
                </div>
                <div className={"news__list__item__description"}>
                  VITARO Medical successfully renews its ISO 13485:2016
                  certification, demonstrating continued commitment to quality.
                </div>
                <button className={"read__full__button"}>
                  <span>Read More</span>
                  <span className={"button__icon"}>
                    <RightIcon />
                  </span>
                </button>
              </div>
            </li>
            <li className={"news__list__item"}>
              <div className={"news__list__item__img"}>
                <img src={newsItem} alt={"newsItem"} />
              </div>
              <div className={"news__list__item__info"}>
                <div className={"news__list__item__dateWrapper"}>
                  <div className={"product__launch"}>
                    <div className={"product__launch__icon"}>
                      <MarkIcon />
                    </div>

                    <span>Certifications</span>
                  </div>
                  <div className={"product__launch__date"}>
                    <div className={"product__launch__date__icon"}>
                      <DateIcon />
                    </div>
                    <span>October 15, 2024</span>
                  </div>
                </div>
                <div className={"news__list__item__title medium"}>
                  ISO 13485:2016 Certification Renewed for 2024
                </div>
                <div className={"news__list__item__description"}>
                  VITARO Medical successfully renews its ISO 13485:2016
                  certification, demonstrating continued commitment to quality.
                </div>
                <button className={"read__full__button"}>
                  <span>Read More</span>
                  <span className={"button__icon"}>
                    <RightIcon />
                  </span>
                </button>
              </div>
            </li>
            <li className={"news__list__item"}>
              <div className={"news__list__item__img"}>
                <img src={newsItem} alt={"newsItem"} />
              </div>
              <div className={"news__list__item__info"}>
                <div className={"news__list__item__dateWrapper"}>
                  <div className={"product__launch"}>
                    <div className={"product__launch__icon"}>
                      <MarkIcon />
                    </div>

                    <span>Certifications</span>
                  </div>
                  <div className={"product__launch__date"}>
                    <div className={"product__launch__date__icon"}>
                      <DateIcon />
                    </div>
                    <span>October 15, 2024</span>
                  </div>
                </div>
                <div className={"news__list__item__title medium"}>
                  ISO 13485:2016 Certification Renewed for 2024
                </div>
                <div className={"news__list__item__description"}>
                  VITARO Medical successfully renews its ISO 13485:2016
                  certification, demonstrating continued commitment to quality.
                </div>
                <button className={"read__full__button"}>
                  <span>Read More</span>
                  <span className={"button__icon"}>
                    <RightIcon />
                  </span>
                </button>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default News;
