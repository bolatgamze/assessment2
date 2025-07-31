import './App.css';
import NavBar from "./components/NavBar.jsx";
import {Route, Routes} from "react-router-dom";
import Home from "./components/Home.jsx";
import AlleRezepte from "./components/AlleRezepte.jsx";
import RezeptDetail from "./components/RezeptDetail.jsx";
import NeuesRezept from "./components/NeuesRezept.jsx";
import About from "./components/About.jsx";
import rezepteData from "./data/rezepte.js";
import { useState } from "react";

function App() {
    const [rezepte, setRezepte] = useState(rezepteData);

    return (
        <>
            <div>
                <NavBar/>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route
                        path="/rezepte"
                        element={<AlleRezepte rezepte={rezepte} setRezepte={setRezepte} />}
                    />
                    <Route
                        path="/rezepte/:id"
                        element={<RezeptDetail rezepte={rezepte} setRezepte={setRezepte} />}
                    />
                    <Route
                        path="/neu"
                        element={<NeuesRezept setRezepte={setRezepte} />}
                    />
                    <Route path="/about" element={<About />} />
                </Routes>
            </div>
        </>
    );
}

export default App;
