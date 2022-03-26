import React from "react";
import { Layout, Button } from "antd";
import "antd/dist/antd.css";
import "../../pages/QualificationEntry/QualificationEntry.css";
function QualificationMainContent() {
  const { Content } = Layout;
  return (
    <Content className="main-content">
      <Button type="primary"> Select Location </Button>
    </Content>
  );
}

export default QualificationMainContent;
