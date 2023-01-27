import React from "react";
import { Container, Row } from "react-bootstrap";
import { ImQuotesLeft, ImQuotesRight } from "react-icons/all";

import "./BenefitsComp.scss";
import { benefitContentData } from "../../configs/benefitContentData";

const BenefitsComp = () => {
  return (
    <Container fluid className="benefit-comp">
      <Container className="benefit-comp-container">
        <div data-aos="fade-down" className="benefit-comp-title">
          <h3>
            <em>benefits</em> & ultilities
          </h3>
        </div>
        <Row className="benefit-comp-quotes">
          <div className="quotes-container d-flex justify-content-center align-items-center">
            <div className="left-icon icon-position">
              <ImQuotesLeft />
            </div>
            <div className="content-container d-flex flex-column justify-content-center align-items-center">
              <h3 className="question">
                Our Ice Ape NFT’s gives you exclusive entry to a real-world
                experience.
              </h3>
              <p className="answer">
                Some ICE APE nfts will serve as proof to get you a discount from
                retailers, and our Rare NFTs will serve as a gift system and
                rewards you a physical diamond. When you purchase an ICE APE or
                RARE ICE APE nft, you automatically become a member of our
                DIAMOND CLUB.
              </p>
            </div>
            <div className="right-icon icon-position">
              <ImQuotesRight />
            </div>
          </div>
        </Row>
        <Row className="benefit-comp-detail">
          {/*<h3 className="title">Lorem ipsum dolor sit amet, consectetur.</h3>*/}
          <div className="benefit-detail-container">
            {benefitContentData.map((val, index) => (
              <div key={index} className="detail-item">
                <div
                  data-aos="zoom-in"
                  className="content-container d-flex justify-content-center align-items-center"
                >
                  <p>{val.content}</p>
                </div>
                <div className="img-container">
                  <img src={val.img} alt="" />
                </div>
              </div>
            ))}
          </div>
        </Row>
      </Container>
    </Container>
  );
};

export default BenefitsComp;
