import React from "react";
import { Layout, Button } from "antd";
import "antd/dist/antd.css";
import "../../pages/FirstRegisterationPage/FirstPage.css";
function LocationMainContent() {
  const { Content } = Layout;
  return (
    <Content className="main-content">
      <Button type="primary"> Select Location </Button>
    </Content>
  );
}

export default LocationMainContent;
