"use client"; // This is a client component 👈🏽
import React from 'react';
import { Chart } from "@berryv/g2-react";

type ChartLineProps = {
    // Define any props here if needed
}

const ChartLine: React.FC<ChartLineProps> = ({ }) => {
    return (
        <Chart
            options={{
                type: "line",
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
    );
}

export default ChartLine;
