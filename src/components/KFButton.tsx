import { Button, ButtonProps } from 'antd';
import { ReactNode } from 'react';
import { buttonBackground1 } from '../colors';

interface Props {
    children: ReactNode | string;
}
export default function KFButton({ children, style }: Props & ButtonProps) {
    return (
        <div>
            <Button
                style={{
                    backgroundColor: buttonBackground1,
                    color: "white",
                    width: "100%",
                    height: 48,
                    borderRadius: 12,
                    marginTop: 16,
                    fontWeight: 500,
                    fontSize: 18,
                    ...style
                }}
            >{children}
            </Button>
        </div>
    )
}
