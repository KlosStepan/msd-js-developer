import { Button } from "antd";
import { DownloadOutlined, FileOutlined, FilterOutlined } from '@ant-design/icons';
import React from "react";

// Additional styles
const headerStyle: React.CSSProperties = {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingInline: 48,
    width: '100%',
    padding: '10px',
    boxSizing: 'border-box',
};

const buttonGroupStyle: React.CSSProperties = {
    display: 'flex',
    gap: '10px', // Optional: Add space between buttons
};

type HeaderStatisticsProps = {
    title: string;
    exportBtn: boolean;
    notesBtn: boolean;
    filterBtn: boolean;
}

const HeaderStatistics: React.FC<HeaderStatisticsProps> = ({ title, exportBtn, notesBtn, filterBtn }) => {
    return (
        <div style={headerStyle}>
            <span>{title}</span>
            <span style={buttonGroupStyle}>
                {exportBtn && (
                    <Button type="primary" /*icon={<DownloadOutlined />}*/ size={'middle'}>
                        Export to PDF <DownloadOutlined />
                    </Button>
                )}
                {notesBtn && (
                    <Button type="primary" size={'middle'}>
                        Notes (3) <FileOutlined />
                    </Button>
                )}
                {filterBtn && (
                    <Button type="primary" size={'middle'}>
                        Filter (9+) <FilterOutlined />
                    </Button>
                )}
            </span>
        </div>
    )
}

export default HeaderStatistics;

