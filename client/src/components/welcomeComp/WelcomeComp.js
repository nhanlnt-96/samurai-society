import React from "react";
import {Container, Row} from "react-bootstrap";
import BtnIcon from "../../assets/icons/btn_img3.png";

import "./WelcomeComp.scss";

const WelcomeComp = () => {
  return (
    <Container fluid className="welcome-comp">
      <Container className="welcome-comp-container d-flex flex-column justify-content-center align-items-center">
        <Row className="welcome-comp-content">
          <h6 data-aos="fade-up" className="title">Welcome To The Exclusive Samurai Society</h6>
          <p data-aos="fade-up" className="sub-title">Join this ultra-exclusive NFT project not only featuring authentic
            art,
            but unmatched utility!</p>
        </Row>
        <Row className="welcome-comp-button">
          <button data-aos="zoom-in" className="button-item">
            <span>view all collection</span>
            <img src={BtnIcon} alt=""/>
          </button>
        </Row>
      </Container>
    </Container>
  );
};

export default WelcomeComp;