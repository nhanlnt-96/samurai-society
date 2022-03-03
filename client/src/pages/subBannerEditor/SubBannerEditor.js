import React, {useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {Button, Col, Container, Row} from "react-bootstrap";
import {getCollectionsContent} from "../../redux/collectionsContent/collectionsContentAction";
import api from "../../configs/axios";
import EditorTitle from "../../components/editorTitle/EditorTitle";
import EditorComp from "../../components/editor/EditorComp";
import {UploadMultiImg} from "../../components/uploadImg";
import SubBannerComp from "../../components/subBannerComp/SubBannerComp";
import {finishUploadImg} from "../../redux/finishUpdate/finishUpdateAction";

const SubBannerEditor = () => {
  const dispatch = useDispatch();
  const collectionsContent = useSelector((state) => state.collectionsContent);
  const uploadedImgsData = useSelector((state) => state.uploadedImgsData);
  const finishedUpdate = useSelector((state) => state.finishUpdate);
  const [collectionTitle, setCollectionTitle] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const onRefreshPreview = () => {
    dispatch(getCollectionsContent());
  };
  const uploadContentFunc = async () => {
    return await api.patch(`/collections/update/${collectionsContent.collectionsData?.collectionsContent?.id}`, {
      title: collectionTitle || collectionsContent.collectionsData?.collectionsContent?.title,
    });
  };
  const resetState = () => {
    setCollectionTitle("");
  };
  const onUpdateBtnClick = async () => {
    setIsLoading(true);
    try {
      if (uploadedImgsData.imgsUploadedData.length <= 0) {
        const response = await uploadContentFunc();
        if (response.data.success) {
          setIsLoading(false);
          onRefreshPreview();
          resetState();
          dispatch(finishUploadImg());
        }
      } else {
        const updateContentRes = await uploadContentFunc();
        for (let i = 0; i < uploadedImgsData.imgsUploadedData.length; i++) {
          await api.post("collections/images", {
            imageName: uploadedImgsData.imgsUploadedData[i].imageName,
            imageUrl: uploadedImgsData.imgsUploadedData[i].imageUrl
          });
        }
        if (updateContentRes.data.success) {
          setIsLoading(false);
          onRefreshPreview();
          resetState();
          dispatch(finishUploadImg());
        }
      }
    } catch (e) {
      console.log(e);
      setIsLoading(false);
    }
  };
  return (
    <Container fluid className="editor-container">
      <Row className="editor-top-container">
        <Col lg={6} md={6} sm={12} className="editor-item">
          <EditorTitle title={"Collections's Title"}/>
          <EditorComp newValue={setCollectionTitle}
                      content={collectionsContent.collectionsData?.collectionsContent?.title || ""}/>
        </Col>
        <Col lg={6} md={6} sm={12} className="editor-item">
          <EditorTitle title={(uploadedImgsData.imgsUploadedData.length <= 0 || finishedUpdate.isFinishUpdate) ? "Images uploaded" : "Images Preview"}/>
          <UploadMultiImg imgFolder={"collections"}
                          currentImg={collectionsContent.collectionsData?.collectionsImgContent}
                          uploadFor={"collections"} imageLimit={4}/>
        </Col>
      </Row>
      <Row className="editor-update-button">
        <div className="update-button-container d-flex justify-content-center align-items-center">
          <Button className="update-btn" onClick={onUpdateBtnClick}
                  disabled={isLoading || (uploadedImgsData.imgsUploadedData.length <= 0 && !collectionTitle)}>{isLoading ? "Updating" : "Update"}</Button>
        </div>
      </Row>
      <Row>
        <EditorTitle title={"Preview"}/>
        <SubBannerComp/>
      </Row>
    </Container>
  );
};

export default SubBannerEditor;