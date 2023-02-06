import React, { useEffect } from "react";
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
import { useLocation } from "react-router-dom";

const Homepage = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    if (pathname) {
      const htmlElement = document.querySelector("html");
      htmlElement.style.scrollBehavior = "auto";

      document.getElementById(pathname?.replace("/", ""))?.scrollIntoView(true);

      htmlElement.style.scrollBehavior = "smooth";
    }
  }, [pathname]);
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
      <Row id="members">
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
