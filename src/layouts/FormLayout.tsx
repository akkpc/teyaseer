import { Col, Row, Typography } from 'antd';
import { ReactNode } from 'react';
import KFTextInput from '../components/KFTextInput';
import { FormFieldMetaDataProps } from '../constants/form-metadata';
import { filedsMetaDataState, FormActions } from '../pages/VendorRegistration';
import { KFDate } from '../components/KFDate';
import KFMultiSelect from '../components/KFMultiSelect';
import KFSelect from '../components/KFSelect';
import dayjs from 'dayjs';
interface Props {
    title: string;
    icon: string;
    metaData: FormFieldMetaDataProps[];
    state: Record<string, string | string[]>,
    dispatch: React.Dispatch<FormActions>
    children?: ReactNode;
}
export default function FormLayout({ style, children, title, icon, metaData, state, dispatch }: Props & React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>) {
    return (
        <div style={{ border: "1px solid #E4E7EC", borderRadius: 12, ...style }} >
            <div style={{
                display: "flex",
                alignItems: "center",
                height: 60,
                backgroundColor: "#BD9D50",
                columnGap: 10,
                padding: 20,
                borderTopLeftRadius: 12,
                borderTopRightRadius: 12
            }} >
                <img src={icon} />
                <Typography style={{ fontSize: 18, fontWeight: 600, color: "white" }} >{title}</Typography>
            </div>
            <div style={{ padding: 20 }} >
                <Row gutter={35} style={{ rowGap: 20 }} >
                    {
                        metaData.map(({ id, label, type, options }, index) => {
                            const Component: any = getComponent(type);
                            return (
                                <Col key={index} className="gutter-row" span={8}>
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
                                        required
                                        options={options}
                                    />
                                </Col>
                            )
                        })
                    }
                </Row>
            </div>
        </div>
    )
}

function getComponent(type: "text" | "date" | "select" | "multiselect") {
    switch (type) {
        case "text":
            return KFTextInput;
        case "date":
            return KFDate;
        case "multiselect":
            return KFMultiSelect;
        case "select":
            return KFSelect;
        default:
            return KFTextInput;
    }
}
