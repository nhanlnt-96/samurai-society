import React, { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import BtnImg from "../../assets/icons/btn_img2.png";
import "./Introducing.scss";
import Img1 from "../../assets/imgs/introducingImg.png";

const IntroducingComp = () => {
  const [isShowMore, setIsShowMore] = useState(false);
  return (
    <Container fluid className="introducing-comp">
      <Container className="introducing-comp-container">
        <Row className="introducing-comp-content">
          <Col
            data-aos="zoom-in"
            lg={5}
            md={5}
            sm={12}
            className="introducing-left-side d-flex justify-content-center align-items-center"
          >
            <img src={Img1} alt="introduction" />
          </Col>
          <Col
            lg={7}
            md={7}
            sm={12}
            className="introducing-right-side d-flex flex-column justify-content-center"
          >
            <div data-aos="fade-down" className="title-container">
              <h3 className="title">
                <em>Introducing</em>
                <br />
                Lorem ipsum.
              </h3>
            </div>
            <div className="content-container">
              <p data-aos="fade-up" className="aos-init aos-animate">
                Early 2023, a rare species of field Apes was being transported
                from their native habitat to the continent of Africa for a
                special retreat. But something went wrong along the way. There
                was a plot to destroy this generation of Apes by an evil pilot.
                To successfully complete his mission, he took a different route
                and dropped off the Apes to freeze in the South Pole.
              </p>
              <p data-aos="fade-up" className="aos-init aos-animate">
                After weeks of trying to adapt and survive to their new
                conditions, the troop of Apes ventured off in hopes to find a
                way back home. Throughout their journey, the Apes started to
                learn how to survive in, what they hope will be, their temporary
                climate. One night, unfortunately the temperature dropped below,
                and the winds were roaring. The Apes knew a storm was coming and
                they wouldn’t make it through the night. So, they went to seek
                cover in a cave at the top of the mountains, past the tundra.
                The Apes travelled for days to seek refuge and finally found a
                place to settle.
              </p>
              {isShowMore ? (
                <>
                  <p data-aos="fade-up" className="aos-init aos-animate">
                    Going deeper and deeper into the cave, to block out the
                    treacherous cold, one of The Apes discovered a heap of
                    material that they later confirmed to be crystalized carbon
                    etched deep into the Cave’s wall. Through their attempt of
                    assimilation, they now identify themselves as ICE APES
                    because of their habitat’s condition and their newly found
                    treasures appearance replicating the image of formed ice.
                  </p>
                  <p data-aos="fade-up" className="aos-init aos-animate">
                    We were able to connect via transmitter and speak with the
                    Alpha Ape who let us know the Apes are freezing. We asked
                    Alpha Ape to send us a sample of the discovered material
                    they found to confirm the substance looking like Ice.
                  </p>
                  <p data-aos="fade-up" className="aos-init aos-animate">
                    While explaining this crystalized carbon to us here at The
                    Tuluris towers, we understood these crystalized carbon
                    pieces to be a known element called Diamonds. This element
                    is well known as a commodity in certain parts of the world.{" "}
                  </p>
                  <p data-aos="fade-up" className="aos-init aos-animate">
                    The idea is to use the diamonds as leverage for their
                    rescue, everyone loves diamonds! Our specialist says, the
                    Ice that was found by the Apes is indeed Diamond, worth
                    thousands, even tens of thousands, and some even millions.
                    We are gathering people from around the world to help save
                    the Ice Apes. They’re out of their natural habitat and will
                    freeze into extinction without adoption. If you want to help
                    rescue an ICE APE, there are rewards involved that you will
                    not refuse.
                  </p>
                  <p data-aos="fade-up" className="aos-init aos-animate">
                    When you adopt an Ice Ape, you’ll receive and NFT. Store the
                    NFT safely into your digital wallet. Use it as proof that
                    you are a part of our ICE APE DIAMOND CLUB and rescue
                    mission. In exchange for helping the ICE APES get back to
                    their natural place of birth, you’ll be immediately rewarded
                    with a club membership. This membership is exclusive to
                    rescuers who hold these NFT’s. The Diamond Club Membership
                    gives you access to huge discounts on custom jewelry or
                    loose diamonds (crystalized carbon). Adopt a Rare ICE APE
                    and receive the Rare ICE APE NFT that gives you 1 carat VVS
                    Diamond, delivered straight to your door. We are working
                    together, creating tons of benefits to our rescuers when you
                    help save an ICE APE.{" "}
                  </p>
                  <p data-aos="fade-up" className="aos-init aos-animate">
                    We are preparing a plane to get the Apes home, but we need
                    your help. Adopt an ICE Ape and reap big rewards today. See
                    the details on this site of how much it will cost to help.
                    Thank you for helping ICE APES get home safe, and becoming a
                    part of the ICE APE DIAMOND CLUB.
                  </p>
                </>
              ) : (
                <></>
              )}
              <button className="read-more-btn" onClick={() => setIsShowMore(!isShowMore)}>
                {isShowMore ? "Read less" : "Read more"}
              </button>
            </div>
            <div data-aos="zoom-in" className="content-btn">
              <a className="btn-item">
                <img src={BtnImg} alt="" />
                join our discord
              </a>
            </div>
          </Col>
        </Row>
      </Container>
    </Container>
  );
};

export default IntroducingComp;
