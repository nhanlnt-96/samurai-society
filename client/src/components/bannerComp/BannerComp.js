import React from "react";
import { Parallax } from "react-parallax";
import HeaderComp from "../headerComp/HeaderComp";
import { Col, Container, Row } from "react-bootstrap";
import Banner from "../../assets/imgs/ape.png";
import { useDispatch, useSelector } from "react-redux";
import MintBox from "../mintBox/MintBox";
import { connect } from "../../redux/blockchain/blockchainActions";
import { fetchData } from "../../redux/data/dataActions";
import ToastNoti from "../toastNoti/ToastNoti";

import "./BannerComp.scss";

const BannerComp = () => {
  const dispatch = useDispatch();
  const blockchain = useSelector((state) => state.blockchain);
  const getData = () => {
    if (blockchain.account !== "" && blockchain.smartContract !== null) {
      dispatch(fetchData(blockchain.account));
    }
  };
  const connectWalletBtnClick = (e) => {
    e.preventDefault();
    dispatch(connect());
    getData();
  };

  return (
    <Parallax bgImage={Banner} strength={500} className="banner-comp">
      <HeaderComp connectWallet={connectWalletBtnClick} />
      <div className="bg-blur" />
      <Container
        fluid
        className="banner-comp-container d-flex flex-column justify-content-center align-items-center"
      >
        <Container className="banner-comp-content">
          <Row>
            <Col
              lg={blockchain.account ? 6 : 12}
              md={blockchain.account ? 6 : 12}
              sm={12}
              className="banner-comp-title d-flex flex-column justify-content-center align-items-center"
            >
              <h1 data-aos="fade-up" className="aos-init aos-animate">
                <em>Welcome to</em>
                <br />
                <span>ICE APE CLUB</span>
              </h1>
              <h2 data-aos="fade-up" className="aos-init aos-animate">
                Join the club, adopt and ICE APE and reap the rewards of the
                Diamond Club
              </h2>
            </Col>
            {blockchain.account && (
              <Col lg={6} md={6} sm={12}>
                <MintBox />
              </Col>
            )}
          </Row>
        </Container>
      </Container>
      <ToastNoti errorMsg={blockchain.errorMsg} />
    </Parallax>
  );
};

export default BannerComp;
