import React from "react";
import { Container, Row } from "react-bootstrap";
import BtnIcon from "../../assets/icons/btn_img3.png";
import "./WelcomeComp.scss";

const WelcomeComp = () => {
  return (
    <Container fluid className="welcome-comp">
      <Container className="welcome-comp-container d-flex flex-column justify-content-center align-items-center">
        <Row className="welcome-comp-content">
          <h6 data-aos="fade-up" className="title aos-init aos-animate">
            DIAMOND CLUB EXCLUSIVE MEMBERS
          </h6>
          <p data-aos="fade-up" className="sub-title aos-init aos-animate">
            Diamond Club Members will receive loose diamonds to use at their own
            disposal. Once you adopt and ICE APE and become a member, you can
            use it where you desire. VVS1, VVS2 Clarity loose diamonds only.
            Retail value of 1 carat VVS loose diamonds are anywhere between
            $3,000 to $18,000 or even more in USD.
          </p>
        </Row>
        <Row className="welcome-comp-button">
          <button data-aos="zoom-in" className="button-item">
            <span>view all collection</span>
            <img src={BtnIcon} alt="" />
          </button>
        </Row>
      </Container>
    </Container>
  );
};

export default WelcomeComp;
