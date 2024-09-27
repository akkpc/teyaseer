import { Button, Card, Col, Row } from 'antd'
import Typography from "antd/es/typography/Typography"
import { useEffect, useState } from 'react'
import { borderColor, lightColor, primaryColor } from "../colors"
import { KFHeader } from '../components/KFHeader'

interface IProps { }
/**
* @author
* @function 
**/

export function Home<FC>(props: IProps) {
    const [fetching, setFetching] = useState(true)

    useEffect(() => {
        setFetching(true)
    })

    function downloadPDF(path: string, filename: string) {
        const doc = document.createElement("a")
        doc.href = path;
        doc.target = "__blank";
        doc.download = filename;
        doc.click();
    }

    return (
        <div>
            <KFHeader path={["Home"]} >
                <Row
                    style={{
                        display: "flex",
                        height: "91vh",
                        width: "100%",
                        background: "linear-gradient(to bottom, #FFFFFF 50%, #f4f9ff 60%)"
                    }}
                >
                    <Col className="gutter-row" span={12}>
                        <div
                            style={{
                                flex: 1,
                                background: "url('/images/landingpage_image.svg')",
                                height: "91vh",
                                width: '100%',
                                backgroundSize: 'cover',
                                backgroundRepeat: 'no-repeat',
                                backgroundPosition: 'center',
                            }}
                        ></div>
                    </Col>
                    <Col style={{ padding: 45 }} className="gutter-row" span={12}>
                        <div style={{
                            display: "flex",
                            flexGrow: 1,
                            width: "100%",
                            height: "50%",
                            alignItems: "flex-end",
                            paddingBottom: 20
                        }}>
                            <div>
                                <Typography style={{ fontSize: 36, fontWeight: 600, color: primaryColor }} >Welcome to Teyaseer Vendor Portal</Typography>
                                <Typography style={{ fontSize: 16, fontWeight: 400, marginTop: 10, color: lightColor }} >To access the vendor portal, please sign in using your UAE Pass or download the requirements to become a Teyaseer qualified vendor.</Typography>
                                <Button
                                    style={{
                                        backgroundColor: "#000000",
                                        width: 300,
                                        height: 44,
                                        fontSize: 19,
                                        fontWeight: 400,
                                        marginTop: 25,
                                        borderRadius: 12
                                    }}
                                    type="primary"
                                    icon={<img style={{ marginTop: 4 }} src="images/fingerprint.svg" />}
                                    onClick={() => {
                                        const { REACT_APP_UAE_PASS_STG_URL,
                                            REACT_APP_REDIRECT_URI,
                                            REACT_APP_UAE_STG_CLIENT_ID,
                                            REACT_APP_UAE_STG_STATE,
                                            REACT_APP_UAE_STG_SCOPE,
                                            REACT_APP_UAE_ACR_VALUES }: any = process.env;
                                        const refirectionURL = `${REACT_APP_UAE_PASS_STG_URL}/idshub/authorize?redirect_uri=${REACT_APP_REDIRECT_URI}&client_id=${(REACT_APP_UAE_STG_CLIENT_ID)}&response_type=code&state=${(REACT_APP_UAE_STG_STATE)}&scope=${(REACT_APP_UAE_STG_SCOPE)}&acr_values=${(REACT_APP_UAE_ACR_VALUES)}`;
                                        console.log(refirectionURL)
                                        const hr = document.createElement("a")
                                        hr.href = refirectionURL;
                                        hr.target = "__blank";
                                        hr.click()
                                    }}
                                >
                                    Continue with UAE Pass
                                </Button>
                            </div>
                        </div>
                        <div style={{
                            display: "flex",
                            flexGrow: 1,
                            width: "100%",
                            height: "50%",
                            paddingTop: 20
                        }}>
                            <Row gutter={10} justify={"space-between"} style={{ backgroundColor: "" }} >
                                <Col span={12} >
                                    <Card style={{ width: 285.5, borderColor: borderColor, backgroundColor: "white" }}>
                                        <img src="images/consultant_logo.svg" ></img>
                                        <Typography style={{
                                            color: primaryColor,
                                            fontSize: 16,
                                            fontWeight: 500,
                                            marginTop: 8
                                        }}
                                        >Minimum requirements for Consultants</Typography>
                                        <Button
                                            style={{
                                                height: 30,
                                                width: 127,
                                                backgroundColor: primaryColor,
                                                color: "white",
                                                marginTop: 15,
                                                borderRadius: 8
                                            }}
                                            icon={<img src="images/download.svg" />}
                                            iconPosition={"end"}
                                            onClick={() => downloadPDF("/documents/requireents_consultant.pdf", "consultant")}
                                        >
                                            Download
                                        </Button>
                                    </Card>
                                </Col>
                                <Col span={12} >
                                    <Card style={{ width: 285.5, borderColor: borderColor }}>
                                        <img src="images/contractor_logo.svg" ></img>
                                        <Typography style={{
                                            color: primaryColor,
                                            fontSize: 16,
                                            fontWeight: 500,
                                            marginTop: 8
                                        }} >Minimum requirements for Contractors</Typography>
                                        <Button
                                            style={{
                                                height: 30,
                                                width: 127,
                                                backgroundColor: primaryColor,
                                                color: "white",
                                                marginTop: 15,
                                                borderRadius: 8
                                            }}
                                            icon={<img src="images/download.svg" />}
                                            iconPosition={"end"}
                                            onClick={() => downloadPDF("/documents/requireents_contractor.pdf", "contractor")}
                                        >
                                            Download
                                        </Button>
                                    </Card>
                                </Col>
                            </Row>

                        </div>
                    </Col>
                </Row>
            </KFHeader>
        </div>
    )
}
