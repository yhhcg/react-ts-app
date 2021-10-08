import React from 'react';
import { Layout, Menu } from 'antd';
import { MenuUnfoldOutlined, MenuFoldOutlined } from '@ant-design/icons';
import './index.css';

const { Content, Footer, Header, Sider } = Layout;

interface EachMenu {
  name: string;
}

export interface FrameProps {
  children: React.ReactNode;
  menuList?: Array<EachMenu>;
}

export interface FrameState {
  collapsed: boolean;
}

export default class Frame extends React.Component<FrameProps> {
  state: FrameState = {
    collapsed: false,
  };

  render(): JSX.Element {
    const { children } = this.props;

    return (
      <Layout className="frame">
        <Sider trigger={null} collapsible collapsed={this.state.collapsed}>
          <Menu></Menu>
        </Sider>
        <Layout>
          <Header>
            {React.createElement(this.state.collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
              className: 'trigger',
              // onClick: this.toggle,
            })}
          </Header>
          <Content>{children}</Content>
          <Footer></Footer>
        </Layout>
      </Layout>
    );
  }
}
