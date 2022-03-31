import React from "react";
import { Layout } from "antd";
import LeftPanel from "../../components/LeftPanel/LeftPanel";
import "./FirstPage.css";
import "antd/dist/antd.css";
import LocationMainContent from "../../components/LocationMainContent/LocationMainContent.js";
const { Sider } = Layout;

function FirstPage() {
  return (
    <Layout style={{ overflow: "hidden" }}>
      <Sider width={250} className="site-layout-background">
        <LeftPanel content="Back to Login" />
      </Sider>
      <Layout style={{ padding: "24px 24px 24px" }}>
        <LocationMainContent />
      </Layout>
    </Layout>
  );
}

export default FirstPage;
