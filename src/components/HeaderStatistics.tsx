import { Button } from "antd";
import { DownloadOutlined } from '@ant-design/icons';

// Additional styles
const pageTitleStyle: React.CSSProperties = {
    textAlign: 'left',
    paddingInline: 48,
    width: '100%',
    //backgroundColor: '#0a74da',
    padding: '10px',
    boxSizing: 'border-box',
    //color: 'grey',
    //backgroundColor: 'white',
  };

type HeaderStatisticsProps = {
    title: string;
    exportBtn: boolean;
    notesBtn: boolean;
    filterBtn: boolean;
}

const HeaderStatistics: React.FC<HeaderStatisticsProps> = ({ title, exportBtn, notesBtn, filterBtn }) => {
    return (
        <>
          <div style={pageTitleStyle}>
            <span>{title}</span>
            <span>
            <Button type="primary" /*icon={<DownloadOutlined />}*/ size={'middle'} >
              Export to PDF <DownloadOutlined />
            </Button>
            <Button /*type="primary"*/ /*icon={<DownloadOutlined />}*/ size={'middle'} >
            Notes
            </Button>
            <Button type="primary" /*icon={<DownloadOutlined />}*/ size={'middle'} >
            Filter
            </Button>
            </span>
          </div>
        </>
    )
}

export default HeaderStatistics;