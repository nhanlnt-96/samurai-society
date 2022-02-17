import React from "react";
import {Container} from "react-bootstrap";
import HeaderComp from "../headerComp/HeaderComp";

const MainLayout = () => {
  return (
    <Container fluid className="main-layout">
      <HeaderComp/>
    </Container>
  );
};

export default MainLayout;