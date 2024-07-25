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

// A tabular data to be visualized.
const data = [
    { genre: 'Sports', sold: 275 },
    { genre: 'Strategy', sold: 115 },
    { genre: 'Action', sold: 120 },
    { genre: 'Shooter', sold: 350 },
    { genre: 'Other', sold: 150 },
  ];

const boxStyle: React.CSSProperties = {
    width: '48%', // Slightly less than 50% to account for spacing
    //backgroundColor: '#4caf50',
    //backgroundColor: '#f0f0f0',
    backgroundColor:'white',
    padding: '10px',
    boxSizing: 'border-box',
    borderRadius: '10px', // Add this line for rounded corners
  };

type StatisticProps = {
    title: string;
    chartType: ChartType;
}

const Statistic: React.FC<StatisticProps> = ({ title, chartType }) => {
    const renderChart = () => {
        switch (chartType) {
            case ChartType.Line:
                return <ChartLine />;
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
            {/*<Chart
                options={{
                    type: "interval",
                    width: 640,
                    height: 480,
                    data: [
                    { genre: "Sports", sold: 275 },
                    { genre: "Strategy", sold: 115 },
                    { genre: "Action", sold: 120 },
                    { genre: "Shooter", sold: 350 },
                    { genre: "Other", sold: 150 },
                    ],
                    encode: { x: "genre", y: "sold" },
                }}
            />*/}
            {renderChart()}
            <div>&nbsp;</div>
            <div>-footer-</div>
        </div>
    )
}

export default Statistic;