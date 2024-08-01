"use client"; // This is a client component 👈🏽
import React , { useEffect, useState } from 'react';
//import Image from "next/image";
//import styles from "./page.module.css";
import 'antd/dist/reset.css';

import { Button, ConfigProvider, Flex, Layout } from "antd";
import { Header, Footer, Content } from "antd/lib/layout/layout"; //, Sider
import { DownloadOutlined } from '@ant-design/icons';
import { blue } from '@ant-design/colors';
import { ChartType } from './misc/ChartType';

import { DataObject1 } from '../app/misc/Interfaces';

//Components
import Statistic from '@/components/Statistic';
import HeaderStatistics from '@/components/HeaderStatistics';

// Imports of data - will be fetced
import data1 from '../app/misc/ukhsa-data1.json'; // Correct path to your JSON data
//import data2
//import data3
//import data4

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
  //justifyContent: 'space-between',
  flexWrap: 'wrap',
  padding: '10px',
};

export default function Home() {
  //const [size, setSize] = useState('large'); // default is 'middle'
  const [dataLineChart, setDataLineChart] = useState<DataObject1[]>([]);
  useEffect(() => {
    //TODO fetch data1
    setDataLineChart(data1);
    //Promise - wait for all 4
  }, [])
  
  return (
    <React.Fragment>
      <ConfigProvider /*direction="rtl"*/>
        <Layout style={layoutStyle}>
          <Header style={headerStyle}>App title</Header>
          <Content style={contentStyle}>
            <HeaderStatistics title="Title 123" exportBtn={true} notesBtn={true} filterBtn={true}/>
            <div style={boxContainerStyle}>
              {/*Line ch1*/}
              <Statistic title="Testing" caption="The percentage of people who had a PCR test and had at least one positive PCR test result for RSV in the same 7 days. Data is shown for England by specimen date (the date the sample was collected) and UKHSA Region." date="8 July 2024" chartType={ChartType.Line} data={dataLineChart} />
              {/* <Statistic title="Sales by Genre - Pie Chart" caption="Asd" date="5 January 2024" chartType={ChartType.Pie} data={[]} /> */}
              <Statistic title="Dummy graph" caption="Sales by Genre - Area Chart"  date="5 January 2024" chartType={ChartType.Area} data={[]} />
              <Statistic title="Dummy graph" caption="Sales by Genre - Scatter Plot" date="5 January 2024" chartType={ChartType.Scatter} data={[]} />
              <Statistic title="Dummy graph" caption="Sales by Genre - Bar Chart"  date="5 January 2024" chartType={ChartType.Bar} data={[]} />
            </div>
          </Content>
          {/*<Footer style={footerStyle}>Footer</Footer>*/}
        </Layout>
      </ConfigProvider>
    </React.Fragment>
  );
}
