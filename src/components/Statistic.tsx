"use client"; // This is a client component 👈🏽

import React from 'react';
//maybe wrapper of VanillaJS stuff
import { Chart } from "@berryv/g2-react";

import { ChartType } from '../app/misc/ChartType'; // Correct import

import ChartLine from './ChartLine';
import ChartPie from './ChartPie';
import ChartArea from './ChartArea';
import ChartScatter from './ChartScatterPlot';
import ChartBar from './ChartBar';

//TODO fetchable
//import data from '../app/misc/data.json'; // Correct path to your JSON data

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
    chartType: ChartType;
}

const Statistic: React.FC<StatisticProps> = ({ title, chartType }) => {
    const renderChart = () => {
        switch (chartType) {
            case ChartType.Line:
                return <ChartLine data={null} />;
            case ChartType.Pie:
                return <ChartPie />;
            case ChartType.Area:
                return <ChartArea />;
            case ChartType.Scatter:
                return <ChartScatter />;
            case ChartType.Bar:
                return <ChartBar />;
            default:
                return null;
        }
    }
    return(
        <div style={boxStyle}>
            <div style={{textAlign:'left'}}>{title}</div>
            <div>&nbsp;</div>
            <div>{renderChart()}</div>
            <div>&nbsp;</div>
            {/*<div>-footer-</div>*/}
        </div>
    )
}

export default Statistic;