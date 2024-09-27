import axios from 'axios';
import { useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';

export default function RedirectLoading() {
    const [searchParams, setSearchParams] = useSearchParams();

    async function authenticate(code: string) {
        const { REACT_APP_API_URL } = process.env;
        const authUrl = `${REACT_APP_API_URL}/api/v1/auth/${code}`

        const response = await axios.get(authUrl).catch((err) => {
            console.log("Failed to fetch from staging url" + err)
        })
        console.log("Response:  " , response)
    }
    useEffect(() => {
        const authcode: string | null = searchParams.get("code");
        if (authcode) {
            (async () => {
                await authenticate(authcode);
            })()
        }
    }, [])
    return (
        <div>
            Loading....
        </div>
    )
}
