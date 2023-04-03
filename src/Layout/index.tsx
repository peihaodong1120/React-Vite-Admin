import React, { useState } from 'react';
import {Outlet} from 'react-router-dom'
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
} from '@ant-design/icons';
import { Layout, theme } from 'antd';
import NavTabs from './components/navTabs';
import SiderMenu from './components/menu';
import style from '@/assets/style/layout.module.scss'

const { Header, Sider, Content } = Layout;

const App: React.FC = () => {
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  return (
    <Layout style={{height: '100%'}}>
        {/* 左侧导航 */}
      <Sider trigger={null} collapsible collapsed={collapsed}>
        <div className={style.logo} />
        <SiderMenu></SiderMenu>
      </Sider>
      {/* 右侧内容 */}
      <Layout className="site-layout">
        {/* 头部 */}
        <Header style={{ padding: 0, background: colorBgContainer }}>
        {/* 头部图标 */}
          <div>
            {React.createElement(collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
                className: style.trigger,
                onClick: () => setCollapsed(!collapsed),
            })}
          </div>
        </Header>
        <NavTabs></NavTabs>
        {/* 页面内容 */}
        <Content
          style={{
            margin: '24px 16px',
            padding: 24,
            minHeight: 280,
            background: colorBgContainer,
          }}
        >
          {/* 页面的具体内容 */}
          <Outlet />
        </Content>
      </Layout>
    </Layout>
  );
};

export default App;