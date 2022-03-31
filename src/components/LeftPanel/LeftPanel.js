import React from "react";
import "antd/dist/antd.css";
import { Menu, Typography, Layout, Button } from "antd";
import { ArrowLeftOutlined } from "@ant-design/icons";
import "../../pages/FirstRegisterationPage/FirstPage.css";
import { Outlet } from "react-router-dom";
import { ProgressBar } from "./ProgressBar";
import MainContent from "./MainContent";
import UserInfo from "./UserInfo";

export default function LeftPanel({ content }) {
  const [prog, setProg] = React.useState(0);

  return (
    <div>
      <div style={{ display: "flex" }}>
        <Layout.Sider width={250} style={{ background: "" }}>
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
                Back to Home
              </Typography.Text>
            </div>
            <ProgressBar progress={prog} />
            <div style={{ paddingTop: "10px" }}></div>
            <UserInfo />
          </Menu>
        </Layout.Sider>
        <MainContent setRad={(val) => setProg(val * 10)} />
      </div>
    </div>
  );
}
