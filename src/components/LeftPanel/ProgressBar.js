import React, { memo, useEffect, useState, useContext } from "react";
import { Progress, Button } from "antd";
import "antd/dist/antd.css";
import { UserContext } from "../../context/UserContext";
import LeftRightNavigator from "../LeftRightNavigator/LeftRightNavigator";
export const ProgressBar = memo(({ progress }) => {
  //const [progress, setProgress] = useState(0);
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: "20px 0px",
        width: "100%",
      }}
    >
      <Progress type="circle" percent={progress} />
    </div>
  );
});
