import React from "react";
import {Parallax} from "react-parallax";
import HeaderComp from "../headerComp/HeaderComp";
import {Container} from "react-bootstrap";
import Banner from "../../assets/imgs/ape.png";

import "./BannerComp.scss";

const BannerComp = () => {
  return (
    <Parallax bgImage={Banner} strength={500} className="banner-comp">
      <HeaderComp/>
      <div className="bg-blur"/>
      <Container fluid className="banner-comp-container d-flex flex-column justify-content-center align-items-center">
        <Container className="banner-comp-content">
          <div data-aos="fade-up" className="banner-comp-title">
            <h1>
              <em>Welcome to</em>
              <br/>
              <span>The Samurai Society!</span>
            </h1>
            <h2>Which team will you join? Team Earth or Team Kepler</h2>
          </div>
        </Container>
        {/*<div className="banner-comp-btn comp-primary-btn">*/}
        {/*  <button data-aos="zoom-in" className="button-item">*/}
        {/*    <SiDiscord/>*/}
        {/*    Join Our Discord*/}
        {/*  </button>*/}
        {/*</div>*/}
      </Container>
    </Parallax>
  );
};

export default BannerComp;