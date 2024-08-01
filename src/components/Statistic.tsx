"use client"; // This is a client component 👈🏽

import React, {useState} from 'react';
//maybe wrapper of VanillaJS stuff
import { Chart } from "@berryv/g2-react";

import { ChartType } from '../app/misc/ChartType'; // Correct import

import ChartLine from './ChartLine';
import ChartPie from './ChartPie';
import ChartArea from './ChartArea';
import ChartScatter from './ChartScatterPlot';
import ChartBar from './ChartBar';

import { DataObject1 } from '../app/misc/Interfaces';

//TODO fetchable
//import data1 from '../app/misc/ukhsa-data1.json'; // Correct path to your JSON data

const boxStyle: React.CSSProperties = {
    flex: '1 1 calc(50% - 20px)', // Flex-grow, flex-shrink, flex-basis
    backgroundColor: 'white',
    padding: '10px',
    boxSizing: 'border-box',
    borderRadius: '10px',
    margin: '10px', // Margin to ensure spacing around the boxes
};

type StatisticProps = {
    title: string;
    caption: string;
    date: string;
    chartType: ChartType;
    data: DataObject1[] | any[];
}

const Statistic: React.FC<StatisticProps> = ({ title, caption, date, chartType, data }) => {
    const renderChart = () => {
        switch (chartType) { 
            case ChartType.Line:
                return <ChartLine data={data} />;
            case ChartType.Pie:
                return <ChartPie /*data={data}*/ />;
            case ChartType.Area:
                return <ChartArea /*data={data}*/ />;
            case ChartType.Scatter:
                return <ChartScatter /*data={data}*/ />;
            case ChartType.Bar:
                return <ChartBar /*data={data}*/ />;
            default:
                return null;
        }
    }
    return(
        <div style={boxStyle}>
            <h1 style={{textAlign:'left'}}>{title}</h1>
            <div style={{textAlign:'justify'}}>{caption}</div>
            <div>&nbsp;</div>
            <div style={{textAlign:'justify'}}>Up to and including {date}</div>
            <div>&nbsp;</div>
            <div>{renderChart()}</div>
            <div>&nbsp;</div>
            {/*<div>-footer-</div>*/}
        </div>
    )
}

export default Statistic;