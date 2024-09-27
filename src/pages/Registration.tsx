import { Typography } from 'antd';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import KFButton from '../components/KFButton';
import { KFHeader } from '../components/KFHeader';
import TextInput from '../components/KFTextInput';

export default function Register() {
    const [cnNumber, setCnNumber] = useState("");
    const {t} = useTranslation();

    return (
        <div>
            <KFHeader >
                <div style={{ height: "70vh", display: "flex", alignItems: "center", justifyContent: "center" }} >
                    <div style={{ display: "flex", alignItems: "center", flexDirection: "column", width: 448, rowGap: 32 }} >
                        <div style={{ textAlign: "center" }} >
                            <Typography style={{ fontSize: 24, fontWeight: 600, color: "#151617" }} >{t("Enter your Economic License number")}</Typography>
                            <Typography style={{ fontSize: 13, fontWeight: 400, marginTop: 12, color: "#545C6B" }} >{t("Enter your Economic License number to retrieve your company details")}</Typography>
                        </div>
                        <div style={{ width: "100%"}} >
                            <TextInput
                                prefix="CN-"
                                placeholder='123456'
                                value={cnNumber}
                                onChangeInput={(value) => setCnNumber(value)}
                                name=''
                                label=''
                                rootStyle={{ width: "100%" }}
                                style={{ borderRadius: 8 }}
                            />
                            <KFButton>{t("Continue")}</KFButton>
                        </div>
                    </div>
                </div >
            </KFHeader >
        </div >
    )
}
