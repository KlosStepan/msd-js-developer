"use client"; // This is a client component 👈🏽
import React from 'react';
import { Chart } from "@berryv/g2-react";

type ChartBarProps = {
    // Define any props here if needed
}

const ChartBar: React.FC<ChartBarProps> = ({ }) => {
    return (
        <Chart
            options={{
                type: "interval",
                //coordinate: { transpose: true },
                width: 640,
                height: 480,
                data: [
                    { genre: "Sports", sold: 275 },
                    { genre: "Strategy", sold: 115 },
                    { genre: "Action", sold: 120 },
                    { genre: "Shooter", sold: 350 },
                    { genre: "Other", sold: 150 },
                ],
                encode: { y: "genre", x: "sold" },
            }}
        />
    );
}

export default ChartBar;
