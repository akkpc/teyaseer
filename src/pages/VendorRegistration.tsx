import { Tabs, TabsProps, theme } from 'antd';
import React, { useReducer, useState } from 'react';
import Classification from '../components/Classification';
import CompanyInformation from '../components/CompanyInformation';
import ContactInformation from '../components/ContactInformation';
import { KFHeader } from '../components/KFHeader';


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

    function reducer(state: FormFields, action: FormActions) {
        if (action.type = "add") {
            return {
                ...state,
                [action.field_name]: action.value
            }
        }
        return state;
    }

    return (
        <div>
            <KFHeader path={["Home", "Vendor Registration"]} >
                <Tabs
                    defaultActiveKey="1"
                    key={currentTab}
                    items={items}
                    onChange={(e: any) => {
                        setCurrentTab(e.target.value);
                    }}
                />
            </KFHeader>
        </div>
    )
}
