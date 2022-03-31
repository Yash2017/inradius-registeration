import React, { useContext } from "react";
import { Layout, Button } from "antd";
import "antd/dist/antd.css";
import "../../pages/FirstRegisterationPage/FirstPage.css";
import { useNavigate } from "react-router-dom";
function LocationMainContent() {
  const nav = useNavigate();
  const { Content } = Layout;
  return (
    <Content className="main-content">
      <Button onClick={() => nav("/map-location")} type="primary">
        {" "}
        Select Location{" "}
      </Button>
    </Content>
  );
}

export default LocationMainContent;
