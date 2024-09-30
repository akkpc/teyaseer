import { Select, SelectProps } from 'antd';

interface Props {
  label: string;
  rootStyle?: React.CSSProperties;
  onChangeInput: (value: string | string[]) => void;
  required?: boolean;
  options: {
    label: string;
    value: string;
  }[]
}

export default function KFMultiSelect({ label, placeholder, onChangeInput, rootStyle, style, required, options, value, ...rest }: Props & SelectProps) {
  return (
    <div style={{ display: "flex", justifyContent: "flex-start", flexDirection: "column", rowGap: 5, ...rootStyle }} >
      {/* <label style={{ textAlign: "left" }} title='required' >
        {required && <abbr style={{ color: "rgb(234, 0, 30)" }}>*</abbr>}
        {label}
      </label> */}
      <Select
        mode="multiple"
        style={{ width: '100%', height: 44, color: "black" }}
        placeholder={placeholder}
        options={options}
        onChange={(v) => onChangeInput(v)}
        {...rest}
      />
    </div>
  )
}
