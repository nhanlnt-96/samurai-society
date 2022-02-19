import React from "react";
import {Container, Row} from "react-bootstrap";
import BannerComp from "../bannerComp/BannerComp";
import WelcomeComp from "../welcomeComp/WelcomeComp";
import IntroducingComp from "../introducingComp/IntroducingComp";
import SubBannerComp from "../subBannerComp/SubBannerComp";
import NftExplainComp from "../nftExplainComp/NftExplainComp";

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
      <Row id="nft-explain">
        <NftExplainComp/>
      </Row>
    </Container>
  );
};

export default MainLayout;