import { Radio, Space, theme } from 'antd';
import React, { useReducer, useState } from 'react';
import TextInput from '../components/TextInput';

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
export default function CompanyInformation() {
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
            <div style={{ margin: 20, paddingTop: 10 }} >
                <h2>Consultant Pre-qualification</h2>
                <div
                    style={{
                        background: colorBgContainer,
                        minHeight: 280,
                        padding: 24,
                        borderRadius: borderRadiusLG,
                    }}
                >
                    <div style={{ width: "50%", padding: 10 }} >
                        <form>
                            <TextInput
                                type='text'
                                name="head_office"
                                label='Head Office'
                                data={state.head_office}
                                setData={(value) => dispatch({ type: "add", field_name: "head_office", value })}
                                required
                            />
                            <h3>Company / Trading Name</h3>
                            <div>
                                <TextInput
                                    rootStyle={{ marginTop: 10 }}
                                    name="company_name_english"
                                    label='In English'
                                    data={state.company_name_english}
                                    setData={(value) => dispatch({ type: "add", field_name: "company_name_english", value })}
                                />
                                <TextInput
                                    rootStyle={{ marginTop: 10 }}
                                    name='company_name_arabic'
                                    label='In Arabic'
                                    data={state.company_name_arabic}
                                    setData={(value) => dispatch({ type: "add", field_name: "company_name_arabic", value })}
                                />
                            </div>

                            <h3>Commercial Trade Licences</h3>
                            <div>
                                <TextInput
                                    rootStyle={{ marginTop: 10 }}
                                    name='expiry_date'
                                    type='date'
                                    label='Expiry Date'
                                    data={state.expiry_date}
                                    setData={(value) => dispatch({ type: "add", field_name: "expiry_date", value })}
                                />
                                <TextInput
                                    rootStyle={{ marginTop: 10 }}
                                    name='start_date'
                                    type='date'
                                    label='In Arabic'
                                    data={state.start_date}
                                    setData={(value) => dispatch({ type: "add", field_name: "start_date", value })}
                                />
                                <TextInput
                                    required
                                    rootStyle={{ marginTop: 10 }}
                                    name='number_of_employees'
                                    type='number'
                                    label='Number of employees'
                                    data={state.number_of_emplyees}
                                    setData={(value) => dispatch({ type: "add", field_name: "start_date", value })}
                                />
                            </div>
                            <h3>Registered Address</h3>
                            <div>
                                <TextInput
                                    rootStyle={{ marginTop: 10 }}
                                    name='expiry_date'
                                    label='Building name/number and street'
                                    data={state.expiry_date}
                                    setData={(value) => dispatch({ type: "add", field_name: "expiry_date", value })}
                                />
                                <TextInput
                                    rootStyle={{ marginTop: 10 }}
                                    name='start_date'
                                    label='Town/City'
                                    data={state.start_date}
                                    setData={(value) => dispatch({ type: "add", field_name: "start_date", value })}
                                />
                                <TextInput
                                    required
                                    rootStyle={{ marginTop: 10 }}
                                    name='number_of_employees'
                                    type='number'
                                    label='State/Province'
                                    data={state.number_of_emplyees}
                                    setData={(value) => dispatch({ type: "add", field_name: "start_date", value })}
                                />
                                <TextInput
                                    required
                                    rootStyle={{ marginTop: 10 }}
                                    name='number_of_employees'
                                    type='number'
                                    label='Country'
                                    data={state.number_of_emplyees}
                                    setData={(value) => dispatch({ type: "add", field_name: "start_date", value })}
                                />
                            </div>
                            <h3>{`First Abu Dhabi Bank (FAB) Registration`}</h3>
                            <div>
                                <Radio.Group onChange={(e) => {
                                    setRegisteredFAB(e.target.value);
                                }} value={registeredFab} >
                                    <Space direction="vertical">
                                        <Radio value={"registered"}>I am not registered with FAB</Radio>
                                        <Radio value={"un_registered"}>I am registered with FAB</Radio>
                                    </Space>
                                </Radio.Group>
                            </div>
                            <div style={{ height: 50 }} ></div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}
