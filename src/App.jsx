import './App.css';
import NavBar from "./components/NavBar.jsx";
import { Route, Routes } from "react-router-dom";
import Home from "./components/Home.jsx";
import AlleRezepte from "./components/AlleRezepte.jsx";
import RezeptDetail from "./components/RezeptDetail.jsx";
import NeuesRezept from "./components/NeuesRezept.jsx";
import About from "./components/About.jsx";
import { useState } from "react";

import menemen from 'public/menemen.jpg';
import pasta from 'public/pasta.jpg';
import tiramisu from 'public/tiramisu.jpg';
import eclair from 'public/eclair.jpg';
import croissant from 'public/croissant.jpg';
import karniyarik from 'public/karniyarik.jpg';
import padthai from 'public/padthai.jpg';
import ratatouille from 'public/ratatouille.jpg';
import weisswurst from 'public/weisswurst.jpg';
import apfelstrudel from 'public/apfelstrudel.jpg';

function App() {
    const [rezepte, setRezepte] = useState([
        {
            id: 1,
            title: "Menemen",
            description: "Türkisches Frühstück mit Ei, Tomaten und Paprika.",
            image: menemen,
            ingredients: ["Eier", "Tomaten", "Paprika", "Zwiebeln", "Salz"],
            steps: "Gemüse schneiden, anbraten, Eier hinzufügen und stocken lassen.",
            category: "Frühstück",
            cuisine: "Türkisch",
            rating: 0,
        },
        {
            id: 2,
            title: "Spaghetti Carbonara",
            description: "Italienische Pasta mit Speck, Ei und Parmesan.",
            image: pasta,
            ingredients: ["Spaghetti", "Speck", "Eier", "Parmesan", "Pfeffer"],
            steps: "Pasta kochen, Speck anbraten, mit Eiermasse mischen.",
            category: "Hauptgericht",
            cuisine: "Italienisch",
            rating: 0,
        },
        {
            id: 3,
            title: "Tiramisu",
            description: "Klassisches italienisches Dessert mit Mascarpone und Kaffee.",
            image: tiramisu,
            ingredients: ["Mascarpone", "Kaffee", "Löffelbiskuit", "Eier", "Kakao"],
            steps: "Löffelbiskuit in Kaffee tunken, schichten, kühlen.",
            category: "Dessert",
            cuisine: "Italienisch",
            rating: 2,
        },
        {
            id: 4,
            title: "Éclair",
            description: "Französisches Gebäck mit Vanillecreme-Füllung.",
            image: eclair,
            ingredients: ["Brandteig", "Vanillecreme", "Schokolade"],
            steps: "Brandteig backen, füllen, mit Schokolade glasieren.",
            category: "Dessert",
            cuisine: "Französisch",
            rating: 0,
        },
        {
            id: 5,
            title: "Croissant mit Butter",
            description: "Französisches Frühstücksgebäck – buttrig und fluffig.",
            image: croissant,
            ingredients: ["Mehl", "Butter", "Hefe", "Milch", "Zucker"],
            steps: "Teig mehrmals tourieren, backen.",
            category: "Frühstück",
            cuisine: "Französisch",
            rating: 0,
        },
        {
            id: 6,
            title: "Karnıyarık",
            description: "Gefüllte Auberginen mit Hackfleisch – türkische Hausmannskost.",
            image: karniyarik,
            ingredients: ["Auberginen", "Hackfleisch", "Tomaten", "Zwiebeln", "Petersilie"],
            steps: "Auberginen frittieren, füllen, im Ofen backen.",
            category: "Hauptgericht",
            cuisine: "Türkisch",
            rating: 3,
        },
        {
            id: 7,
            title: "Pad Thai",
            description: "Gebratene Reisnudeln mit Ei, Gemüse und Erdnüssen.",
            image: padthai,
            ingredients: ["Reisnudeln", "Eier", "Sojasprossen", "Tofu", "Erdnüsse"],
            steps: "Nudeln einweichen, braten, Zutaten vermengen.",
            category: "Hauptgericht",
            cuisine: "Thailändisch",
            rating: 1,
        },
        {
            id: 8,
            title: "Ratatouille",
            description: "Französisches Schmorgericht mit Sommergemüse.",
            image: ratatouille,
            ingredients: ["Zucchini", "Paprika", "Aubergine", "Tomaten", "Kräuter"],
            steps: "Gemüse schneiden, schichten, langsam schmoren.",
            category: "Hauptgericht",
            cuisine: "Französisch",
            rating: 1,
        },
        {
            id: 9,
            title: "Weißwurst mit Brezel",
            description: "Traditionelles bayerisches Frühstück mit süßem Senf.",
            image: weisswurst,
            ingredients: ["Weißwurst", "Brezel", "Süßer Senf"],
            steps: "Wurst im Wasserbad erhitzen, mit Brezel servieren.",
            category: "Frühstück",
            cuisine: "Deutsch",
            rating: 0,
        },
        {
            id: 10,
            title: "Apfelstrudel",
            description: "Österreichisches Dessert mit Äpfeln und Zimt.",
            image: apfelstrudel,
            ingredients: ["Äpfel", "Zimt", "Blätterteig", "Zucker", "Rosinen"],
            steps: "Füllen, rollen, backen, mit Puderzucker servieren.",
            category: "Dessert",
            cuisine: "Deutsch",
            rating: 0,
        }
    ]);

    return (
        <>
            <NavBar />
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
        </>
    );
}

export default App;
