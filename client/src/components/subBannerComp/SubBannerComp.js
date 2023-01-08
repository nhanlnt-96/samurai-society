import React from "react";
import { Container } from "react-bootstrap";
import "./SubBannerComp.scss";
import { subBannerData } from "../../configs/subBannerData";

const SubBannerComp = () => {
  return (
    <Container fluid className="sub-banner-comp">
      <div className="bg-blur" />
      <div className="sub-banner-comp-container">
        {subBannerData.map((val, index) => (
          <div key={index} className="img-item">
            <img src={val} alt="sub-banner" />
          </div>
        ))}
        <div className="sub-banner-text">
          <h3>Lorem ipsum.</h3>
        </div>
      </div>
    </Container>
  );
};

export default SubBannerComp;
