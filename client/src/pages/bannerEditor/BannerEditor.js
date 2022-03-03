import React, {useState} from "react";
import {Button, Col, Container, Row} from "react-bootstrap";
import {useDispatch, useSelector} from "react-redux";
import EditorTitle from "../../components/editorTitle/EditorTitle";
import EditorComp from "../../components/editor/EditorComp";
import {getBannerContent} from "../../redux/bannerContent/bannerContentAction";
import api from "../../configs/axios";
import LoadingComp from "../../components/loadingComp/LoadingComp";
import {UploadImg} from "../../components/uploadImg";
import BannerComp from "../../components/bannerComp/BannerComp";
import {finishUploadImg} from "../../redux/finishUpdate/finishUpdateAction";

const BannerEditor = () => {
  const dispatch = useDispatch();
  const bannerContent = useSelector((state) => state.bannerContent);
  const finishedUpdate = useSelector((state) => state.finishUpdate);
  const [isLoading, setIsLoading] = useState(false);
  const [bannerTitleInput, setBannerTitleInput] = useState("");
  const [bannerSubTitleInput, setBannerSubTitleInput] = useState("");
  const [imgBgInfo, setImgBgInfo] = useState({
    imageName: "",
    imageUrl: ""
  });
  const [isDeletedImg, setIsDeletedImg] = useState(false);
  const onRefreshPreview = () => {
    dispatch(getBannerContent());
  };
  const onUpdateBtnClick = async () => {
    setIsLoading(true);
    const response = await api.patch(`/banner/update/${bannerContent.bannerData?.id}`, {
      title: bannerTitleInput || bannerContent.bannerData?.title,
      subTitle: bannerSubTitleInput || bannerContent.bannerData?.subTitle,
      bgImageName: imgBgInfo.imageName || bannerContent.bannerData?.bgImageName,
      bgImageUrl: imgBgInfo.imageUrl || bannerContent.bannerData?.bgImageUrl
    });
    if (response.data.success) {
      setIsLoading(false);
      dispatch(finishUploadImg());
      setIsDeletedImg(false);
      setBannerTitleInput("");
      setBannerSubTitleInput("");
      setImgBgInfo({
        imageName: "",
        imageUrl: ""
      });
      onRefreshPreview();
    }
  };
  
  return (
    <Container fluid className="editor-container">
      {
        bannerContent.bannerData.length <= 0 ? (
          <LoadingComp/>
        ) : (
          <>
            <Row className="editor-top-container">
              <Col lg={6} md={6} sm={12} className="editor-item">
                <EditorTitle title={"Banner's Title"}/>
                <EditorComp newValue={setBannerTitleInput} content={bannerContent.bannerData?.title}/>
              </Col>
              <Col lg={6} md={6} sm={12} className="editor-item">
                <EditorTitle title={"Banner's Subtitle"}/>
                <EditorComp newValue={setBannerSubTitleInput} content={bannerContent.bannerData?.subTitle}/>
              </Col>
            </Row>
            <Row className="editor-top-container">
              <Col className="editor-item">
                <EditorTitle title={(bannerContent.bannerData?.bgImageUrl || finishedUpdate.isFinishUpdate) ? "Images" +
                  " uploaded" : imgBgInfo.imageUrl ? "Images Preview" : "Images uploaded"}/>
                <UploadImg imgFolder={"banner"} imgInfo={imgBgInfo} setImgInfo={setImgBgInfo}
                           currentImgName={bannerContent.bannerData?.bgImageName} setIsDeletedImg={setIsDeletedImg}
                           currentImgUrl={bannerContent.bannerData?.bgImageUrl} isDeletedImg={false}/>
              </Col>
            </Row>
            <Row className="editor-update-button">
              <div className="update-button-container d-flex justify-content-center align-items-center">
                <Button className="update-btn" onClick={onUpdateBtnClick}
                        disabled={isLoading || (!bannerTitleInput && !bannerSubTitleInput&& (!isDeletedImg && !imgBgInfo.imageUrl))}>{isLoading ? "Updating" : "Update"}</Button>
              </div>
            </Row>
          </>
        )
      }
      <Row>
        <EditorTitle title={"Preview"}/>
        <BannerComp/>
      </Row>
    </Container>
  );
};

export default BannerEditor;