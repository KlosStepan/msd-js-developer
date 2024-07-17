import React from 'react';

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
            <div>-graph-</div>
            <div>_____</div>
            <div>-footer-</div>
        </div>
    )
}

export default Statistic;