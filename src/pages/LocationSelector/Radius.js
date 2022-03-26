import React, { useState } from "react";
import { Circle } from "react-google-maps/lib/components/Circle";
import { Typography, Slider, Row, Col } from "antd";
import { ArrowLeftOutlined, ArrowRightOutlined } from "@ant-design/icons";
export default function Radius({ lat, lng }) {
  const [value, setVal] = useState(0);
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
            onChange={(val) => setVal(val)}
          />
          <Row justify="space-around">
            <Col>
              <ArrowLeftOutlined
                style={{
                  fontSize: 17,
                  padding: 10,
                }}
              />
            </Col>
            <Col>
              <ArrowRightOutlined
                style={{
                  fontSize: 17,
                  padding: 10,
                }}
              />
            </Col>
          </Row>
        </div>
      </div>
    </div>
  );
}
