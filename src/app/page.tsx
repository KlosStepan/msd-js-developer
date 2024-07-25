import React , { useEffect } from 'react';
//import Image from "next/image";
//import styles from "./page.module.css";
import 'antd/dist/reset.css';

import { Button, ConfigProvider, Flex, Layout } from "antd";
import { Header, Footer, Content } from "antd/lib/layout/layout"; //, Sider
import { DownloadOutlined } from '@ant-design/icons';
import { blue } from '@ant-design/colors';
import { ChartType } from './misc/ChartType';


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
  backgroundColor: '#D3D3D3',
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
      <ConfigProvider /*direction="rtl"*/>
        <Layout style={layoutStyle}>
          <Header style={headerStyle}>App title</Header>
          <Content style={contentStyle}>
            <HeaderStatistics title="Title 123" exportBtn={true} notesBtn={true} filterBtn={true}/>
            <div style={boxContainerStyle}>
              {/*<Statistic title="Graph 1"/>
              <Statistic title="Graph 2"/>*/}
                          <Statistic title="Sales by Genre - Line Chart" chartType={ChartType.Line} />
            <Statistic title="Sales by Genre - Pie Chart" chartType={ChartType.Pie} />
            <Statistic title="Sales by Genre - Area Chart" chartType={ChartType.Area} />
            <Statistic title="Sales by Genre - Scatter Plot" chartType={ChartType.Scatter} />
            <Statistic title="Sales by Genre - Bar Chart" chartType={ChartType.Bar} />
            </div>
          </Content>
          {/*<Footer style={footerStyle}>Footer</Footer>*/}
        </Layout>
      </ConfigProvider>
    </React.Fragment>
  );
}
