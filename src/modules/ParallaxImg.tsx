import { useTransform, useScroll, motion, useSpring } from "framer-motion";
import { useRef } from "react";

interface Props {
  imgSrc: string;
  imgName: string;
  startParallax: string;
  endParallax: string;
  imgHeight: string;
}

export const ParallaxImg = (props: Props) => {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "end start"]
  });

  const smoothY = useSpring(scrollYProgress, {
    stiffness: 90,
    damping: 20,
    duration: 0.2
  });

  const mov = useTransform(smoothY, [0, 1], [props.startParallax, props.endParallax]);

  return (
    <>
      <div className={props.imgName+"_container parallax_container"} ref={container}>
        <motion.img
          className={props.imgName+"_img parallax_img"}
          src={props.imgSrc}
          alt=""
          style={{top:mov, height:props.imgHeight, position:'relative'}}
        />
      </div>
    </>
  );
};
