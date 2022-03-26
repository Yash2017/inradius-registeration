import React from "react";
import "antd/dist/antd.css";
import { Progress, Menu, Typography } from "antd";
import { ArrowLeftOutlined } from "@ant-design/icons";
import "../../pages/FirstRegisterationPage/FirstPage.css";
export default function LeftPanel() {
  return (
    <>
      <Menu mode="inline" style={{ height: "100%", borderRight: 0 }}>
        <div style={{ display: "flex", flexDirection: "row" }}>
          <ArrowLeftOutlined
            style={{
              fontSize: 20,
              padding: 10,
              marginTop: 15,
              marginLeft: 10,
            }}
          />
          <Typography.Text
            style={{
              padding: "20px 20px 20px 10px",
              marginTop: 15,
              align: "center",
              textAlign: "center",
            }}
          >
            Back to Login{" "}
          </Typography.Text>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            padding: "20px 0px",
            width: "100%",
          }}
        >
          <Progress type="circle" percent="30" />
        </div>
      </Menu>
    </>
  );
}
