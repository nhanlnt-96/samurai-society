import React from "react";
import ProcessTree from "../../../assets/imgs/roadmap/processTree.png";

export const RoadmapDesktop = () => {
  return (
    <div className="home_road_map_flex">
      <div className="home_road_map_inner">
        <div
          className="home_road_map_box home_road_map_box1"
          data-aos="fade-up"
          data-aos-duration="2000"
        >
          <div className="home_road_map_text">
            <h3>Phase 1</h3>
            <p>
              Pre-Marketing, Mint date announcement release, Discord and website
              launch, Twitter Spaces.
            </p>
          </div>
        </div>
        <div
          className="home_road_map_box home_road_map_box2"
          data-aos="fade-up"
          data-aos-duration="3000"
        >
          <div className="home_road_map_text">
            <h3>Phase 3</h3>
            <p>NFT List for sale</p>
          </div>
        </div>
        <div
          className="home_road_map_box home_road_map_box3"
          data-aos="fade-up"
          data-aos-duration="4000"
        >
          <div className="home_road_map_text">
            <h3>Phase 5</h3>
            <p>
              Token, Physical Diamond and Gold Retail sales from retail stores
              and distributor and Reward distributions.
            </p>
          </div>
        </div>
      </div>
      <div className="home_road_map_inner">
        <div className="home_road_map_img">
          <img src={ProcessTree} title="" alt="" />
        </div>
      </div>
      <div className="home_road_map_inner">
        <div
          className="home_road_map_box home_road_map_box4"
          data-aos="fade-up"
          data-aos-duration="2000"
        >
          <div className="home_road_map_text">
            <h3>Phase 2</h3>
            <p>Minting, Marketing, Collaborations on social media</p>
          </div>
        </div>
        <div
          className="home_road_map_box home_road_map_box5"
          data-aos="fade-up"
          data-aos-duration="3000"
        >
          <div className="home_road_map_text">
            <h3>Phase 4</h3>
            <p>Merchandise, Exclusive collectables, Metaverse event.</p>
          </div>
        </div>
      </div>
    </div>
  );
};
