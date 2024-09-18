import { DownloadOutlined } from "@ant-design/icons"
import { Button, Col, Row } from 'antd'
import { useEffect, useState } from 'react'
import { Header } from '../components/Header'

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
            <Header path={["Home"]} >
                <Row>
                    <Col span={12}>
                        <div style={{
                            display: "flex",
                            height: "91vh",
                            backgroundColor: "red",
                            width: "100%",
                            background: "url('/images/loginpage_image.png')",
                            backgroundSize: "cover",
                            backgroundRepeat: "no-repeat",
                        }} >
                        </div>
                    </Col>
                    <Col span={12}>
                        <div style={{ display: "flex", alignItems: "center", flexDirection: "column", rowGap: 15, height: "100%" }} >
                            <Button
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
                            >Sign in with UAE Pass</Button>
                            <Button
                                icon={<DownloadOutlined />}
                                onClick={() => downloadPDF("/documents/requireents_consultant.pdf", "consultant")}
                            >Min requirements for consultants</Button>
                            <Button
                                icon={<DownloadOutlined />}
                                onClick={() => downloadPDF("/documents/requireents_contractor.pdf", "contractor")}
                            >Max requirements for contractors</Button>
                        </div>
                    </Col>
                </Row>
            </Header>
        </div>
    )
}
