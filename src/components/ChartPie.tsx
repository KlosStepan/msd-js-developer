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
                type: "pie", // Assuming 'pie' is the correct type for a pie chart
                width: 640,
                height: 480,
                data: [
                    { genre: "Sports", sold: 275 },
                    { genre: "Strategy", sold: 115 },
                    { genre: "Action", sold: 120 },
                    { genre: "Shooter", sold: 350 },
                    { genre: "Other", sold: 150 },
                ],
                encode: {
                    //theta: "sold", // Ensure this is the correct key for theta
                    color: "genre"
                },
                // Add any additional configuration options as needed
            }}
        />
    );
}

export default ChartPie;
