import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import BtnImg from "../../assets/icons/btn_img2.png";
import "./Introducing.scss";
import Img1 from "../../assets/imgs/introducingImg.png";

const IntroducingComp = () => {
  return (
    <Container fluid className="introducing-comp">
      <Container className="introducing-comp-container">
        <Row className="introducing-comp-content">
          <Col
            data-aos="zoom-in"
            lg={5}
            md={5}
            sm={12}
            className="introducing-left-side d-flex justify-content-center align-items-center"
          >
            <img src={Img1} alt="introduction" />
          </Col>
          <Col
            lg={7}
            md={7}
            sm={12}
            className="introducing-right-side d-flex flex-column justify-content-center"
          >
            <div data-aos="fade-down" className="title-container">
              <h3 className="title">
                <em>Introducing</em>
                <br />
                Lorem ipsum.
              </h3>
            </div>
            <div className="content-container">
              <p data-aos="fade-up" className="aos-init aos-animate">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Aliquid amet cupiditate ea fugiat harum nulla perferendis quia.
                Aliquid amet assumenda, consectetur, eius harum in laudantium
                nostrum provident reiciendis, sapiente ut vel veritatis
                voluptates! Accusamus aut, autem beatae cum deleniti distinctio
                dolor dolore doloremque dolorum earum et, illum in inventore
                maxime molestiae molestias neque nisi nobis nulla numquam odio
                quaerat rem repellendus temporibus veritatis. Animi, atque cum
                cupiditate dolorum impedit libero minima officia officiis.
                Asperiores, atque commodi deserunt dolorum eveniet laborum
                libero nisi nostrum nulla numquam perferendis porro quae,
                quaerat ullam velit? Ad deleniti impedit iusto porro quaerat
                saepe sit tenetur!
              </p>
              <p data-aos="fade-up" className="aos-init aos-animate">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias
                aut incidunt ipsa itaque mollitia pariatur recusandae. Ducimus
                eos eveniet fugit maxime necessitatibus! Culpa earum error,
                illum ipsa itaque labore quaerat quos veritatis vero? Accusamus
                cumque cupiditate ex sunt veritatis. Assumenda aut deleniti
                explicabo facilis molestias necessitatibus qui quia vero vitae.
              </p>
            </div>
            <div data-aos="zoom-in" className="content-btn">
              <a className="btn-item">
                <img src={BtnImg} alt="" />
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
