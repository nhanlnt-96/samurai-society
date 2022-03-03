import React, {useState} from "react";
import {Button, Col, Container, Row} from "react-bootstrap";
import {useDispatch, useSelector} from "react-redux";
import EditorTitle from "../../components/editorTitle/EditorTitle";
import EditorComp from "../../components/editor/EditorComp";
import api from "../../configs/axios";
import LoadingComp from "../../components/loadingComp/LoadingComp";
import {finishUploadImg} from "../../redux/finishUpdate/finishUpdateAction";
import {getWelcomeContent} from "../../redux/welcomeContent/welcomeContentAction";
import WelcomeComp from "../../components/welcomeComp/WelcomeComp";

const WelcomeEditor = () => {
  const dispatch = useDispatch();
  const welcomeContent = useSelector((state) => state.welcomeContent);
  const [isLoading, setIsLoading] = useState(false);
  const [welcomeTitleInput, setWelcomeTitleInput] = useState("");
  const [welcomeSubTitleInput, setWelcomeSubTitleInput] = useState("");
  const onRefreshPreview = () => {
    dispatch(getWelcomeContent());
  };
  const onUpdateBtnClick = async () => {
    setIsLoading(true);
    const response = await api.patch(`/welcome/update/${welcomeContent.welcomeData?.id}`, {
      title: welcomeTitleInput || welcomeContent.welcomeData?.title,
      subTitle: welcomeSubTitleInput || welcomeContent.welcomeData?.subTitle,
    });
    if (response.data.success) {
      setIsLoading(false);
      dispatch(finishUploadImg());
      setWelcomeTitleInput("");
      setWelcomeSubTitleInput("");
      onRefreshPreview();
    }
  };
  
  return (
    <Container fluid className="editor-container">
      {
        welcomeContent.welcomeData?.length <= 0 ? (
          <LoadingComp/>
        ) : (
          <>
            <Row className="editor-top-container">
              <Col lg={6} md={6} sm={12} className="editor-item">
                <EditorTitle title={"Welcome's Title"}/>
                <EditorComp newValue={setWelcomeTitleInput} content={welcomeContent.welcomeData?.title}/>
              </Col>
              <Col lg={6} md={6} sm={12} className="editor-item">
                <EditorTitle title={"Welcome's Subtitle"}/>
                <EditorComp newValue={setWelcomeSubTitleInput} content={welcomeContent.welcomeData?.subTitle}/>
              </Col>
            </Row>
            <Row className="editor-update-button">
              <div className="update-button-container d-flex justify-content-center align-items-center">
                <Button className="update-btn" onClick={onUpdateBtnClick}
                        disabled={isLoading || (!welcomeTitleInput && !welcomeSubTitleInput)}>{isLoading ? "Updating" : "Update"}</Button>
              </div>
            </Row>
          </>
        )
      }
      <Row>
        <EditorTitle title={"Preview"}/>
        <div className="editor-preview-bg">
          <WelcomeComp/>
        </div>
      </Row>
    </Container>
  );
};

export default WelcomeEditor;