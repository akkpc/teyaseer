import { UploadOutlined } from '@ant-design/icons';
import type { UploadProps } from 'antd';
import { Button, Upload } from 'antd';
import { useTranslation } from 'react-i18next';

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

function KFAttachment({ }: any) {
    const { t } = useTranslation();
    return (
        <div style={{ display: "flex", justifyContent: "flex-start", flexDirection: "column", rowGap: 5 }} >
            <Upload {...props}>
                <Button style={{ height: 44 }} icon={<UploadOutlined />}>{t("Click to Upload")}</Button>
            </Upload>
        </div>
    )
}

export default KFAttachment;