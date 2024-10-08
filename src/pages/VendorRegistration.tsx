import { Button, Form, Typography } from 'antd';
import React, { useEffect, useLayoutEffect, useReducer, useState } from 'react';
import { primaryColor } from '../colors';
import { KFHeader } from '../components/KFHeader';
import { formHeaderHeight, headerHeight } from '../constants';
import FormLayout from '../layouts/FormLayout';
import { formMetaData } from '../metadata/form-metadata';
import KFButton from '../components/KFButton';
import { useTranslation } from 'react-i18next';


export interface FormActions {
    type: "add";
    field_name: string;
    value: string | string[];
}

const fields: Record<string, string> = {}

formMetaData.forEach(({ metadata }) => {
    metadata.forEach(({ id }) => {
        fields[id] = "";
    })
})

export default function VendorRegistration() {
    const [vendorType, setVendorType] = useState<"consultant" | "contractor">("contractor");
    const [state, dispatch] = useReducer<React.Reducer<Record<string, string | string[]>, FormActions>>(reducer, fields);
    const [registeredFab, setRegisteredFAB] = useState("not_registerd");
    const [bgContainerHeight, setBgContainerHeight] = useState(0);
    const {t} = useTranslation();

    function reducer(state: Record<string, string | string[]>, action: FormActions) {
        if (action.type = "add") {
            return {
                ...state,
                [action.field_name]: action.value
            }
        }
        return state;
    }

    useLayoutEffect(() => {
        (() => {
            const formContainer = document.getElementById("form-container");
            const position = formContainer?.getClientRects()
            if (position) {
                setBgContainerHeight(position[0].height - 100)
            }

            window.addEventListener("resize", () => {
                const formContainer = document.getElementById("form-container");
                const position = formContainer?.getClientRects()
                if (position) {
                    setBgContainerHeight(position[0].height - 100)
                }
            })
        })()
    }, [])

    useEffect(() => {
        if (state) {
            console.log("State:  ", state)
        }
    }, [state])

    return (
        <KFHeader>
            <div style={{ position: "relative" }} >
                <div style={{ height: formHeaderHeight, backgroundColor: primaryColor, padding: "35px 50px 35px 50px" }} >
                    <div style={{ textAlign: "left" }} >
                        <Typography style={{ color: "white", fontWeight: 600, fontSize: 28 }} >Vendor Registration Form</Typography>
                        <Typography style={{ color: "white", fontWeight: 400, fontSize: 16 }}  >To successfully complete the vendor registration process, please provide accurate and up-to-date information in all required fields.</Typography>
                    </div>
                </div>
                <div id="bg-container" style={{
                    display: "flex",
                    backgroundColor: "#f5f7fa",
                    width: "100%",
                    height: bgContainerHeight,
                    minHeight: window.innerHeight - (formHeaderHeight + headerHeight)
                }} >
                    <div id="form-container" style={{
                        position: "absolute",
                        top: 130,
                        left: 0,
                        right: 0,
                        backgroundColor: "white",
                        border: "1px solid white",
                        borderRadius: 12,
                        margin: "0px 50px 0px 50px",
                        padding: 20,
                        display: "flex",
                        flexDirection: "column",
                        rowGap: 20,
                    }} >
                        <Form id='vendor-registration-form' onFinish={(e) => {
                            console.log("Event value : ", e)
                        }} layout='vertical' >
                            {
                                formMetaData.map(({ id, label, metadata }) => {
                                    return (
                                        <FormLayout
                                            key={id}
                                            style={{ width: "100%", marginTop: 15 }}
                                            title={label}
                                            icon='/images/sample_svg.svg'
                                            metaData={metadata}
                                            dispatch={dispatch}
                                            state={state}
                                            vendorType={vendorType}
                                        >
                                            <div>
                                            </div>
                                        </FormLayout>
                                    )
                                })
                            }
                        </Form>
                        <div style={{ display: "flex", justifyContent: "flex-end" }} >
                            <Form.Item>
                                <KFButton
                                    form='vendor-registration-form'
                                    style={{
                                        display: "flex",
                                        marginTop: 15,
                                        textAlign: "right",
                                        backgroundColor: "#181D36",
                                        width: 139
                                    }}
                                    htmlType='submit'
                                    type='primary'
                                >
                                    {t("Submit")}
                                </KFButton>
                            </Form.Item>
                        </div>
                    </div>
                </div>
            </div>
        </KFHeader>
    )
}
