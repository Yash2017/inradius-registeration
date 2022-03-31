import React, { useContext } from "react";
import { Row, Col } from "antd";
import { useNavigate } from "react-router-dom";
import { ArrowLeftOutlined, ArrowRightOutlined } from "@ant-design/icons";
import { UserContext } from "../../context/UserContext";
function LeftRightNavigator({ desc, sliderVal, rightLink, leftLink }) {
  const nav = useNavigate();
  const { userInfo, setUpdateInfo } = useContext(UserContext);
  const updateInfo = () => {
    const newVal = {
      ...sliderVal,
      progress: `${parseInt(userInfo.progress) + 1}`,
    };
    setUpdateInfo(newVal);
    if (rightLink) {
      nav(rightLink);
    }
  };
  const goBack = () => {
    const newVal = {
      ...sliderVal,
      progress: `${parseInt(userInfo.progress) - 1}`,
    };
    setUpdateInfo(newVal);
  };
  return (
    <Row justify="space-around" style={{ paddingTop: "10px", width: "100%" }}>
      <Col>
        <ArrowLeftOutlined
          style={{
            fontSize: 17,
            padding: 10,
          }}
          onClick={goBack}
        />
      </Col>
      <Col>
        <ArrowRightOutlined
          style={{
            fontSize: 17,
            padding: 10,
          }}
          onClick={updateInfo}
        />
      </Col>
    </Row>
  );
}

export default LeftRightNavigator;
