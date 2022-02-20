import React from "react";
import {Container, Row} from "react-bootstrap";
import {ImQuotesLeft, ImQuotesRight} from "react-icons/all";

import "./BenefitsComp.scss";
import {benefitContentData} from "../../configs/benefitContentData";

const BenefitsComp = () => {
  return (
    <Container fluid className="benefit-comp">
      <Container className="benefit-comp-container">
        <div data-aos="fade-down" className="benefit-comp-title">
          <h3>
            <em>benefits</em>
            {" "}
            & ultilities
          </h3>
        </div>
        <Row className="benefit-comp-quotes">
          <div className="quotes-container d-flex justify-content-center align-items-center">
            <div className="left-icon icon-position">
              <ImQuotesLeft/>
            </div>
            <div className="content-container d-flex flex-column justify-content-center align-items-center">
              <h3 className="question">Why invest in samurai society?</h3>
              <p className="answer">We are the future of the metaverse and with our amazing project investors we are
                expecting great returns. The utility holds great value in revolutionizing gaming as we know it in the
                metaverse. With our goals set we will grow and expand our project to be remembered for generations.</p>
            </div>
            <div className="right-icon icon-position">
              <ImQuotesRight/>
            </div>
          </div>
        </Row>
        <Row className="benefit-comp-detail">
          <h3 className="title">Benefit of investing in samurai society:</h3>
          <div className="benefit-detail-container">
            {
              benefitContentData.map((val, index) => (
                <div key={index} className="detail-item">
                  <div data-aos="zoom-in"
                       className="content-container d-flex justify-content-center align-items-center">
                    <p>{val.content}</p>
                  </div>
                  <div className="img-container">
                    <img src={val.img} alt=""/>
                  </div>
                </div>
              ))
            }
          </div>
        </Row>
      </Container>
    </Container>
  );
};

export default BenefitsComp;