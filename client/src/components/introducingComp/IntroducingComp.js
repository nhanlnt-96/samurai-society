import React, {useEffect} from "react";
import {Col, Container, Row} from "react-bootstrap";
import LeftSideImg from "../../assets/imgs/introducingImg.png";
import BtnImg from "../../assets/icons/btn_img2.png";

import "./Introducing.scss";
import {useDispatch, useSelector} from "react-redux";
import {getAboutContent} from "../../redux/aboutContent/aboutContentAction";
import LoadingComp from "../loadingComp/LoadingComp";

const IntroducingComp = () => {
  const dispatch = useDispatch();
  const aboutContent = useSelector((state) => state.aboutContent);
  useEffect(() => {
    dispatch(getAboutContent());
  }, []);
  return aboutContent?.isLoading ? (
    <LoadingComp/>
  ) : (
    <Container fluid className="introducing-comp">
      <Container className="introducing-comp-container">
        <Row className="introducing-comp-content">
          <Col data-aos="zoom-in"
               lg={5}
               md={5}
               sm={12}
               className="introducing-left-side d-flex justify-content-center align-items-center">
            <img src={aboutContent?.aboutData?.imageUrl} alt={aboutContent?.aboutData?.imageName}/>
          </Col>
          <Col lg={7} md={7} sm={12} className="introducing-right-side d-flex flex-column justify-content-center">
            <div data-aos="fade-down" className="title-container">
              <div className="title" dangerouslySetInnerHTML={{__html: aboutContent?.aboutData?.title}}/>
            </div>
            <div className="content-container">
              <div data-aos="fade-up"
                   className="content"
                   dangerouslySetInnerHTML={{__html: aboutContent?.aboutData?.content}}/>
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