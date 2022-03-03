import React, {useEffect} from "react";
import {Parallax} from "react-parallax";
import HeaderComp from "../headerComp/HeaderComp";
import {Col, Container, Row} from "react-bootstrap";
import Banner from "../../assets/imgs/ape.png";
import {useDispatch, useSelector} from "react-redux";
import MintBox from "../mintBox/MintBox";
import {connect} from "../../redux/blockchain/blockchainActions";
import {fetchData} from "../../redux/data/dataActions";
import ToastNoti from "../toastNoti/ToastNoti";
import {getBannerContent} from "../../redux/bannerContent/bannerContentAction";

import "./BannerComp.scss";
import LoadingComp from "../loadingComp/LoadingComp";

const BannerComp = () => {
  const dispatch = useDispatch();
  const bannerContent = useSelector((state) => state.bannerContent);
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
  useEffect(() => {
    dispatch(getBannerContent());
  }, []);
  return bannerContent?.isLoading ? (
    <LoadingComp/>
  ) : (
    <Parallax bgImage={bannerContent.bannerData?.bgImageUrl} strength={500} className="banner-comp">
      <HeaderComp connectWallet={connectWalletBtnClick}/>
      <div className="bg-blur"/>
      <Container fluid className="banner-comp-container d-flex flex-column justify-content-center align-items-center">
        <Container className="banner-comp-content">
          <Row>
            <Col lg={blockchain.account ? 6 : 12}
                 md={blockchain.account ? 6 : 12}
                 sm={12}
                 className="banner-comp-title d-flex flex-column justify-content-center align-items-center">
              <div className="banner-title"
                   data-aos="fade-up"
                   dangerouslySetInnerHTML={{__html: bannerContent.bannerData?.title}}/>
              <div className="banner-subtitle"
                   data-aos="fade-up"
                   dangerouslySetInnerHTML={{__html: bannerContent.bannerData?.subTitle}}/>
            </Col>
            {
              blockchain.account && (
                <Col lg={6} md={6} sm={12}>
                  <MintBox/>
                </Col>
              )
            }
          </Row>
        </Container>
      </Container>
      <ToastNoti errorMsg={blockchain.errorMsg}/>
    </Parallax>
  );
};

export default BannerComp;