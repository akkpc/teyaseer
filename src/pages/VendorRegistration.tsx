import { TabsProps, theme, Typography } from 'antd';
import React, { useLayoutEffect, useReducer, useState } from 'react';
import { primaryColor } from '../colors';
import Classification from '../components/Classification';
import CompanyInformation from '../components/CompanyInformation';
import ContactInformation from '../components/ContactInformation';
import { KFHeader } from '../components/KFHeader';
import { formHeaderHeight, headerHeight } from '../constants';
import FormLayout from '../layouts/FormLayout';


interface FormFields {
    head_office: string;
    company_name_english: string;
    company_name_arabic: string;
    expiry_date: string;
    start_date: string;
    number_of_emplyees: string;
}
interface FormActions {
    type: "add";
    field_name: string;
    value: string;
}

const items: TabsProps['items'] = [
    {
        key: '1',
        label: 'Company Informations',
        children: <CompanyInformation />,
    },
    {
        key: '2',
        label: 'Contact Information',
        children: <ContactInformation />,
    },
    {
        key: '3',
        label: 'Classification',
        children: <Classification />,
    },
];

export default function VendorRegistration() {
    const [currentTab, setCurrentTab] = useState("1");
    const [state, dispatch] = useReducer<React.Reducer<FormFields, FormActions>>(reducer, {
        head_office: "",
        company_name_english: "",
        company_name_arabic: "",
        expiry_date: "",
        start_date: "",
        number_of_emplyees: ""
    });
    const [registeredFab, setRegisteredFAB] = useState("not_registerd");
    const {
        token: { colorBgContainer, borderRadiusLG },
    } = theme.useToken();
    const [bgContainerHeight,setBgContainerHeight] = useState(0);

    function reducer(state: FormFields, action: FormActions) {
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
            if(position) {
                setBgContainerHeight(position[0].height - 100)
            }
        })()
    },[])

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
                        <FormLayout style={{ width: "100%" }} title='Vendor Classification' icon='/images/sample_svg.svg' >
                            <div>
                                <Typography>Test</Typography>
                            </div>
                        </FormLayout>
                        <FormLayout style={{ width: "100%" }} title='Vendor Classification' icon='/images/sample_svg.svg' >
                            <div>
                                <Typography>Test</Typography>
                            </div>
                        </FormLayout>
                        <FormLayout style={{ width: "100%" }} title='Vendor Classification' icon='/images/sample_svg.svg' >
                            <div>
                                <Typography>Test</Typography>
                            </div>
                        </FormLayout>
                    </div>
                </div>
            </div>
        </KFHeader>
    )
}
