"use client"; // This is a client component 👈🏽

import React from 'react';
import { Chart } from "@berryv/g2-react";

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
    backgroundColor: '#4caf50',
    padding: '10px',
    boxSizing: 'border-box',
  };

type StatisticProps = {
    title: string;
}

const Statistic: React.FC<StatisticProps> = ({ title }) => {
    return(
        <div style={boxStyle}>
            <div>{title}</div>
            <div>_____</div>
            <Chart
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
            />
            <div>_____</div>
            <div>-footer-</div>
        </div>
    )
}

export default Statistic;