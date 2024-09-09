import { MouseEventHandler } from "react";
import { motion } from "framer-motion";

interface Props {
  onClick: MouseEventHandler;
  menuVisible: boolean;
}

export const Navbar = ({ onClick, menuVisible }: Props) => {
  const variantsTop = {
    close: {
      y: 0,
      transition: { ease: [0.17, 0.55, 0.55, 1], duration: 0.3 },
    },
    open: {
      y: 3,
      opacity: 1,
      transition: { ease: [0.17, 0.55, 0.55, 1], duration: 0.3 },
    },
  };
  const variantsBottom = {
    close: {
      y: 0,
      transition: { ease: [0.17, 0.55, 0.55, 1], duration: 0.3 },
    },
    open: {
      y: -4,
      opacity: 1,
      transition: { ease: [0.17, 0.55, 0.55, 1], duration: 0.3 },
    },
  };

  return (
    <>
      <nav>
        <div className="brand_container">
          <div className="logo_container">
            <div className="square_logo" id="square_1"></div>
            <div className="square_logo" id="square_2"></div>
          </div>
          <div className="text_logo_container">vuital</div>
        </div>
        <div className="menu_btn" onClick={onClick}>
          <motion.div
            className="menu_line"
            id="menu_line_1"
            variants={variantsTop}
            animate={menuVisible ? "open" : "close"}
          ></motion.div>
          <motion.div
            className="menu_line"
            id="menu_line_2"
            variants={variantsBottom}
            animate={menuVisible ? "open" : "close"}
          ></motion.div>
        </div>
      </nav>
    </>
  );
};
