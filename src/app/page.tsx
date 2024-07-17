import React from 'react';
import Image from "next/image";
import styles from "./page.module.css";
import 'antd/dist/reset.css';
import { Button, Flex, Layout } from "antd";
import { Header, Footer, Content } from "antd/lib/layout/layout"; //, Sider

const headerStyle: React.CSSProperties = {
  textAlign: 'left',
  color: '#fff',
  height: 64,
  paddingInline: 48,
  lineHeight: '64px',
  backgroundColor: '#4096ff',
};

const contentStyle: React.CSSProperties = {
  textAlign: 'center',
  flex: 1,
  overflow: 'auto',
  color: '#fff',
  backgroundColor: '#0958d9',
};

const footerStyle: React.CSSProperties = {
  textAlign: 'center',
  color: '#fff',
  backgroundColor: '#4096ff',
};

const layoutStyle: React.CSSProperties = {
  borderRadius: 8,
  overflow: 'hidden',
  display: 'flex',
  flexDirection: 'column',
  height: '100vh', // Ensures the layout takes the full height of the viewport
};

// Additional styles
const pageTitleStyle: React.CSSProperties = {
  textAlign: 'left',
  paddingInline: 48,
  width: '100%',
  backgroundColor: '#0a74da',
  padding: '10px',
  boxSizing: 'border-box',
};

const boxContainerStyle: React.CSSProperties = {
  display: 'flex',
  justifyContent: 'space-between',
  padding: '10px',
};

const boxStyle: React.CSSProperties = {
  width: '48%', // Slightly less than 50% to account for spacing
  backgroundColor: '#4caf50',
  padding: '10px',
  boxSizing: 'border-box',
};

export default function Home() {
  return (
    <React.Fragment>
      <Layout style={layoutStyle}>
        <Header style={headerStyle}>App title</Header>
        <Content style={contentStyle}>
          <div style={pageTitleStyle}>Page title - |Export to PDF| |Notes (3)| |Filter v|</div>
          <div style={boxContainerStyle}>
            <div style={boxStyle}>1. part 50% width box</div>
            <div style={boxStyle}>2. part 50% width box</div>
          </div>
        </Content>
        <Footer style={footerStyle}>Footer</Footer>
      </Layout>
    </React.Fragment>
  );
}
