import React from "react";
import LeftPanel from "../../components/LeftPanel/LeftPanel";
import { Layout } from "antd";
import "./QualificationEntry.css";
import DropdownMenu from "../../components/DropdownMenu/DropdownMenu";
function QualificationEntry() {
  const qualifications = [
    "10th Passed",
    "12th Passed",
    "Bachelors",
    "Masters",
    "PhD",
    "IIT",
    "MBA",
  ];
  return (
    <Layout style={{ overflow: "hidden" }}>
      <Layout style={{ padding: "24px 24px 24px" }}>
        <DropdownMenu
          number={1}
          content={qualifications}
          display="Qualifications"
        />
      </Layout>
    </Layout>
  );
}

export default QualificationEntry;
