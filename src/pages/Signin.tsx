import { Button, Input } from 'antd';
import { useState } from 'react';
import { Header } from '../components/Header';

export default function Signin() {
    const [emirateId, setEmirateId] = useState<String>();
    return (
        <div>
            <Header path={["Home", "Sign In"]} >
                <div style={{ display: "inline-block" }} >
                    <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }} >
                        <Input onChange={(e) => setEmirateId(e.target.value)} style={{ width: 250 }} placeholder="Emirates ID/Phone No/Email" />
                        <Button style={{ width: 150, marginTop: 10 }}>Sign In</Button>
                    </div>
                </div>
            </Header>
        </div>
    )
}
