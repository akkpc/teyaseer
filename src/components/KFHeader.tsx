import { Layout, theme, Typography } from 'antd';
import { ReactNode, useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import "../App.css";
import { headerQueryColor, primaryColor } from '../colors';
import { headerHeight, LANGUAGE_KEY } from '../constants';
import { getItemLocal, setItemLocal } from '../helpers';
import KFSelect from './KFSelect';

const { Header, Content, Footer } = Layout;
interface Props {
    children: ReactNode,
    path?: String[]
}

const languageOptions = [{ value: "en", label: "English" }, { value: "ar", label: "عربي" }]

function App({ children, path }: Props) {
    const {
        token: { colorBgContainer, borderRadiusLG },
    } = theme.useToken();
    const [language, setLanguage] = useState<"en" | "ar" | string>();
    const { t, i18n } = useTranslation();
    const navigate = useNavigate();

    useEffect(() => {
        let lang: any = getItemLocal(LANGUAGE_KEY);
        if (!(lang == "ar" || lang == "en")) {
            lang = "en";
        }
        i18n.changeLanguage(lang);
        setLanguage(lang);
    }, [])

    useEffect(() => {
        if (language) {
            if (language == "ar" || language == "en") {
                i18n.changeLanguage(language);
                setItemLocal(LANGUAGE_KEY, language)
            }
        }
    }, [language])

    return (
        <Layout>
            <Header style={{ display: 'flex', alignItems: 'center', height: headerHeight, backgroundColor: primaryColor, justifyContent: "space-between" }}>
                <div style={{ display: 'flex', alignItems: 'center', cursor:"pointer" }} onClick={() => {
                    navigate("/");
                }} >
                    <img src={"/images/teyaseer.png"} />
                </div>
                <div>
                    <div style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        height: 32,
                        width: 437,
                        backgroundColor: headerQueryColor,
                        borderRadius: 8,
                        // paddingLeft: 8,
                        // paddingRight: 8,
                        // paddingBottom: 32,
                        // paddingTop: 32
                    }} >
                        <Typography style={{ fontSize: 11, color: "white", fontWeight: 600 }} >{t("Having trouble with this process")}?{" "}{t("Email us at")}: registration@teyaseer.ae</Typography>
                    </div>
                </div>
                <div>
                    <KFSelect
                        className="multilingual-dropdown"
                        variant='borderless'
                        value={language}
                        options={languageOptions}
                        style={{
                            height: 38,
                            width: 132,
                            borderRadius: 50,
                            backgroundColor: "transparent",
                            border: "1px solid white"
                        }}
                        onChangeInput={(value) => setLanguage(value)}
                        label=''
                    />
                </div>
            </Header>
            <Content>
                <div
                    style={{
                        background: colorBgContainer,
                        borderRadius: borderRadiusLG,
                    }}
                >
                    {children}
                </div>
            </Content>
            {/* <Footer style={{ textAlign: 'center' }}>
                Teyeseer ©{new Date().getFullYear()} All right reserved
            </Footer> */}
        </Layout>
    );
};

export {
    App as KFHeader
};
