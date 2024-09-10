import { motion, cubicBezier } from "framer-motion";
import { useState } from "react";
import hospitality_img from "../assets/Vuital/jpeg-optimizer_austria-vienna-modern-office-building-2023-11-27-05-24-42-utc.jpeg";
import offices_img from "../assets/Vuital/jpeg-optimizer_office-buildings-2023-11-27-05-01-21-utc.jpeg";
import homedesign_img from "../assets/Vuital/jpeg-optimizer_luxurious-tv-living-room-2023-11-27-05-23-59-utc.jpg";
import residential_img from "../assets/Vuital/jpeg-optimizer_modern-house-exterior-2023-11-27-05-28-56-utc.jpg";

export const InfiniteCarrousel = () => {
  const SHOW_THEMES = [
    {
      title: "hospitality",
      text: "Hospitality",
      id: "",
      imgSrc: hospitality_img,
      opacity: 0.4,
    },
    {
      title: "offices",
      text: "Working Spaces",
      id: "",
      imgSrc: offices_img,
      opacity: 0.4,
    },
    {
      title: "homedesign",
      text: "Home Design",
      id: "",
      imgSrc: homedesign_img,
      opacity: 0.4,
    },
    {
      title: "residential",
      text: "Residential",
      id: "",
      imgSrc: residential_img,
      opacity: 0.4,
    },
    {
      title: "offices",
      text: "Offices",
      id: "",
      imgSrc: offices_img,
      opacity: 0.4,
    },
  ];
  const [highLight, setHighLight] = useState({
    highLightStyle: [1, 0, 0, 0, 0],
    highLightImg: SHOW_THEMES[0].imgSrc,
  });
  const [highlightStyle, setHighlightStyle] = useState([1, 0, 0, 0, 0]);
  const [highlightImg, setHighlightImg] = useState(SHOW_THEMES[0].imgSrc);

  function changeHighlightElement(i: number) {
    /* setHighlightStyle(
      highlightStyle.map((_item, index) => (index === i ? 1 : 0.4))
    );
    setHighlightImg(SHOW_THEMES[i].imgSrc); */
    setHighLight({
      highLightImg: SHOW_THEMES[i].imgSrc,
      highLightStyle: highlightStyle.map((_item, index) =>
        index === i ? 1 : 0.4
      ),
    });
  }

  return (
    <>
      <div className="section_5_overlay"></div>
      <div className="s5_bg_img">
        <motion.img
          className={"bg_image_highlight"}
          src={highLight.highLightImg}
          key={highLight.highLightImg + "bg"}
          initial={{ opacity: 0, scale: 1.2 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            ease: cubicBezier(0.165, 0.84, 0.44, 1),
            duration: 1,
          }}
          alt=""
        />
      </div>
      <div className="s5_img">
        <motion.img
          className={"bg_image_highlight"}
          src={highLight.highLightImg}
          key={highLight.highLightImg + "img"}
          initial={{ opacity: 0, y: "100%" }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            ease: cubicBezier(0.165, 0.84, 0.44, 1),
            duration: 0.4,
          }}
          alt=""
        />
      </div>
      <div className="scroll">
        <div className="text_container">
          {SHOW_THEMES.map((item, index) => (
            <motion.span
              onViewportEnter={() => {
                changeHighlightElement(index);
              }}
              viewport={{ margin: "0px -50% 0px 0px" }}
              className={"s5_txt " + item.title}
              id={item.title}
              key={index + item.text}
              animate={{ opacity: highLight.highLightStyle[index] }}
            >
              {item.text}
            </motion.span>
          ))}
          {SHOW_THEMES.map((item, index) => (
            <motion.span
              onViewportEnter={() => {
                changeHighlightElement(index);
              }}
              viewport={{ margin: "0px -50% 0px 0px" }}
              className={"s5_txt " + item.title}
              id={item.title}
              key={index + item.text}
              animate={{ opacity: highLight.highLightStyle[index] }}
            >
              {item.text}
            </motion.span>
          ))}
        </div>
      </div>
    </>
  );
};
