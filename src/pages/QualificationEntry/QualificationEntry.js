import React from "react";
import LeftPanel from "../../components/LeftPanel/LeftPanel";
import QualificationMainContent from "../../components/QualificationMainContent/QualificationMainContent";
import { Layout } from "antd";
import "./QualificationEntry.css";
function QualificationEntry() {
  const { Sider } = Layout;
  return (
    <Layout style={{ overflow: "hidden" }}>
      <Sider width={250} className="site-layout-background">
        <LeftPanel />
      </Sider>
      <Layout style={{ padding: "24px 24px 24px" }}>
        <QualificationMainContent />
      </Layout>
    </Layout>
  );
}

export default QualificationEntry;
