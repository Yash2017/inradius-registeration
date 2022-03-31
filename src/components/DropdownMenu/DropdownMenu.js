import React, { useState, useContext } from "react";
import { Button, Menu, Dropdown, Layout, Row, Col, Typography } from "antd";
import { DownOutlined } from "@ant-design/icons";
import "antd/dist/antd.css";
import "../../pages/QualificationEntry/QualificationEntry.css";
import LeftRightNavigator from "../LeftRightNavigator/LeftRightNavigator";
import EachDropdown from "./EachDropdown";
import { UserContext } from "../../context/UserContext";
function QualificationMainContent({ number, content, display }) {
  const { Content } = Layout;
  const { userInfo, setUpdateInfo } = useContext(UserContext);
  const [qual, setQual] = useState("");
  const [skillset, setSkillset] = useState({});
  let updateDisplay = "";
  if (parseInt(userInfo.progress) === 3) {
    updateDisplay = userInfo.Qualification;
  } else if (parseInt(userInfo.progress) === 4) {
    updateDisplay = [userInfo.industry, userInfo.domain];
  }
  const setVal = (val, index) => {
    setQual(val);
    if (index !== undefined) {
      setSkillset({
        ...skillset,
        [`Skillset${index + 1}`]: val,
      });
    }
  };

  return (
    <Content className="main-content">
      <div style={{}}>
        <div style={{ padding: "13px" }}>
          <Typography.Title level={5}>
            Please {display.length <= 4 ? "rank" : "select"} your{" "}
            {display.length <= 4
              ? `${String(display[0]).slice(0, -1)}`
              : display}
          </Typography.Title>
        </div>
        {number > 1 &&
          content.map((con, i) => {
            return (
              <EachDropdown
                initialDisplay={updateDisplay}
                setVal={setVal}
                key={parseInt(i)}
                index={i}
                display={display[i]}
                content={con}
              />
            );
          })}
        {number == 1 && (
          <EachDropdown
            initialDisplay={updateDisplay}
            setVal={setVal}
            display={display}
            content={content}
          />
        )}
        {number > 1 ? (
          <LeftRightNavigator sliderVal={{ ...skillset }} />
        ) : (
          <LeftRightNavigator sliderVal={{ [display]: qual }} />
        )}
      </div>
    </Content>
  );
}

export default QualificationMainContent;
