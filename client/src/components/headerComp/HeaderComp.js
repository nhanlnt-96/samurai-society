import React, { useState } from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import Logo from "../../assets/imgs/logo.png";

import "./HeaderComp.scss";
import { socialData } from "../../configs/socialData";

const HeaderComp = ({ connectWallet }) => {
  const [isActive, setIsActive] = useState(false);
  return (
    <Navbar collapseOnSelect expand="lg" className="header-comp flex-column">
      <Container className="header-comp-social">
        <div className="header-comp-social-container">
          {socialData.map((val, index) => (
            <div key={index} className="social-item">
              <a href={val.socialUrl} className="item">
                <img src={val.socialIcon} alt="" />
              </a>
            </div>
          ))}
        </div>
      </Container>
      <Container className="header-comp-container">
        <Navbar.Brand href="#home" className="header-comp-mobile-screen">
          <img src={Logo} alt="bored-bunny" />
        </Navbar.Brand>
        <Navbar.Toggle
          aria-controls="responsive-navbar-nav"
          onClick={() => setIsActive(!isActive)}
          className={`header-comp-toggle-custom ${isActive && "active"}`}
        >
          <span className="toggle-line" />
          <span className="toggle-line" />
          <span className="toggle-line" />
        </Navbar.Toggle>
        <Navbar.Collapse
          id="responsive-navbar-nav"
          className="header-navbar-menu"
        >
          <Nav className="me-auto left-side-menu">
            <Nav.Link
              href="#introducing"
              className="menu-item d-flex flex-column justify-content-center align-items-center"
            >
              <span>introducing samurai society</span>
            </Nav.Link>
            <Nav.Link href="#benefits" className="menu-item">
              BENEFITS & UTILITIES
            </Nav.Link>
          </Nav>
          <Navbar.Brand href="#home" className="navbar-logo">
            <img src={Logo} alt="bored-bunny" />
          </Navbar.Brand>
          <Nav className="right-side-menu">
            <Nav.Link href="#roadmap" className="menu-item">
              roadmap
            </Nav.Link>
            <Nav.Link href="#team" className="menu-item">
              The team
            </Nav.Link>
            <Nav.Link href="#faq" className="menu-item">
              faq's
            </Nav.Link>
          </Nav>
          <Nav className="header-comp-button d-flex justify-content-center align-items-center">
            <button onClick={connectWallet} className="connect-wallet-button">
              Select wallet
            </button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default HeaderComp;
