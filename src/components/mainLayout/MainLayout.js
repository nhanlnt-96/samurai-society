import React from "react";
import {Container, Row} from "react-bootstrap";
import BannerComp from "../bannerComp/BannerComp";
import WelcomeComp from "../welcomeComp/WelcomeComp";
import IntroducingComp from "../introducing/IntroducingComp";
import SubBannerComp from "../subBanner/SubBannerComp";

const MainLayout = () => {
  return (
    <Container fluid
               className="main-layout"
               style={{
                 paddingLeft: 0,
                 paddingRight: 0,
                 backgroundColor: "rgb(48, 51, 75)",
                 overflow: "hidden"
               }}>
      <Row id="home">
        <BannerComp/>
      </Row>
      <Row id="welcome">
        <WelcomeComp/>
      </Row>
      <Row id="introducing">
        <IntroducingComp/>
      </Row>
      <Row>
        <SubBannerComp/>
      </Row>
    </Container>
  );
};

export default MainLayout;