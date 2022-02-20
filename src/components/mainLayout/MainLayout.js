import React from "react";
import {Container, Row} from "react-bootstrap";
import BannerComp from "../bannerComp/BannerComp";
import WelcomeComp from "../welcomeComp/WelcomeComp";
import IntroducingComp from "../introducingComp/IntroducingComp";
import SubBannerComp from "../subBannerComp/SubBannerComp";
import NftExplainComp from "../nftExplainComp/NftExplainComp";
import BenefitsComp from "../benefitsComp/BenefitsComp";
import RoadmapComp from "../roadmapComp/RoadmapComp";
import TeamComp from "../teamComp/TeamComp";

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
      <Row id="benefit">
        <BenefitsComp/>
      </Row>
      <Row id="roadmap">
        <RoadmapComp/>
      </Row>
      <Row id="team">
        <TeamComp/>
      </Row>
    </Container>
  );
};

export default MainLayout;