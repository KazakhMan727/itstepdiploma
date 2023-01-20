import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import MainMenu from "./main-menu/MainMenu";
import Registration from "./auth/Registration";
import Login from "./auth/Login";
import Advertisements from "./Advertisements/Advertisements";

function App() {
    return (
        <>
            <BrowserRouter>
                <Header />
                <Routes>
                    <Route path="/" element={<MainMenu />} />
                    <Route path="/reg" element={<Registration />} />
                    <Route path="/log" element={<Login />} />
                    <Route path="/adts" element={<Advertisements />} />
                </Routes>
                <Footer />
            </BrowserRouter>
        </>
    );
}

export default App;
