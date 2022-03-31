import React, { useContext } from "react";
import { UserContext } from "../../context/UserContext";
import { Typography } from "antd";
function UserInfo() {
  const { userInfo, setUpdateInfo } = useContext(UserContext);
  return (
    userInfo &&
    Object.entries(userInfo).map(([key, value]) => {
      if (key !== "password" && key !== "progress") {
        return (
          <Typography.Paragraph
            key={key}
            style={{ textAlign: "center", paddingBottom: "20px" }}
          >
            {`${key.charAt(0).toUpperCase() + key.slice(1)}`}: {value}
          </Typography.Paragraph>
        );
      }
    })
  );
}

export default UserInfo;
