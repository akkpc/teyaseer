import { Route, BrowserRouter as Router, Routes } from "react-router-dom";

import { Home, RedirectLoading, VendorRegistration } from "../pages/index";
import Signin from "../pages/Signin";
function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/signin" element={<Signin/>} />
                <Route path="/redirect" element={<RedirectLoading />} />
                <Route path="/vendor_registration" element={<VendorRegistration />} />
            </Routes>
        </Router>
    );
}

export default App;
