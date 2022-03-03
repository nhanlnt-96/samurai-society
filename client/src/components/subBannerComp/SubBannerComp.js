import React from "react";
import {Container} from "react-bootstrap";
import {subBannerData} from "../../configs/subBannerData";

import "./SubBannerComp.scss";

const SubBannerComp = () => {
  return (
    <Container fluid className="sub-banner-comp">
      <div className="bg-blur"/>
      <div className="sub-banner-comp-container">
        {
          subBannerData.map((val, index) => (
            <div key={index} className="img-item">
              <img src={val} alt=""/>
            </div>
          ))
        }
        <div className="sub-banner-text">
          <h3>samurai society</h3>
        </div>
      </div>
    </Container>
  );
};

export default SubBannerComp;