import React from "react";
import { Container, Row } from "react-bootstrap";
import BannerComp from "../../components/bannerComp/BannerComp";
import WelcomeComp from "../../components/welcomeComp/WelcomeComp";
import IntroducingComp from "../../components/introducingComp/IntroducingComp";
import SubBannerComp from "../../components/subBannerComp/SubBannerComp";
import Membership from "../../components/membershipComp/Membership";
import BenefitsComp from "../../components/benefitsComp/BenefitsComp";
import RoadmapComp from "../../components/roadmapComp/RoadmapComp";
import TeamComp from "../../components/teamComp/TeamComp";
import FaqComp from "../../components/faqComp/FaqComp";

const Homepage = () => {
  return (
    <Container
      fluid
      className="main-layout"
      style={{
        paddingLeft: 0,
        paddingRight: 0,
        backgroundColor: "rgb(48, 51, 75)",
        overflow: "hidden",
      }}
    >
      <Row id="home">
        <BannerComp />
      </Row>
      <Row id="welcome">
        <WelcomeComp />
      </Row>
      <Row id="introducing">
        <IntroducingComp />
      </Row>
      <Row>
        <SubBannerComp />
      </Row>
      <Row id="nft-explain">
        <Membership />
      </Row>
      <Row id="benefit">
        <BenefitsComp />
      </Row>
      <Row id="roadmap">
        <RoadmapComp />
      </Row>
      <Row id="team">
        <TeamComp />
      </Row>
      <Row id="faq">
        <FaqComp />
      </Row>
    </Container>
  );
};

export default Homepage;
