import { Layout, theme, Typography } from 'antd';
import { ReactNode } from 'react';
import "../App.css";
import { headerQueryColor, primaryColor } from '../colors';

const { Header, Content, Footer } = Layout;
interface Props {
    children: ReactNode,
    path?: String[]
}

function App({ children, path }: Props) {
    const {
        token: { colorBgContainer, borderRadiusLG },
    } = theme.useToken();

    return (
        <Layout>
            <Header style={{ display: 'flex', alignItems: 'center', height: 92, backgroundColor: primaryColor, justifyContent: "space-between" }}>
                <div style={{ display: 'flex', alignItems: 'center' }} >
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
                        <Typography style={{ fontSize: 11, color: "white", fontWeight: 600 }} >Having trouble with this process? Email us at: registration@teyaseer.ae</Typography>
                    </div>
                </div>
                <div>

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
    App as Header
};
