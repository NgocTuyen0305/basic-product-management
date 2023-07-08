import React from 'react';
  import { Breadcrumb, Layout, Menu, theme } from 'antd';
  import { Outlet, useNavigate } from 'react-router-dom';

const { Header, Content, Footer } = Layout;

const BaseLayoutPage = () => {
  const navigate = useNavigate();
  const {
    token: { colorBgContainer },
  } = theme.useToken();
  
const arrNavbar = [
  {
    key: "/",
    label: "Home Page"
  },
  {
    key: "/products",
    label: "Product Page"
  },
  {
    key: "/signin",
    label: "Signin Page"
  },
]
  return (
    <Layout className="layout">
      <Header>
        <div className="logo" />
        <Menu
          theme="dark"
          mode="horizontal"
          defaultSelectedKeys={['2']}
          onClick={(item) => {
            navigate(item.key);
          }}
          items={arrNavbar.map((item,index) => {
            console.log(item);
            return {
              key: item.key,
              label: item.label,
            };
          })}
        />
      </Header>
      <Content style={{ padding: '0 50px' }}>
        <Breadcrumb style={{ margin: '16px 0' }}>
          <Breadcrumb.Item>Home</Breadcrumb.Item>
          <Breadcrumb.Item>List</Breadcrumb.Item>
          <Breadcrumb.Item>App</Breadcrumb.Item>
        </Breadcrumb>
        <div className="site-layout-content" style={{ background: colorBgContainer }}>
          <Outlet/> 
        </div>
      </Content>
      <Footer style={{ textAlign: 'center' }}>Tuyenln ©2023 Created by Ant UED</Footer>
    </Layout>
  );
};

export default BaseLayoutPage;