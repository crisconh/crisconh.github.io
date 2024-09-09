import { useRef, useState } from "react";
import carrousel_img_1 from "../assets/Vuital/jpeg-optimizer_modern-house-entrance-with-garden-and-wooden-deck-2023-11-27-05-11-36-utc.jpg";
import carrousel_img_2 from "../assets/Vuital/jpeg-optimizer_modern-house-exterior-2023-11-27-05-08-12-utc.jpg";
import carrousel_img_3 from "../assets/Vuital/jpeg-optimizer_modern-house-exterior-2023-11-27-05-21-58-utc.jpg";
import carrousel_img_4 from "../assets/Vuital/jpeg-optimizer_modern-house-exterior-2023-11-27-05-28-56-utc.jpg";
import carrousel_img_5 from "../assets/Vuital/jpeg-optimizer_spacious-bright-corridor-with-stairs-and-entrance-2023-11-27-04-54-04-utc.jpg";
import carrousel_img_6 from "../assets/Vuital/jpeg-optimizer_facade-of-modern-high-rise-residential-building-2023-11-27-05-05-36-utc.jpg";

export const ShowcaseSlider = () => {
  //DRAGABLE CARROUSEL START
  const itemsRef = useRef<HTMLDivElement>(null);
  const [isMouseDown, setIsMouseDown] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  const handleMouseDown = (e:any) => {
    setIsMouseDown(true);
    if (!itemsRef.current) return
    setStartX(e.pageX - -itemsRef.current.offsetLeft);
    setScrollLeft(itemsRef.current.scrollLeft);
  };
  const handleMouseLeave = () => {
    setIsMouseDown(false);
  };
  const handleMouseUp = () => {
    setIsMouseDown(false);
  };
  const handleMouseMove = (e:any) => {
    if (!isMouseDown) return;
    e.preventDefault();
    if (!itemsRef.current) return
    const x = e.pageX - itemsRef.current.offsetLeft;
    const walk = (x - startX) * 0.8; //adjust the speed
    itemsRef.current.scrollLeft = scrollLeft - walk;
  };

  //DRAGABLE CARROUSEL END

  return (
    <>
      <div className="showcase_section">
        <div className="showcase_wrapper">
          <div className="showcase_header">
            <div className="showcase_title">
              <span>Our</span>
              <span>projects</span>
            </div>
            <div className="more_projects">
              <a className="link_txt black" href="">
                View all projects
              </a>
            </div>
          </div>

          <div
            className="carrousel_container"
            ref={itemsRef}
            onMouseDown={handleMouseDown}
            onMouseLeave={handleMouseLeave}
            onMouseUp={handleMouseUp}
            onMouseMove={handleMouseMove}
          >
            <div className="carrousel">
              <div className="carrousel_element">
                <div className="carrousel_element_int">
                  <div className="carrousel_circle">
                    <img
                      src={carrousel_img_1}
                      alt=""
                      className="carrousel_img" draggable="false"
                    />
                  </div>
                  <div className="carrousel_text">Felanitx</div>
                </div>
              </div>
              <div className="carrousel_element">
                <div className="carrousel_element_int">
                  <div className="carrousel_circle">
                    <img
                      src={carrousel_img_2}
                      alt=""
                      className="carrousel_img" draggable="false"
                    />
                  </div>
                  <div className="carrousel_text">Sineu</div>
                </div>
              </div>
              <div className="carrousel_element">
                <div className="carrousel_element_int">
                  <div className="carrousel_circle">
                    <img
                      src={carrousel_img_3}
                      alt=""
                      className="carrousel_img" draggable="false"
                    />
                  </div>
                  <div className="carrousel_text">Son Vida</div>
                </div>
              </div>
              <div className="carrousel_element">
                <div className="carrousel_element_int">
                  <div className="carrousel_circle">
                    <img
                      src={carrousel_img_4}
                      alt=""
                      className="carrousel_img" draggable="false"
                    />
                  </div>
                  <div className="carrousel_text">Santa Ponsa</div>
                </div>
              </div>
              <div className="carrousel_element">
                <div className="carrousel_element_int">
                  <div className="carrousel_circle">
                    <img
                      src={carrousel_img_5}
                      alt=""
                      className="carrousel_img" draggable="false"
                    />
                  </div>
                  <div className="carrousel_text">Port d'Andratx</div>
                </div>
              </div>
              <div className="carrousel_element">
                <div className="carrousel_element_int">
                  <div className="carrousel_circle">
                    <img
                      src={carrousel_img_6}
                      alt=""
                      className="carrousel_img" draggable="false"
                    />
                  </div>
                  <div className="carrousel_text">Palma</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
