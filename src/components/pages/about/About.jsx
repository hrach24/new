import React, { useEffect } from "react";
import "./About.scss";
import aboutUs from "@/assets/images/about/our-story.webp";
import TargetSvg from "@/assets/icons/target.svg?react";
import VisionSvg from "@/assets/icons/vision.svg?react";
import CompletedSvg from "@/assets/icons/completed.svg?react";
import RewardIcon from "@/assets/icons/reward.svg?react";
import OurTeamIcon from "@/assets/icons/our-team.svg?react";
import "aos/dist/aos.css";
import AOS from "aos";
const OUR__MISSION = [
  {
    id: 1,
    title: "Our Mission",
    description:
      "To provide high-quality, reliable medical productsList that enhance healthcare delivery and patient safety worldwide.",
    icon: <TargetSvg />,
  },
  {
    id: 2,
    title: "Our Vision",
    description:
      "To be a global leader in medical product manufacturing, recognized for innovation, quality, and sustainability.",
    icon: <VisionSvg />,
  },
];

const CORE__VALUES = [
  {
    id: 1,
    title: "Quality First",
    description: "Uncompromising standards in every product",
    icon: <CompletedSvg />,
  },
  {
    id: 2,
    title: "Innovation",
    description: "Continuous improvement and advancement",
    icon: <CompletedSvg />,
  },
  {
    id: 3,
    title: "Integrity",
    description: "Transparency and ethical business practices.",
    icon: <CompletedSvg />,
  },

  {
    id: 4,
    title: "Customer Focus",
    description: "Meeting and exceeding expectations",
    icon: <CompletedSvg />,
  },
];

const WHY__CHOOSE = [
  {
    id: 1,
    title: "ISO 13485:2016",
    description: "Medical Devices Quality Management System",
    icon: <RewardIcon />,
  },
  {
    id: 2,
    title: "ISO 9001:2015",
    description: "Quality Management Systems",
    icon: <RewardIcon />,
  },
  {
    id: 3,
    title: "CE Marking",
    description: "European Conformity Standards",
    icon: <RewardIcon />,
  },
  {
    id: 4,
    title: "FDA Registered",
    description: "US Food and Drug Administration",
    icon: <RewardIcon />,
  },
  {
    id: 5,
    title: "EN ISO 374",
    description: "Protective Gloves Standard",
    icon: <RewardIcon />,
  },
  {
    id: 6,
    title: "EN 455",
    description: "Medical Gloves Standard",
    icon: <RewardIcon />,
  },
  {
    id: 7,
    title: "ASTM D6319",
    description: "Nitrile Examination Gloves",
    icon: <RewardIcon />,
  },
  {
    id: 8,
    title: "ISO 11607",
    description: "Packaging for Medical Devices",
    icon: <RewardIcon />,
  },
  {
    id: 9,
    title: "EN 14683",
    description: "Medical Face Masks Standard",
    icon: <RewardIcon />,
  },
  {
    id: 10,
    title: "GB 19083",
    description: "Chinese Medical Mask Standard",
    icon: <RewardIcon />,
  },
  {
    id: 11,
    title: "GMP Certified",
    description: "Good Manufacturing Practice",
    icon: <RewardIcon />,
  },
  {
    id: 12,
    title: "ISO 14001",
    description: "Environmental Management",
    icon: <RewardIcon />,
  },
];

const About = () => {
  useEffect(() => {
    AOS.init({});
  }, []);
  return (
    <div className={"about"}>
      <div className={"about__content container"}>
        <div className={"about__ourStory"} data-aos={"fade-up"}>
          <div className={"about_info "}>
            <div className={"about__info__title"}>About VITARO Medical</div>
            <div className={"about__info__description medium"}>
              Innovation in Healthcare Solutions
            </div>
          </div>
          <div className={"our__story"}>
            <div className={"our__story__imgWrapper"}>
              <div className={"our__story__img"}>
                <img src={aboutUs} alt={aboutUs} />
              </div>
              <div className={"our__story__img__text small"}>
                VITARO Medical Manufacturing Facility - Shanghai, China
              </div>
            </div>
            <div className={"our__story__info"}>
              <div className={"our__story__info__title"}>Our Story</div>
              <div
                className={"our__story__info__description styled__description"}
              >
                🇨🇳🇰🇷 VITARO Medical is a Chinese-Korean joint venture, combining
                advanced manufacturing expertise from both nations to deliver
                world-class medical and dental equipment.
              </div>
              <div className={"our__story__info__description small"}>
                Founded in 2002, VITARO Medical has evolved from a dedicated
                medical supplies manufacturer to a globally recognized leader in
                premium medical and dental device production. For over two
                decades, our state-of-the-art manufacturing facility in
                Shanghai, China has been at the forefront of medical innovation
                and quality excellence.
              </div>
              <div className={"our__story__info__description small"}>
                Founded in 2002, VITARO Medical has evolved from a dedicated
                medical supplies manufacturer to a globally recognized leader in
                premium medical and dental device production. For over two
                decades, our state-of-the-art manufacturing facility in
                Shanghai, China has been at the forefront of medical innovation
                and quality excellence.
              </div>
              <div className={"our__story__info__description small"}>
                Our 10,000+ square meter facility combines cutting-edge
                manufacturing technology with stringent quality control systems.
                We specialize in producing high-quality medical gloves,
                syringes, dental equipment, handpieces, and essential medical
                supplies that meet the demanding standards of healthcare
                professionals worldwide.
              </div>
              <div className={"our__story__info__description small"}>
                From our ISO-certified cleanrooms to our advanced testing
                laboratories, every stage of our manufacturing process adheres
                to the highest international standards. We don't just meet
                regulatory requirements—we exceed them, because we understand
                that healthcare professionals and patients depend on the quality
                and consistency of our products every single day.
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={"our__mission"}>
        <div className={"container"}>
          <ul className={"our__mission__list"} data-aos={"fade-up"}>
            {OUR__MISSION.map((item) => (
              <li
                className={"our__mission__list__item"}
                id={item.id}
                data-aos={"fade-right"}
              >
                <div className={"our__mission__list__item__icon"}>
                  {item.icon}
                </div>
                <div className={"our__mission__list__item__title medium"}>
                  {item.title}
                </div>
                <div className={"our__mission__list__item__description small"}>
                  {item.description}
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className={"our__coreValues"}>
        <div className={"container"}>
          <div className={"our__coreValues__content"}>
            <div className={"our__coreValues__title large"}>
              Our Core Values
            </div>
            <div className={"our__coreValues__description medium"}>
              The principles that guide everything we do
            </div>
            <ul className={"our__coreValues__list"} data-aos={"fade-left"}>
              {CORE__VALUES.map((item) => (
                <li
                  className={"our__coreValues__list__item"}
                  id={item.id}
                  data-aos={"fade-top"}
                >
                  <div className={"our__coreValues__list__item__icon"}>
                    {item.icon}
                  </div>
                  <div className={"our__coreValues__list__item__title medium"}>
                    {item.title}
                  </div>
                  <div
                    className={"our__coreValues__list__item__description small"}
                  >
                    {item.description}
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      <div className={"compliance"}>
        <div className={"container"}>
          <div className={"compliance__content"}>
            <div className={"compliance__title"}>
              Certifications & Compliance
            </div>
            <div className={"compliance__description medium"}>
              Our commitment to quality is validated by international
              certifications and regulatory approvals
            </div>
            <ul className={"compliance__list"} data-aos={"fade-right"}>
              {WHY__CHOOSE.map((item, index) => (
                <li
                  className={"compliance__list__item"}
                  id={item.id}
                  data-aos={index % 2 === 0 ? "fade-left" : "fade-right"}
                >
                  <div className={"compliance__list__item__icon"}>
                    {item.icon}
                  </div>
                  <div className={"compliance__list__item__title medium"}>
                    {item.title}
                  </div>
                  <div className={"compliance__list__item__description"}>
                    {item.description}
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      <div className={"our__team"}>
        <div className={"container"}>
          <div className={"our__team__content"} data-aos={"fade-down"}>
            <div className={"our__team__icon"}>
              <OurTeamIcon />
            </div>
            <div className={"our__team__title large"}>Our Team</div>
            <div className={"our__team__description small"}>
              500+ dedicated professionals working together to deliver
              excellence in healthcare solutions
            </div>
            <div className={"our__team__second__description small"}>
              Our team consists of experienced healthcare professionals, quality
              assurance specialists, engineers, and customer service experts,
              all committed to manufacturing products that healthcare
              professionals can trust.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
