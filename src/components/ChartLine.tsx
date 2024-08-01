"use client"; // This is a client component 👈🏽
import React from 'react';
import { Chart } from "@berryv/g2-react";
import * as d3 from 'd3';
//import { DataPoint } from '../types/DataPoint'; // Make sure this path is correct

import { DataObject1 } from '../app/misc/Interfaces';

type ChartLineProps = {
    data: DataObject1[];
}

const ChartLine: React.FC<ChartLineProps> = ({ data }) => {
    return (
        <Chart
            options={{
                type: "line",
                width: 640,
                height: 480,
                data: data.sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime()),
                encode: { x: "date", y: "metric_value", color: "geography" },
                scale: { 
                    y: { type: 'linear'/*, domain: [0, 20]*/ }, // Use domain for y scale
                    //x: { type: 'time' }
                },
                axis: {
                    //x: { title: 'Date (Month-Year)' },
                    //y: { title: 'Metric Value' }
                    x: { title: 'Date' },
                    y: { title: 'Value' }
                },
                //legend: { position: 'bottom' } // Correct way to position the legend
            }}
        />
    );
}

export default ChartLine;
