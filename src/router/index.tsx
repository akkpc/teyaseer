import { Route, BrowserRouter as Router, Routes } from "react-router-dom";

import { Home } from "../pages/index";
import Signin from "../pages/Signin";
function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/signin" element={<Signin/>} />
                <Route path="/page3" element={<Home />} />
            </Routes>
        </Router>
    );
}

export default App;
