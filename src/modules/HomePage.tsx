import { BackgroundVideo } from "./BackgroundVideo";
import video_1 from "../assets/home_video.mp4";
import video_section_4 from "../assets/section_4.mp4";
import section_2_img from "../assets/Vuital/jpeg-optimizer_luxurious-tv-living-room-2023-11-27-05-23-59-utc.jpg";
import staircase_img from "../assets/Vuital/jpeg-optimizer_modern-architecture-and-empty-staircase-leading-to-2023-11-27-05-32-14-utc.jpg";
import building_img from "../assets/Vuital/jpeg-optimizer_modern-office-building-glass-facade-architecture-2023-11-27-05-16-03-utc.jpg";
import { ChangingText } from "./ChangingText";
import { ParallaxImg } from "./ParallaxImg";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { InfiniteCarrousel } from "./InfiniteCarrousel";
import { ShowcaseSlider } from "./ShowcaseSlider";

export const HomePage = () => {
  const appearAnimation = {
    visible: { scale: 1, opacity: 1 },
    hidden: { scale: 0.5, opacity: 0 },
    transition: { ease: [0.17, 0.55, 0.55, 1], duration: 0.3 },
    viewport: { once: true, amount: 0.9 },
  };

  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"],
  });
  const opacity = useTransform(scrollYProgress, [0.33, 0.66], ["1", "0.2"]);

  return (
    <>
      <div id="section_1">
        <div className="section_1_overlay"></div>
        <BackgroundVideo source={video_1} clase="video_section_1" />
        <div className="hero_txt">
          <ChangingText />
          <div className="main_txt">Futures</div>
        </div>
      </div>
      <div id="section_2">
        <div className="welcome_wrapper">
          <motion.div
            className="welcome_txt"
            initial={appearAnimation.hidden}
            whileInView={appearAnimation.visible}
            transition={appearAnimation.transition}
            viewport={appearAnimation.viewport}
          >
            <h1>A future forward architecture team</h1>
            <span>
              BAT is a dynamic and future-oriented architectural firm that
              operates at the interface between design and construction. Our
              passion lies in the design of the built environment, specializing
              in architecture in various typologies and scales. We are not only
              designers, but also visionaries committed to a future where
              innovation and creativity are paramount. Welcome to BAT — where
              innovation meets architecture, and the future is our canvas.
            </span>
            <a href="">Our practice</a>
          </motion.div>
          <ParallaxImg
            imgSrc={section_2_img}
            imgName="section_2"
            imgHeight="110%"
            startParallax="-10%"
            endParallax="0%"
          />
        </div>
        <div className="section_3_wrapper">
          <ParallaxImg
            imgSrc={staircase_img}
            imgName="staircase"
            imgHeight="110%"
            startParallax="-10%"
            endParallax="0%"
          />
          <div className="section_3_right_col">
            <ParallaxImg
              imgSrc={building_img}
              imgName="building"
              imgHeight="110%"
              startParallax="-10%"
              endParallax="0%"
            />
            <div className="section_3_txt">
              <p>
                <span>Building Futures.</span> We are more than just architects;
                we are builders of tomorrow. We know that every design and
                construction project has the potential to influence future
                generations.
              </p>

              <p>
                <span>Crafting Futures.</span> We are artisans of architecture
                and architecture is a craft. We take great care in creating
                spaces that inspire people, evoke emotion and fulfil their
                purpose. Our attention to detail and dedication to quality
                craftsmanship is what sets us apart.
              </p>

              <p>
                <span>Dreaming Futures.</span> We are dreamers, in the best
                sense of the word. Our dreams are imbued with innovative ideas,
                ambition and a long-term vision. We believe in creating spaces
                that not only meet current needs, but also adapt and evolve to
                meet the challenges of the future.
              </p>
            </div>
          </div>
        </div>
      </div>
      <motion.div ref={ref} className="section_4">
        <motion.div style={{ opacity }} className="section_4_video_wrapper">
          <BackgroundVideo source={video_section_4} clase="video_section_4" />
          <div className="section_4_overlay"></div>
          <div className="section_4_txt">
            <h1>
              VUITAL is more than just an architecture firm; we are a community
              of creative thinkers
            </h1>
            <a href="" className="link_txt">
              {" "}
              View talent
            </a>
          </div>
        </motion.div>
      </motion.div>
      <motion.div className="section_5">
        <div className="section_5_content">
          <InfiniteCarrousel />
        </div>
      </motion.div>
      <ShowcaseSlider />
    </>
  );
};
