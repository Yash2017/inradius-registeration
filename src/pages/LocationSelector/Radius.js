import React, { useState } from "react";
import { Circle } from "react-google-maps/lib/components/Circle";
import { Typography, Slider } from "antd";
import LeftRightNavigator from "../../components/LeftRightNavigator/LeftRightNavigator";
export default function Radius({ lat, lng }) {
  const [value, setVal] = useState(0);
  const [kmValue, setKmValue] = useState("");
  const onChangeVal = (val) => {
    setKmValue(`${String(val)} kms`);
    setVal(val);
  };
  return (
    <div>
      <Circle
        onRadiusChanged={() => console.log("changed")}
        defaultCenter={{ lat: lat, lng: lng }}
        defaultRadius={0}
        radius={value * 1000}
        options={{
          strokeColor: "#ff6666",
          fillColor: "#ffb3b3",
          fillOpacity: 0.15,
          strokeOpacity: 0.7,
        }}
      />
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          height: "20vh",
        }}
      >
        <div
          style={{
            width: "30vw",
          }}
        >
          <Typography.Text style={{ padding: "0px 0px 0px 2px" }}>
            Slider Value: {value} kms
          </Typography.Text>
          <Slider
            defaultValue={0}
            max={30}
            value={value}
            onChange={(val) => onChangeVal(val)}
          />
          <LeftRightNavigator
            desc="radius"
            sliderVal={{ Radius: kmValue }}
            rightLink="/register"
          />
        </div>
      </div>
    </div>
  );
}
