import React from "react";
import {Container} from "react-bootstrap";
import HeaderComp from "../headerComp/HeaderComp";
import BannerComp from "../bannerComp/BannerComp";

const MainLayout = () => {
  return (
    <Container fluid
               className="main-layout"
               style={{
                 paddingLeft: 0,
                 paddingRight: 0
               }}>
      <BannerComp/>
    </Container>
  );
};

export default MainLayout;