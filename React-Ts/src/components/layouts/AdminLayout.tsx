import React, { useState } from "react";
import { Progress, Space } from "antd";
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  UploadOutlined,
  AppstoreOutlined,
  CalendarOutlined,
  FileAddOutlined,
  CloudUploadOutlined,
  SnippetsOutlined,
} from "@ant-design/icons";
import { Button, Layout, Menu, theme } from "antd";
import { Outlet, useNavigate } from "react-router-dom";

const { Header, Sider, Content } = Layout;

type Props = {};

const AdminLayoutPage = (props: Props) => {
  const navigate = useNavigate();
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  return (
    <div>
      <Layout>
          <Sider trigger={null} collapsible collapsed={collapsed}>
            <div className="logo" />
            <Menu
              theme="dark"
              mode="inline"
              defaultSelectedKeys={["1"]}
              onClick={(item) => {
                navigate(item.key);
              }}
              items={[
                {
                  key: "/admin",
                  icon: <AppstoreOutlined />,
                  label: "Dashboard",
                },
                {
                  key: "/admin/products",
                  icon: <CalendarOutlined />,
                  label: "Products",
                  children: [
                    {
                      key: "/admin/products",
                      icon: <SnippetsOutlined />,
                      label: "Products Management",
                    },
                    {
                      key: "/admin/products/add",
                      icon: <FileAddOutlined />,
                      label: "Add Product",
                    },
                    {
                      key: "/admin/products/:id/edit",
                      icon: <CloudUploadOutlined />,
                      label: "Update Product",
                    },
                  ],
                },
                {
                  key: "3",
                  icon: <UploadOutlined />,
                  label: "Categories",
                  children: [
                    {
                      key: "/admin/categories",
                      icon: <SnippetsOutlined />,
                      label: "Category Management",
                    },
                    {
                      key: "/admin/categories/add",
                      icon: <FileAddOutlined />,
                      label: "Add Category",
                    },
                    {
                      key: "/admin/categories/:id/edit",
                      icon: <CloudUploadOutlined />,
                      label: "Update Category",
                    },
                  ],
                },
              ]}
            />
          </Sider>
          <Layout className="site-layout">
        <Header style={{ padding: 0, background: colorBgContainer }}>
          {React.createElement(
            collapsed ? MenuUnfoldOutlined : MenuFoldOutlined,
            {
              className: "trigger",
              onClick: () => setCollapsed(!collapsed),
            }
          )}
        </Header>
        <Content
          style={{
            margin: '24px 16px',
            padding: 24,
            minHeight: 280,
            background: colorBgContainer,
          }}
        >
          <Outlet/>
        </Content>
      </Layout>
        </Layout>
    </div>
  );
};

export default AdminLayoutPage;
