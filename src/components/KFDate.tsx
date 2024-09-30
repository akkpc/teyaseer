import { DatePicker } from 'antd';
import dayjs from 'dayjs';
import customParseFormat from 'dayjs/plugin/customParseFormat';

dayjs.extend(customParseFormat);

interface Props {
    value: string;
    label: string;
    name: string;
    rootStyle?: React.CSSProperties;
    required?: boolean;
    style?: React.CSSProperties;
    onChangeInput: (date: string | string[]) => void;
}
const dateFormat = 'DD/MM/YYYY';
export function KFDate({ onChangeInput, label, value, required, name, rootStyle, style, onChange, ...rest }: any) {
    return (
        <div style={{ display: "flex", justifyContent: "flex-start", flexDirection: "column", rowGap: 5, ...rootStyle }} >
            {/* <label style={{ textAlign: "left" }} title='required' >
                {required && <abbr style={{ color: "rgb(234, 0, 30)" }}>*</abbr>}
                {label}
            </label> */}
            <DatePicker
                onChange={(_, dateString) => {
                    onChangeInput(dateString)
                    if (onChange) {
                        onChange(_, dateString);
                    }
                }}
                style={{ height: 44 }}
                picker="date"
                format={dateFormat}
                {...rest}
                value={value ? dayjs(value, dateFormat) : null}
            />
        </div>
    )
}
