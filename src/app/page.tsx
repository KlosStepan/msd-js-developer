import React , { useEffect } from 'react';
//import Image from "next/image";
//import styles from "./page.module.css";
import 'antd/dist/reset.css';
import { Button, ConfigProvider, Flex, Layout } from "antd";
import { Header, Footer, Content } from "antd/lib/layout/layout"; //, Sider
import { DownloadOutlined } from '@ant-design/icons';

//Components
import Statistic from '@/components/Statistic';
import HeaderStatistics from '@/components/HeaderStatistics';

const headerStyle: React.CSSProperties = {
  textAlign: 'left',
  //color: '#fff',
  color: 'black',
  height: 64,
  paddingInline: 48,
  lineHeight: '64px',
  //backgroundColor: '#4096ff',
  backgroundColor: 'white',
};

const contentStyle: React.CSSProperties = {
  textAlign: 'center',
  flex: 1,
  overflow: 'auto',
  paddingInline: 48,
  //color: '#fff',
  //backgroundColor: '#0958d9',
  color: 'black',
  backgroundColor: 'grey',
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
  //backgroundColor: 'grey',
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
  //const [size, setSize] = useState('large'); // default is 'middle'
  return (
    <React.Fragment>
      <Layout style={layoutStyle}>
        <Header style={headerStyle}>App title</Header>
        <Content style={contentStyle}>
          <HeaderStatistics title="title123" exportBtn={false} notesBtn={false} filterBtn={false}/>
          <div style={boxContainerStyle}>
            <Statistic title="Graph 1"/>
            <Statistic title="Graph 2"/>
          </div>
        </Content>
        {/*<Footer style={footerStyle}>Footer</Footer>*/}
      </Layout>
    </React.Fragment>
  );
}
