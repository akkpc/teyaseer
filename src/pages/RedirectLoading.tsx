import axios from 'axios';
import { useCallback, useEffect } from 'react';
import { useNavigate, useNavigation, useSearchParams } from 'react-router-dom';
import { setItemLocal } from '../helpers';

interface UARPassResponse {
    email: string;
    firstnameAR: string;
    firstnameEN: string;
    fullnameAR: string;
    fullnameEN: string;
    gender: string;
    lastnameAR: string;
    lastnameEN: string;
    mobile: string;
    nationalityAR: string;
    nationalityEN: string;
    sub: string;
    userType: string;
    uuid: string;
}

export default function RedirectLoading() {
    const [searchParams, setSearchParams] = useSearchParams();
    const navigate = useNavigate();
    const authenticateCallback = useCallback(authenticate, [])

    async function authenticate(code: string) {
        const { REACT_APP_API_URL } = process.env;
        const authUrl = `${REACT_APP_API_URL}/api/v1/auth/${code}`

        const response = await axios.get(authUrl).then((res) => res.data).catch((err) => {
            console.log("Failed to fetch from staging url" + err)
        })
        if (response) return response.data;
    }
    useEffect(() => {
        const authcode: string | null = searchParams.get("code");
        if (authcode) {
            (async () => {
                const userDetails: UARPassResponse = await authenticateCallback(authcode);
                if (userDetails) {
                    setItemLocal("usepass_details", JSON.stringify(userDetails));
                    navigate("/register")
                } else {
                    navigate("/")
                }
            })()
        }
    }, [])

    return (
        <div>
            Loading....
        </div>
    )
}
