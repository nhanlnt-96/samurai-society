import React from "react";
import {Accordion, Col, Container, Row} from "react-bootstrap";
import {faqData} from "../../configs/faqData";
import Email from "../../assets/icons/email.png";
import Message from "../../assets/icons/message.png";

import "./FaqComp.scss";

const FaqComp = () => {
  return (
    <Container fluid className="faq-comp">
      <Container className="faq-comp-container d-flex flex-column justify-content-center align-items-center">
        <div data-aos="fade-down" className="faq-comp-title">
          <h3>
            <em>frequently</em>
            <br/>
            asked questions
          </h3>
        </div>
        <Row className="faq-comp-content">
          <Accordion className="accordion-container">
            {
              faqData.map((val, index) => (
                <Accordion.Item key={index} data-aos="zoom-in" eventKey={`${index}`}>
                  <Accordion.Header className="accordion-header-custom">{val.question}</Accordion.Header>
                  <Accordion.Body className="accordion-body-custom">{val.answer}</Accordion.Body>
                </Accordion.Item>
              ))
            }
          </Accordion>
        </Row>
        <Row className="faq-comp-social">
          <Col lg={6} md={6} sm={12} className="social-container">
            <img src={Email} alt=""/>
            <a href="mailto:SecretsamuraisocietyNFT@gmail.com"
               className="social-item">SecretsamuraisocietyNFT@gmail.com
            </a>
          </Col>
          <Col lg={6} md={6} sm={12} className="social-container">
            <img src={Message} alt=""/>
            <a href="https://t.me/SSSNFT" className="social-item">https://t.me/SSSNFT</a>
          </Col>
        </Row>
      </Container>
    </Container>
  );
};

export default FaqComp;