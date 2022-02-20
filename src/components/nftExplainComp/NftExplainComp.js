import React from "react";
import {Container} from "react-bootstrap";
import {nftExplainData} from "../../configs/nftExplainData";

import "./NftExplainComp.scss";

const NftExplainComp = () => {
  return (
    <Container fluid className="nft-explain-comp">
      <Container className="nft-explain-container d-flex flex-column justify-content-center align-items-center">
        <div data-aos="fade-down" className="nft-explain-title">
          <h3>
            <em>NFT</em>
            {" "}
            explain
          </h3>
        </div>
        <div className="card-container d-flex justify-content-center align-items-center flex-wrap">
          {
            nftExplainData.map((val, index) => (
              <div data-aos="zoom-in" key={index} className="card">
                <div className="circle">
                  <div className="img-container d-flex justify-content-center align-items-center">
                    <div className={`${val.img.length === 4 && "img-grid"}`}>
                      {
                        val.img.map((imgItem, itemKey) => (
                          <img key={itemKey} src={imgItem} alt=""/>
                        ))
                      }
                    </div>
                  </div>
                  <h2 className="name">{val.imgName}</h2>
                </div>
                <div className="content">
                  <p>{val.content}</p>
                </div>
              </div>
            ))
          }
        </div>
      </Container>
    </Container>
  );
};

export default NftExplainComp;