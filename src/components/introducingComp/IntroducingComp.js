import React from "react";
import {Col, Container, Row} from "react-bootstrap";
import LeftSideImg from "../../assets/imgs/introducingImg.png";
import BtnImg from "../../assets/icons/btn_img2.png";

import "./Introducing.scss";

const IntroducingComp = () => {
  return (
    <Container fluid className="introducing-comp">
      <Container className="introducing-comp-container">
        <Row className="introducing-comp-content">
          <Col data-aos="zoom-in"
               lg={5}
               md={5}
               sm={12}
               className="introducing-left-side d-flex justify-content-center align-items-center">
            <img src={LeftSideImg} alt=""/>
          </Col>
          <Col lg={7} md={7} sm={12} className="introducing-right-side d-flex flex-column justify-content-center">
            <div data-aos="fade-down" className="title-container">
              <h3 className="title">
                <em>Introducing</em>
                <br/>
                samurai society
              </h3>
            </div>
            <div className="content-container">
              <p data-aos="fade-up">Year 3088 after many years of wars the world has agreed to dismantle all arms and
                learn the way of the
                samurai to defend and attack any opposing threat. Our planet is under attack from martian aliens from
                exoplanet Kepler, they have advanced AI robots and plan on attacking and destroying humans and aliens to
                claim earth is their own. Humans and animals have evolved and learned advanced fighting skills in
                preparation and plan to defend themselves from the aliens and robots. Which force will you join and
                choose wisely otherwise you won't have a home planet! #teamearth or #teamkepler</p>
              <p data-aos="fade-up">Entering into the realm of the samurai means joining a family full of investors and
                NFT enthusiasts who
                believe in the future of cryptocurrencies and blockchain technology.</p>
            </div>
            <div data-aos="zoom-in" className="content-btn">
              <a className="btn-item">
                <img src={BtnImg} alt=""/>
                join our discord
              </a>
            </div>
          </Col>
        </Row>
      </Container>
    </Container>
  );
};

export default IntroducingComp;