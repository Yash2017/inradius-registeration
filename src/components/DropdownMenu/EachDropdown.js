import React, { useEffect, useState } from "react";
import { Button, Menu, Dropdown, Layout, Row, Col } from "antd";
import { DownOutlined } from "@ant-design/icons";
function EachDropdown({ initialDisplay, display, content, setVal, index }) {
  const [displayText, setDisplayText] = useState(
    initialDisplay ? initialDisplay : display
  );
  if (initialDisplay) {
    setVal(initialDisplay);
  }
  const setValue = (val) => {
    setDisplayText(content[parseInt(val.key)]);
    console.log(index);
    setVal(content[parseInt(val.key)], index);
  };
  const menu = (
    <Menu onSelect={(val) => setValue(val)} selectable>
      {content.map((single, index) => (
        <Menu.Item key={index}>{single}</Menu.Item>
      ))}
    </Menu>
  );
  return (
    <>
      <Row justify="start" style={{ padding: "10px" }}>
        <Col style={{ width: "300px" }}>
          <Dropdown overlay={menu}>
            <Button style={{ width: "100%" }}>
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                {" "}
                {displayText} <DownOutlined />
              </div>
            </Button>
          </Dropdown>
        </Col>
      </Row>
    </>
  );
}

export default EachDropdown;
