import axios from 'axios';
import { useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';

export default function RedirectLoading() {
    const [searchParams, setSearchParams] = useSearchParams();

    // async function authenticate(code: string) {
    //     const { REACT_APP_UAE_PASS_STG_URL } = process.env;
    //     const authUrl = `${REACT_APP_UAE_PASS_STG_URL}/idshub/token`
    //     const bodyParams = {
    //         'grant_type': 'authorization_code',
    //         // 'redirect_uri': 'https://uaepass-60eaa.web.app',
    //         'code': code,

    //     }
    //     const headers = {
    //         'Authorization': btoa(`sandbox_stage:sandbox_stage`),
    //         'Content-Type': 'application/x-www-form-urlencoded'
    //     }

    //     const response = await axios.post(authUrl, {
    //         headers,
    //         body: JSON.stringify(bodyParams)
    //     }).catch((err) => {
    //         console.log("Failed to fetch from staging url")
    //     })
    //     console.log("Response :", response)
    // }
    useEffect(() => {
        const authcode: string | null = searchParams.get("code");
        if (authcode) {
            // (async () => {
            //     await authenticate(authcode);
            // })()
        }
    }, [])
    return (
        <div>
            Loading....
        </div>
    )
}
