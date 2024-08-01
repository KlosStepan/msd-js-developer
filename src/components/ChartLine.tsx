"use client"; // This is a client component 👈🏽
import React from 'react';
import { Chart } from "@berryv/g2-react";
import * as d3 from 'd3';
//import { DataPoint } from '../types/DataPoint'; // Make sure this path is correct

type ChartLineProps = {
    data: any[]|null;
}

const ChartLine: React.FC<ChartLineProps> = ({ data }) => {
    // Format date to month-year
    /*const formattedData = data.map(item => ({
        ...item,
        date: d3.timeFormat("%Y-%m")(new Date(item.date)),
        metric_value: parseFloat(item.metric_value)
    }));*/
    const dummy_data = [
        {
        "date": 202401,
        "value": 14,
        "city": "Prague" 
    },
    {
        "date": 202402,
        "value": 12,
        "city": "Prague" 
    },
    {
        "date": 202403,
        "value": 3,
        "city": "Prague" 
    },
    {
        "date": 202404,
        "value": 9,
        "city": "Prague" 
    },
    {
        "date": 202401,
        "value": 7,
        "city": "London" 
    },
    {
        "date": 202402,
        "value": 8,
        "city": "London" 
    },
    {
        "date": 202403,
        "value": 9,
        "city": "London" 
    },
    {
        "date": 202404,
        "value": 10,
        "city": "London" 
    }
    ]

    return (
        <Chart
            options={{
                type: "line",
                width: 640,
                height: 480,
                data: dummy_data,
                encode: { x: "date", y: "value", color: "city" },
                scale: { 
                    //y: { type: 'linear', domain: [0, 15] }, // Use domain for y scale
                    //x: { type: 'time' }
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
