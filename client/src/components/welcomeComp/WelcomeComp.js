import React, {useEffect} from "react";
import {Container, Row} from "react-bootstrap";
import {useDispatch, useSelector} from "react-redux";
import BtnIcon from "../../assets/icons/btn_img3.png";
import {getWelcomeContent} from "../../redux/welcomeContent/welcomeContentAction";
import LoadingComp from "../loadingComp/LoadingComp";

import "./WelcomeComp.scss";

const WelcomeComp = () => {
  const dispatch = useDispatch();
  const welcomeContent = useSelector((state) => state.welcomeContent);
  useEffect(() => {
    dispatch(getWelcomeContent());
  }, []);
  return welcomeContent.isLoading ? (
    <LoadingComp/>
  ) : (
    <Container fluid className="welcome-comp">
      <Container className="welcome-comp-container d-flex flex-column justify-content-center align-items-center">
        <Row className="welcome-comp-content">
          <div data-aos="fade-up"
               className="title"
               dangerouslySetInnerHTML={{__html: welcomeContent.welcomeData?.title}}/>
          <div data-aos="fade-up"
               className="sub-title"
               dangerouslySetInnerHTML={{__html: welcomeContent.welcomeData?.subTitle}}/>
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