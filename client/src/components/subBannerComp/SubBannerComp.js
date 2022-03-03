import React, {useEffect} from "react";
import {Container} from "react-bootstrap";
import {subBannerData} from "../../configs/subBannerData";
import {useDispatch, useSelector} from "react-redux";
import {getCollectionsContent} from "../../redux/collectionsContent/collectionsContentAction";
import LoadingComp from "../loadingComp/LoadingComp";

import "./SubBannerComp.scss";

const SubBannerComp = () => {
  const dispatch = useDispatch();
  const collectionsContent = useSelector((state) => state.collectionsContent);
  useEffect(() => {
    dispatch(getCollectionsContent());
  }, []);
  return collectionsContent.collectionsData?.length <= 0 ? (
    <LoadingComp/>
  ) : (
    <Container fluid className="sub-banner-comp">
      <div className="bg-blur"/>
      <div className="sub-banner-comp-container">
        {
          collectionsContent.collectionsData?.collectionsImgContent?.map((val, index) => (
            <div key={index} className="img-item">
              <img src={val.imageUrl} alt={val.imageName}/>
            </div>
          ))
        }
        <div className="sub-banner-text">
          <div className="content"
               dangerouslySetInnerHTML={{__html: collectionsContent.collectionsData?.collectionsContent?.title}}/>
        </div>
      </div>
    </Container>
  );
};

export default SubBannerComp;