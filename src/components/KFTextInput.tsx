import { Input, InputProps } from 'antd';

interface Props {
    label: string;
    rootStyle?: React.CSSProperties;
    onChangeInput: (value: string) => void;
}
export default function KFTextInput({ label, placeholder, onChangeInput, required, type = "text", rootStyle, style, onChange, ...rest }: Props & InputProps) {
    return (
        <div style={{ display: "flex", justifyContent: "flex-start", flexDirection: "column", rowGap: 5, ...rootStyle }} >
            {/* <label style={{ textAlign: "left" }} title='required' >
                {required && <abbr style={{ color: "rgb(234, 0, 30)" }}>*</abbr>}
                {label}
            </label> */}
            <Input
                placeholder={placeholder || label}
                style={{ height: 44, ...style }}
                onChange={(e) => {
                    onChangeInput(e.target.value);
                    if(onChange) {
                        onChange(e);
                    }
                }}
                {...rest}
            ></Input>
        </div>
    )
}
