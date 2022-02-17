import React from "react";
import Logo from "../../assets/imgs/logo.png";
import Social1 from "../../assets/icons/social1.png";
import Social2 from "../../assets/icons/social2.png";
import Social3 from "../../assets/icons/social3.png";
import Social4 from "../../assets/icons/social4.png";
import BtnImg1 from "../../assets/icons/btn_img1.png";
import MobileMenu from "../../assets/icons/mobile_menu.png";

import "./HeaderComp.scss";

const HeaderComp = () => {
  return (
    <React.Fragment>
      <header className="header_main desktop_header">
        <div className="container">
          <div className="header_inner">
            <div className="header_flex">
              <div className="header_menu header_menu1">
                <ul>
                  <li>
                    <a href="#home">HOME</a>
                  </li>
                  <li>
                    <a href="#intro">INTRODUCING SAMURAI SOCIETY</a>
                  </li>
                  <li>
                    <a href="#benefits">BENEFITS & UTILITIES</a>
                  </li>
                </ul>
              </div>
              <div className="header_logo">
                <a href="/" className="header_logo">
                  <img src={Logo} alt="logo"/>
                </a>
              </div>
              <div className="header_menu header_menu2">
                <ul>
                  <li>
                    <a href="#roadmap">ROADMAP</a>
                  </li>
                  <li>
                    <a href="#team">THE TEAM</a>
                  </li>
                  <li>
                    <a href="#faq">FAQ’S</a>
                  </li>
                  <li>
                    <a href="#" className="btn">Select wallet</a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="social_menu">
              <ul>
                <li>
                  <a href="#">
                    <img src={Social1} title="" alt=""/>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <img src={Social2} title="" alt=""/>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <img src={Social3} title="" alt=""/>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <img src={Social4} title="" alt=""/>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </header>
      <header className="mobile_header">
        <div className="container">
          <div className="mobile_header_flex">
            <div className="mobile_header_inner">
              <div className="mobile_header_logo">
                <a href="/" className="header_logo">
                  <img src={Logo} alt="logo"/>
                </a>
              </div>
            </div>
            <div className="mobile_header_inner">
              <ul>
                <li>
                  <a href="#" className="btn">
                    <img src={BtnImg1} title="" alt=""/>
                    Buy On Opensea
                  </a>
                </li>
                <li>
                  <img src={MobileMenu} title="" alt=""/>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </header>
    </React.Fragment>
  );
};

export default HeaderComp;