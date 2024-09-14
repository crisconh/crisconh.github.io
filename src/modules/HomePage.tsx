import { BackgroundVideo } from "./BackgroundVideo";
import video_1 from "../assets/Vuital/fgdhgfj.mp4";
import video_section_4 from "../assets/Vuital/creative-people-working-on-future-architecture-pro-2023-11-27-05-11-19-utc.mp4";
import section_2_img from "../assets/Vuital/jpeg-optimizer_luxurious-tv-living-room-2023-11-27-05-23-59-utc.jpg";
import staircase_img from "../assets/Vuital/jpeg-optimizer_modern-architecture-and-empty-staircase-leading-to-2023-11-27-05-32-14-utc.jpg";
import building_img from "../assets/Vuital/jpeg-optimizer_modern-office-building-glass-facade-architecture-2023-11-27-05-16-03-utc.jpg";
import { ChangingText } from "./ChangingText";
import { ParallaxImg } from "./ParallaxImg";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
/* import { InfiniteCarrousel } from "./InfiniteCarrousel"; */
import { ShowcaseSlider } from "./ShowcaseSlider";
import { EnhancedInfiniteCarrousel } from "./EnhancedInfiniteCarrousel";

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
              At VUIT, we see ourselves not merely as architects, but as
              pioneers shaping the future. Positioned at the intersection of
              design and construction, we bring a fresh perspective to the built
              environment, embracing a wide range of architectural styles and
              scales. Our work is driven by a deep commitment to creativity and
              forward-thinking solutions, transforming ideas into spaces that
              inspire. Welcome to VUIT — where imagination shapes architecture,
              and tomorrow begins today.
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
                <span>Building Futures.</span> We don't just design buildings;
                we craft the future. Every project we undertake holds the
                potential to leave a lasting impact, influencing the way people
                experience their world for years to come.
              </p>

              <p>
                <span>Crafting Futures.</span> We view architecture as a form of
                artistry, treating each project as a carefully honed craft. Our
                goal is to design spaces that not only serve their function but
                also inspire and resonate emotionally with those who experience
                them. It's our commitment to precision and exceptional
                craftsmanship that distinguishes our work from the rest.
              </p>

              <p>
                <span>Dreaming Futures.</span> We consider ourselves
                visionaries, fueled by creativity and forward-thinking ideas.
                Our aspirations are driven by innovation and a focus on the
                future. We aim to design spaces that go beyond today's demands,
                evolving seamlessly to address the needs of tomorrow.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div ref={ref} className="section_4">
        <motion.div style={{ opacity }} className="section_4_video_wrapper">
          <BackgroundVideo source={video_section_4} clase="video_section_4" />
          <div className="section_4_overlay"></div>
          <div className="section_4_txt">
            <h1>
              VUIT is not just an architecture studio; we are a collective of
              innovative minds working together.
            </h1>
            <a href="" className="link_txt">
              {" "}
              View talent
            </a>
          </div>
        </motion.div>
      </div>
      <div className="section_5">
        <div className="section_5_content">
          <EnhancedInfiniteCarrousel />
        </div>
      </div>
      <ShowcaseSlider />
    </>
  );
};
