import React, { useContext } from "react";
import { UserContext } from "../../context/UserContext";
import { Row, Col, Typography, Form, Input, Button } from "antd";
import { useNavigate } from "react-router-dom";
function RegisterPage() {
  const { userInfo, setUpdateInfo } = useContext(UserContext);
  const navigate = useNavigate();
  const onFinish = (val) => {
    const newValue = {
      ...val,
      progress: `${userInfo.progress + 1}`,
    };
    setUpdateInfo(newValue);
    navigate("/location");
  };
  return (
    <>
      <Row justify="center" align="center">
        <Col span={12} style={{ height: "100vh" }} align="center">
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              height: "100%",
            }}
          ></div>
        </Col>
        <Col
          span={12}
          style={{ height: "100vh" }}
          align="center"
          justify="center"
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              height: "100%",
            }}
          >
            <div style={{ width: "80%", padding: "50px" }}>
              <Typography.Title level={2}>Register</Typography.Title>
              <Form
                layout="vertical"
                requiredMark
                size="large"
                onFinish={onFinish}
                initialValues={{
                  remember: true,
                }}
              >
                <Form.Item
                  label="Name"
                  name={"name"}
                  rules={[
                    { required: true, message: "Please input your name!" },
                  ]}
                  required="true"
                >
                  <Input placeholder="Xyx Abc" />
                </Form.Item>
                <Form.Item
                  label="Email"
                  name="email"
                  rules={[
                    {
                      required: true,
                      message: "Please input your email",
                    },
                  ]}
                >
                  <Input placeholder="xyz@inradius.in" type={"email"} />
                </Form.Item>
                <Form.Item
                  label="Password"
                  name={"password"}
                  rules={[
                    {
                      required: true,
                      message: "Please input your password",
                      min: 8,
                    },
                  ]}
                >
                  <Input.Password />
                </Form.Item>
                <Form.Item style={{ paddingTop: "10px" }}>
                  <Button block type="primary" htmlType="submit">
                    Submit
                  </Button>
                </Form.Item>
              </Form>
            </div>
          </div>
        </Col>
      </Row>
    </>
  );
}

export default RegisterPage;
