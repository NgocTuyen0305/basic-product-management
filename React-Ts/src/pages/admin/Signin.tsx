import React, { useState } from "react";
import { LockOutlined, UserOutlined } from "@ant-design/icons";
import { Button, Checkbox, Form, Input, Space, message } from "antd";
import "../../css/main.css";
import { signin } from "../../api/auth";
import { ISignin } from "../../interfaces/signin";
import { useNavigate } from "react-router-dom";
const App: React.FC = () => {
  const [loading, setLoading] = useState(false);
  const [messageApi, contextHolder] = message.useMessage();
  const navigate = useNavigate();
  const [auth, setAuth] = useState<any>({});
  const onFinish = async (values: ISignin) => {
    setLoading(true);
    try {
      const { data } = await signin(values);
      localStorage.setItem("user", JSON.stringify(data));
      // setAuth(data);
      if (!data) {
        messageApi.open({
          type: "error",
          content: "Đăng nhập thất bại",
        });
      } else {
        messageApi.open({
          type: "success",
          content: "Đăng nhập thành công",
        });
        navigate("/admin");
      }
    } catch (error) {
    } finally {
      setLoading(false); // Thay đổi giá trị của loading thành false sau khi cuộc gọi API hoàn tất
    }
  };
  // console.log(auth);

  return (
    <Form name="normal_login" className="login-form" onFinish={onFinish}>
      <Form.Item
        name="email"
        rules={[{ required: true, message: "Vui lòng nhập Email!" }]}
      >
        <Input
          prefix={<UserOutlined className="site-form-item-icon" />}
          placeholder="email"
        />
      </Form.Item>
      <Form.Item
        name="password"
        rules={[{ required: true, message: "Vui lòng nhập Password!" }]}
      >
        <Input
          prefix={<LockOutlined className="site-form-item-icon" />}
          type="password"
          placeholder="Password"
        />
      </Form.Item>
      <Form.Item>
        <Form.Item>
          <Checkbox>Remember me</Checkbox>
        </Form.Item>
        <a className="login-form-forgot" href="">
          Forgot password
        </a>
      </Form.Item>

      <Form.Item>
        {contextHolder}
        <Space>
          <Button
            type="primary"
            htmlType="submit"
            className="login-form-button"
          >
            Log in
          </Button>
        </Space>
        Or <a href="">register now!</a>
      </Form.Item>
    </Form>
  );
};

export default App;
