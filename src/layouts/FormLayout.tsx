import { Typography } from 'antd';
import { ReactNode } from 'react';
interface Props {
    children: ReactNode;
    title: string;
    icon: string;
}
export default function FormLayout({ style, children, title, icon }: Props & React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>) {
    return (
        <div style={{ border: "1px solid #E4E7EC", borderRadius: 12, ...style }} >
            <div style={{
                display: "flex",
                alignItems: "center",
                height: 60,
                backgroundColor: "#BD9D50",
                columnGap: 10,
                padding: 13,
                borderTopLeftRadius: 12,
                borderTopRightRadius: 12
            }} >
                <img src={icon} />
                <Typography style={{ fontSize: 18, fontWeight: 600, color: "white" }} >{title}</Typography>
            </div>
            <div style={{ padding: 10 }} >
                {children}
            </div>
        </div>
    )
}
