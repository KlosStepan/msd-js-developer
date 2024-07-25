"use client"; // This is a client component 👈🏽
import React from 'react';
import { Chart } from "@berryv/g2-react";
import * as d3 from 'd3';
//import { DataPoint } from '../types/DataPoint'; // Make sure this path is correct

type ChartLineProps = {
    data: any[];
}

const ChartLine: React.FC<ChartLineProps> = ({ data }) => {
    // Format date to month-year
    const formattedData = data.map(item => ({
        ...item,
        date: d3.timeFormat("%Y-%m")(new Date(item.date)),
        metric_value: parseFloat(item.metric_value)
    }));

    return (
        <Chart
            options={{
                type: "line",
                width: 640,
                height: 480,
                data: formattedData,
                encode: { x: "date", y: "metric_value", color: "geography" },
                scale: { 
                    y: { type: 'linear', domain: [0, 15] }, // Use domain for y scale
                    x: { type: 'time' }
                },
                axis: {
                    x: { title: 'Date (Month-Year)' },
                    y: { title: 'Metric Value' }
                },
                //legend: { position: 'bottom' } // Correct way to position the legend
            }}
        />
    );
}

export default ChartLine;
