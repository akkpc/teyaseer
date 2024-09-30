import { Col, Form, Row, Typography } from 'antd';
import { ReactNode } from 'react';
import KFAttachment from '../components/KFAttachment';
import { KFDate } from '../components/KFDate';
import KFMultiSelect from '../components/KFMultiSelect';
import KFSelect from '../components/KFSelect';
import KFTextInput from '../components/KFTextInput';
import { FormFieldMetaDataProps } from '../metadata/form-metadata';
import { FormActions } from '../pages/VendorRegistration';
interface Props {
    title: string;
    icon: string;
    metaData: FormFieldMetaDataProps[];
    state: Record<string, string | string[]>;
    dispatch: React.Dispatch<FormActions>;
    vendorType: "consultant" | "contractor";
    children?: ReactNode;
}
export default function FormLayout({ style, title, icon, metaData, state, dispatch, vendorType }: Props & React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>) {
    return (
        <div style={{ border: "1px solid #E4E7EC", borderRadius: 12, ...style }} >
            <div style={{
                display: "flex",
                alignItems: "center",
                height: 60,
                backgroundColor: "#eef3f6",
                columnGap: 10,
                padding: 20,
                borderTopLeftRadius: 12,
                borderTopRightRadius: 12
            }} >
                <img src={icon} />
                <Typography style={{ fontSize: 18, fontWeight: 600 }} >{title}</Typography>
            </div>
            <div style={{ padding: 20 }} >
                <Row gutter={35} style={{ rowGap: 20 }} >
                    {
                        metaData.map(({ id, label, type, options, rules, visibleRule }) => {
                            const Component: any = getComponent(type);
                            const visible = visibleRule ? visibleRule(state, vendorType) : true;
                            return (
                                visible &&
                                <Col key={id} className="gutter-row" span={8}>
                                    <Form.Item
                                        label={label}
                                        name={id}
                                        rules={rules}
                                    >
                                        <Component
                                            value={state[id]}
                                            label={label}
                                            onChangeInput={(value: any) => {
                                                dispatch({
                                                    type: "add",
                                                    field_name: id,
                                                    value
                                                })
                                            }}
                                            options={options}
                                            allowClear={true}
                                        />
                                    </Form.Item>
                                </Col>
                            )
                        })
                    }
                </Row>
            </div>
        </div>
    )
}

function getComponent(type: "text" | "date" | "select" | "multiselect" | "attachment") {
    switch (type) {
        case "text":
            return KFTextInput;
        case "date":
            return KFDate;
        case "multiselect":
            return KFMultiSelect;
        case "select":
            return KFSelect;
        case "attachment":
            return KFAttachment
        default:
            return KFTextInput;
    }
}
