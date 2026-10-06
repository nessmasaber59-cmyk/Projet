import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import "./style.css"
import Accueil from "./Accueil";
import Apropos from "./Apropos";
import Services from "./Services";
import Contact from "./Contact";
import logo from "./logo1.png"

export default function Hnavbar() {
    return (
        <div id="links">
            <BrowserRouter>
                <nav className="navbar navbar-expand-lg navbar-light py-1">
                    <div className="container">
                        <div>
                            <img src={logo} alt="logo"/>
                        </div>
                        <div className="navbar-nav ms-auto" style={{fontSize: "16px", fontWeight: "bold"}}>
                            <Link to="/accueil" className="nav-link">Accueil</Link>
                            <Link to="/propos" className="nav-link">A propos</Link>
                            <Link to="/services" className="nav-link">Services</Link>
                            <Link to="/contact" className="nav-link">Contact</Link>
                        </div>
                    </div>
                </nav>
                <Routes>
                    <Route path="/accueil" element={<Accueil />} />
                    <Route path="/propos" element={<Apropos />} />
                    <Route path="/services" element={<Services />} />
                    <Route path="/contact" element={<Contact />} />
                </Routes>
            </BrowserRouter>
        </div>
    );
}