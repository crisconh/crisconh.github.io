import { motion } from "framer-motion";

interface Props {
  menuVisible: boolean;
}

export const Menu = ({ menuVisible }: Props) => {
  const variants = {
    close: {
      x: "50vw",
      opacity: 0,
      transition: {
        ease: [0.17, 0.55, 0.55, 1],
        delayChildren: 0.2,
        staggerChildren: 0.3,
      },
    },
    open: {
      x: 0,
      opacity: 1,
      transition: {
        ease: [0.17, 0.55, 0.55, 1],
        delayChildren: 0.1,
        staggerChildren: 0.3,
      },
    },
  };
  const containerList = {
    close: { opacity: 0 },
    open: {
      opacity: 1,
      transition: {
        ease: [0.17, 0.55, 0.55, 1],
        delayChildren: 0.5,
        staggerChildren: 0.1,
      },
    },
  };
  const listItem = {
    close: {
      opacity: 0,
    },
    open: {
      opacity: 1,
      transition: { ease: [0.17, 0.55, 0.55, 1], duration: 0.4 },
    },
  };
  return (
    <>
      <motion.div
        className="menu_container"
        variants={variants}
        initial="close"
        animate={menuVisible ? "open" : "close"}
      >
        <motion.ul variants={containerList}>
          <motion.li variants={listItem} className="nav_link">
            Practice
          </motion.li>
          <motion.li variants={listItem} className="nav_link">
            Projects
          </motion.li>
          <motion.li variants={listItem} className="nav_link">
            Talents
          </motion.li>
          <motion.li variants={listItem} className="nav_link">
            Contacts
          </motion.li>
        </motion.ul>
        <motion.div variants={listItem} className="menu_social_links">
          Follow us on
          <a href="" className="ig_link social_link">
            Instagram
          </a>
          <a href="" className="linkedin_link social_link">
            Linkedin
          </a>
        </motion.div>
      </motion.div>
    </>
  );
};
