import React, {useState} from "react";
import {Button, Col, Container, Row} from "react-bootstrap";
import {useDispatch, useSelector} from "react-redux";
import EditorTitle from "../../components/editorTitle/EditorTitle";
import EditorComp from "../../components/editor/EditorComp";
import api from "../../configs/axios";
import LoadingComp from "../../components/loadingComp/LoadingComp";
import {UploadImg} from "../../components/uploadImg";
import {finishUploadImg} from "../../redux/finishUpdate/finishUpdateAction";
import {getAboutContent} from "../../redux/aboutContent/aboutContentAction";
import IntroducingComp from "../../components/introducingComp/IntroducingComp";

const IntroducingEditor = () => {
  const dispatch = useDispatch();
  const aboutContent = useSelector((state) => state.aboutContent);
  const finishedUpdate = useSelector((state) => state.finishUpdate);
  const [isLoading, setIsLoading] = useState(false);
  const [introducingTitle, setIntroducingTitle] = useState("");
  const [introducingContent, setIntroducingContent] = useState("");
  const [imgInfo, setImgInfo] = useState({
    imageName: "",
    imageUrl: ""
  });
  const [isDeletedImg, setIsDeletedImg] = useState(false);
  const onRefreshPreview = () => {
    dispatch(getAboutContent());
  };
  const onUpdateBtnClick = async () => {
    setIsLoading(true);
    const response = await api.patch(`/about/update/${aboutContent.aboutData?.id}`, {
      title: introducingTitle || aboutContent.aboutData?.title,
      content: introducingContent || aboutContent.aboutData?.content,
      bgImageName: imgInfo.imageName || aboutContent.aboutData?.imageName,
      bgImageUrl: imgInfo.imageUrl || aboutContent.aboutData?.imageUrl
    });
    if (response.data.success) {
      setIsLoading(false);
      dispatch(finishUploadImg());
      setIsDeletedImg(false);
      setIntroducingTitle("");
      setIntroducingContent("");
      setImgInfo({
        imageName: "",
        imageUrl: ""
      });
      onRefreshPreview();
    }
  };
  
  return (
    <Container fluid className="editor-container">
      {
        aboutContent.aboutData?.length <= 0 ? (
          <LoadingComp/>
        ) : (
          <>
            <Row className="editor-top-container">
              <Col lg={6} md={6} sm={12} className="editor-item">
                <EditorTitle title={"Introducing's Title"}/>
                <EditorComp newValue={setIntroducingTitle} content={aboutContent?.aboutData?.title}/>
              </Col>
              <Col lg={6} md={6} sm={12} className="editor-item">
                <EditorTitle title={"Introducing's Content"}/>
                <EditorComp newValue={setIntroducingContent} content={aboutContent?.aboutData?.content}/>
              </Col>
            </Row>
            <Row className="editor-top-container">
              <Col className="editor-item">
                <EditorTitle title={(aboutContent.aboutData?.bgImageUrl || finishedUpdate?.isFinishUpdate) ? "Images" +
                  " uploaded" : imgInfo.imageUrl ? "Images Preview" : "Images uploaded"}/>
                <UploadImg imgFolder={"introducing"} imgInfo={imgInfo} setImgInfo={setImgInfo}
                           currentImgName={aboutContent?.aboutData?.imageName} setIsDeletedImg={setIsDeletedImg}
                           currentImgUrl={aboutContent?.aboutData?.imageUrl} isDeletedImg={false}/>
              </Col>
            </Row>
            <Row className="editor-update-button">
              <div className="update-button-container d-flex justify-content-center align-items-center">
                <Button className="update-btn" onClick={onUpdateBtnClick}
                        disabled={isLoading || (!introducingTitle && !introducingContent && (!isDeletedImg && !imgInfo.imageUrl))}>{isLoading ? "Updating" : "Update"}</Button>
              </div>
            </Row>
          </>
        )
      }
      <Row>
        <EditorTitle title={"Preview"}/>
        <div className="editor-preview-bg">
          <IntroducingComp/>
        </div>
      </Row>
    </Container>
  );
};

export default IntroducingEditor;