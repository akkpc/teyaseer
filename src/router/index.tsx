import { Route, BrowserRouter as Router, Routes } from "react-router-dom";

import { ContractLicensePage, Home, RedirectLoading, VendorRegistration } from "../pages/index";
import Signin from "../pages/Signin";
function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/signin" element={<Signin/>} />
                <Route path="/redirect" element={<RedirectLoading />} />
                <Route path="/vendor_registration" element={<VendorRegistration />} />
                <Route path="/register" element={<ContractLicensePage />} />
            </Routes>
        </Router>
    );
}

export default App;
