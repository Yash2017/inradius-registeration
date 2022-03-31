import React from "react";
import { Layout } from "antd";
import "../QualificationEntry/QualificationEntry.css";
import DropdownMenu from "../../components/DropdownMenu/DropdownMenu";
function Skillsets() {
  const employers = [
    [
      "Javascript",
      "Typescript",
      "Kotlin",
      "Flutter",
      "Python",
      "Django",
      "Google Analytics",
      "Facebook Analytics",
    ],
    [
      "Javascript",
      "Typescript",
      "Kotlin",
      "Flutter",
      "Python",
      "Django",
      "Google Analytics",
      "Facebook Analytics",
    ],
    [
      "Javascript",
      "Typescript",
      "Kotlin",
      "Flutter",
      "Python",
      "Django",
      "Google Analytics",
      "Facebook Analytics",
    ],
    [
      "Javascript",
      "Typescript",
      "Kotlin",
      "Flutter",
      "Python",
      "Django",
      "Google Analytics",
      "Facebook Analytics",
    ],
  ];
  return (
    <Layout style={{ overflow: "hidden" }}>
      <Layout style={{ padding: "24px 24px 24px" }}>
        <DropdownMenu
          number={4}
          content={employers}
          display={["Skillset 1", "Skillset 2", "Skillset 3", "Skillset 4"]}
        />
      </Layout>
    </Layout>
  );
}

export default Skillsets;
