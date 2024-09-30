import { UploadOutlined } from '@ant-design/icons';
import type { UploadProps } from 'antd';
import { Button, Upload } from 'antd';

const props: UploadProps = {
    name: 'file',
    action: 'https://660d2bd96ddfa2943b33731c.mockapi.io/api/upload',
    headers: {
        authorization: 'authorization-text',
    },
    onChange(info) {
        // if (info.file.status !== 'uploading') {
        //   console.log(info.file, info.fileList);
        // }
        // if (info.file.status === 'done') {
        //   message.success(`${info.file.name} file uploaded successfully`);
        // } else if (info.file.status === 'error') {
        //   message.error(`${info.file.name} file upload failed.`);
        // }
    },
};

function KFAttachment({}: any) {
    return (
        <div style={{ display: "flex", justifyContent: "flex-start", flexDirection: "column", rowGap: 5 }} >
            {/* <label style={{ textAlign: "left" }} title='required' >
                {required && <abbr style={{ color: "rgb(234, 0, 30)" }}>*</abbr>}
                {label}
            </label> */}
            <Upload {...props}>
                <Button style={{height: 44}}  icon={<UploadOutlined />}>Click to Upload</Button>
            </Upload>
        </div>
    )
}

export default KFAttachment;