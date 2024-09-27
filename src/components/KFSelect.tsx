import { Select, SelectProps } from 'antd';

interface Props {
  label: string;
  rootStyle?: React.CSSProperties;
  onChangeInput: (value: string) => void;
  required?: boolean;
  options: {
    label: string;
    value: string;
  }[]
}

export default function KFSelect({ label, placeholder, onChangeInput, rootStyle, style, required, options, ...rest }: Props & SelectProps) {
  return (
    <div style={{ display: "flex", justifyContent: "flex-start", flexDirection: "column", rowGap: 5, ...rootStyle }} >
      <label style={{ textAlign: "left" }} title='required' >
        {required && <abbr style={{ color: "rgb(234, 0, 30)" }}>*</abbr>}
        {label}
      </label>
      <Select
        style={{ height: 44, color:"black", ...style }}
        placeholder={placeholder}
        onChange={(value) => onChangeInput(value)}
        options={options}
        {...rest}
      />
    </div>
  )
}
