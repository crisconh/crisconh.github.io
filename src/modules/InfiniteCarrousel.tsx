import { motion, cubicBezier } from "framer-motion";
import { useState } from "react";
import hospitality_img from "../assets/hospitality_img.jpg";
import consultancy_img from "../assets/consultancy_img.jpg";
import homedesign_img from "../assets/homedesign_img.jpg";
import residential_img from "../assets/residential_img.jpg";

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
      title: "consultancy",
      text: "Consultancy",
      id: "",
      imgSrc: consultancy_img,
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
      title: "healthcare",
      text: "Healthcare",
      id: "",
      imgSrc: consultancy_img,
      opacity: 0.4,
    },
  ];

  const [highlightStyle, setHighlightStyle] = useState([0, 0, 0, 0, 0]);
  const [highlightImg, setHighlightImg] = useState("");

  function changeHighlightElement(i: number) {
    setHighlightStyle(
      highlightStyle.map((item, index) => (index === i ? 1 : 0.4))
    );
    setHighlightImg(SHOW_THEMES[i].imgSrc);
  }

  return (
    <>
    <div className="section_5_overlay"></div>
      <div className="s5_bg_img">
        <motion.img
          className={"bg_image_highlight"}
          src={highlightImg}
          key={highlightImg}
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
          src={highlightImg}
          key={highlightImg}
          initial={{ opacity: 0, y:"100%"}}
          animate={{ opacity: 1, y:0}}
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
              animate={{ opacity: highlightStyle[index] }}
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
              animate={{ opacity: highlightStyle[index] }}
            >
              {item.text}
            </motion.span>
          ))}
        </div>
      </div>
    </>
  );
};
