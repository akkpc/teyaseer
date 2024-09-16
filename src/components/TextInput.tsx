import { Input, InputProps } from 'antd';

interface Props {
    label: string;
    setData: (value: string) => void;
    data: string;
    name: string;
    rootStyle?: React.CSSProperties;
}
export default function TextInput({ label, placeholder, data, setData, required, name, type = "text", rootStyle, ...rest }: Props & InputProps) {
    return (
        <div style={{ display: "flex", justifyContent: "flex-start", flexDirection: "column", rowGap: 5, ...rootStyle }} >
            <label style={{ textAlign: "left" }} title='required' >
                {required && <abbr style={{ color: "rgb(234, 0, 30)" }}>*</abbr>}
                {label}
            </label>
            <Input
                name={name}
                type={type}
                value={data}
                onChange={(e) => setData(e.target.value)} placeholder={placeholder || label}
                {...rest}
            ></Input>
        </div>
    )
}
