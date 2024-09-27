

import { Select } from 'antd';
import { SelectProps } from 'antd/es/select';

interface Props {
}

const KFSelect = ({ style, ...rest }: Props & SelectProps) => (
    <Select
        variant='outlined'
        style={{ borderRadius: 20,...style}}
        {...rest}
    />
);

export default KFSelect;