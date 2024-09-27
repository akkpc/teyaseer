import { TabsProps, theme, Typography } from 'antd';
import React, { ReactNode, useEffect, useLayoutEffect, useReducer, useState } from 'react';
import { primaryColor } from '../colors';
import { KFHeader } from '../components/KFHeader';
import { formHeaderHeight, headerHeight } from '../constants';
import FormLayout from '../layouts/FormLayout';
import { metaData } from '../constants/form-metadata';


export interface FormActions {
    type: "add";
    field_name: string;
    value: string | string[];
}

const fields: Record<string, string> = {}
export const filedsMetaDataState = metaData.map(({ id }) => {
    fields[id] = "";
    return ({
        [id]: ""

    })
})

export default function VendorRegistration() {
    const [currentTab, setCurrentTab] = useState("1");
    const [state, dispatch] = useReducer<React.Reducer<Record<string, string | string[]>, FormActions>>(reducer, fields);
    const [registeredFab, setRegisteredFAB] = useState("not_registerd");
    const [bgContainerHeight, setBgContainerHeight] = useState(0);

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
        })()
    }, [])

    useEffect(() => {
        if(state) {
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
                        <FormLayout
                            style={{ width: "100%" }}
                            title='Vendor Classification'
                            icon='/images/sample_svg.svg'
                            metaData={metaData}
                            dispatch={dispatch}
                            state={state}
                        >
                            <div>
                            </div>
                        </FormLayout>
                    </div>
                </div>
            </div>
        </KFHeader>
    )
}
