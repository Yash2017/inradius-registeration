import React from "react";
import { Layout } from "antd";
import "../QualificationEntry/QualificationEntry.css";
import DropdownMenu from "../../components/DropdownMenu/DropdownMenu";
function EmployerPreference() {
  const employers = [
    "ITC",
    "L & T",
    "Infosys",
    "IBM",
    "BharatPe",
    "PhonePe",
    "PayTM",
  ];
  return (
    <Layout style={{ overflow: "hidden" }}>
      <Layout style={{ padding: "24px 24px 24px" }}>
        <DropdownMenu
          number={1}
          content={employers}
          display="Employer Preference"
        />
      </Layout>
    </Layout>
  );
}

export default EmployerPreference;
