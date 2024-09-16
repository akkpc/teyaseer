import { Breadcrumb, Image, Layout, theme } from 'antd';
import { ReactNode } from 'react';
import { PrimaryColor } from '../colors';

const { Header, Content, Footer } = Layout;
interface Props {
    children: ReactNode,
    path: String[]
}

function App({ children, path }: Props) {
    const {
        token: { colorBgContainer, borderRadiusLG },
    } = theme.useToken();

    return (
        <Layout>
            <Header style={{ display: 'flex', alignItems: 'center', height: 160, backgroundColor:PrimaryColor}}>
                <Image
                    height={32}
                    src={"/images/Teyaseer_Logo_white.webp"}
                    preview={false}
                />
            </Header>
            <Content style={{ padding: '0 48px' }}>
                <Breadcrumb style={{ margin: '16px 0' }}>
                    {
                        path.map((pathName) => <Breadcrumb.Item>{pathName}</Breadcrumb.Item>)
                    }
                </Breadcrumb>
                <div
                    style={{
                        background: colorBgContainer,
                        padding: 24,
                        minHeight: "71vh",
                        borderRadius: borderRadiusLG,
                    }}
                >
                    {children}
                </div>
            </Content>
            <Footer style={{ textAlign: 'center' }}>
                Teyeseer ©{new Date().getFullYear()} All right reserved
            </Footer>
        </Layout>
    );
};

export {
    App as Header
};
