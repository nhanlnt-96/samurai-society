import React from "react";
import ProcessTree from "../../../assets/imgs/roadmap/processTree.png";

export const RoadmapDesktop = () => {
  return (
    <div className="home_road_map_flex">
      <div className="home_road_map_inner">
        <div className="home_road_map_box home_road_map_box1"
             data-aos="fade-up"
             data-aos-duration="2000">
          <div className="home_road_map_text">
            <h3>Phase 1</h3>
            <p>Our first collection will be 7,777 unique NFTs, set to be launched in March. Stay tuned on discord for
              our official mint date.</p>
          </div>
        </div>
        <div className="home_road_map_box home_road_map_box2"
             data-aos="fade-up"
             data-aos-duration="3000">
          <div className="home_road_map_text">
            <h3>Phase 3</h3>
            <p>Q3 we will launch a crypto token which will be used in our game and the metaverse. This will leave an
              impact and all holders will have access to a private sale before launch.</p>
          </div>
        </div>
        <div className="home_road_map_box home_road_map_box3"
             data-aos="fade-up"
             data-aos-duration="4000">
          <div className="home_road_map_text">
            <h3>Phase 5</h3>
            <p>Official game release estimated end of Q4 2022, The nft you hold will be your registration card and will be your official skin in the game, certain Nfts will have special moves and power ups depending on
              the rarity of the NFT. Train your samurai and fight the enemy to claim Earth is your home planet!</p>
          </div>
        </div>
      </div>
      <div className="home_road_map_inner">
        <div className="home_road_map_img">
          <img src={ProcessTree} title="" alt=""/>
        </div>
      </div>
      <div className="home_road_map_inner">
        <div className="home_road_map_box home_road_map_box4"
             data-aos="fade-up"
             data-aos-duration="2000">
          <div className="home_road_map_text">
            <h3>Phase 2</h3>
            <p>Q2 we will release a 2nd drop of NFTs which will be mutated samurais and it will be a rare collection of
              only 4,444 NFTs.</p>
          </div>
        </div>
        <div className="home_road_map_box home_road_map_box5"
             data-aos="fade-up"
             data-aos-duration="3000">
          <div className="home_road_map_text">
            <h3>Phase 4</h3>
            <p>Q4 we will launch the beta of our samurai society game which will be compatible with IOS and other
              platforms. All holders of our NFT will be eligible for early access to the game.</p>
          </div>
        </div>
      </div>
    </div>
  );
};