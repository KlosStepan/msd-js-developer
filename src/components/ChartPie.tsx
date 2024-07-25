"use client"; // This is a client component 👈🏽
import React from 'react';
import { Chart } from "@berryv/g2-react";

type ChartPieProps = {
    // Define any props here if needed
}

const ChartPie: React.FC<ChartPieProps> = ({ }) => {
    return (
        <Chart
            options={{
                type: "interval",
                coordinate: { type: "theta" },
                width: 640,
                height: 480,
                data: [
                    { genre: "Sports", sold: 275 },
                    { genre: "Strategy", sold: 115 },
                    { genre: "Action", sold: 120 },
                    { genre: "Shooter", sold: 350 },
                    { genre: "Other", sold: 150 },
                ],
                encode: { /*theta: "sold",*/ color: "genre" },
            }}
        />
    );
}

export default ChartPie;
