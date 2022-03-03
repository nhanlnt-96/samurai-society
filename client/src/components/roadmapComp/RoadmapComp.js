import React, {useLayoutEffect, useState} from "react";
import {Container, Row} from "react-bootstrap";
import {RoadmapDesktop, RoadmapMobile} from "./components";

import "./RoadmapComp.scss";

const useWindowSize = () => {
  const [currentWidth, setCurrentWidth] = useState(0);
  useLayoutEffect(() => {
    const updateSize = () => {
      setCurrentWidth(window.innerWidth);
    };
    window.addEventListener("resize", updateSize);
    updateSize();
    return () => window.removeEventListener("resize", updateSize);
  }, []);
  return currentWidth;
};

const RoadmapComp = () => {
  const currentWidth = useWindowSize();
  return (
    <Container fluid className="roadmap-comp">
      <Container className="roadmap-comp-container">
        <div data-aos="fade-down" className="roadmap-comp-title">
          <h3>
            <em>road</em>
            map
          </h3>
        </div>
        <Row style={{marginTop: "24px"}}>
          {
            currentWidth <= 767 ? (
              <RoadmapMobile/>
            ) : (
              <RoadmapDesktop/>
            )
          }
        </Row>
      </Container>
    </Container>
  );
};

export default RoadmapComp;