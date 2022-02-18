import React from "react";
import Banner from "../../assets/imgs/ape.png";

import "./BannerComp.scss";

const BannerComp = () => {
  return (
    <div className="home_banner" id="home">
      <div className="bg-blur"/>
      <div className="hidden-xs">
        <img src={Banner} title="" alt="" width="100%"/>
      </div>
      <div className="visible-xs">
        <img src={Banner} title="" alt="" width="100%"/>
      </div>
      <div className="home_banner_position">
        <div className="home_banner_text" data-aos="fade-up" data-aos-duration="1000">
          <h4>Ready to take over the Metaverse and the NFT Space</h4>
          <h3>
            <em>JOIN</em>
            <span>BORED</span>
            BUNNY
          </h3>
          <p>Bored Bunny is your ticket into the largest and fastest growing NFT Project</p>
          <div className="btn_flex">
            <div className="btn_flex_inner">
              <a href="#" className="btn"> Mint is Live</a>
            </div>
          </div>
        </div>
      </div>
      <div className="scroll_down"/>
    </div>
  );
};

export default BannerComp;