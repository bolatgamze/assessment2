import { useState } from "react";

function AlleRezepte({ rezepte, setRezepte }) {
    const [selectedCategory, setSelectedCategory] = useState("Alle");
    const [selectedCuisine, setSelectedCuisine] = useState("Alle");
    const [searchTitle, setSearchTitle] = useState("");

    const kategorien = ["Alle", "Frühstück", "Hauptgericht", "Dessert"];
    const küchen = ["Alle", "Türkisch", "Italienisch", "Französisch", "Deutsch", "Thailändisch"];

    const handleDelete = (id) => {
        if (window.confirm("Bist du sicher?")) {
            setRezepte(prev => prev.filter(r => r.id !== id));
        }
    };

    const gefilterteRezepte = rezepte.filter((r) => {
        const kategorieMatch = selectedCategory === "Alle" || r.category === selectedCategory;
        const kücheMatch = selectedCuisine === "Alle" || r.cuisine === selectedCuisine;
        const titelMatch = r.title.toLowerCase().includes(searchTitle.toLowerCase());
        return kategorieMatch && kücheMatch && titelMatch;
    });

    return (
        <div style={{ padding: '20px' }}>

            <input
                type="text"
                placeholder="Rezept suchen..."
                value={searchTitle}
                onChange={(e) => setSearchTitle(e.target.value)}
                style={{ padding: '5px', marginBottom: '20px', width: '100%' }}
            />

            <div style={{ display: "flex", gap: "20px", marginBottom: "20px", alignItems: "center", color: "white" }}>
                <label htmlFor="kategorie">Nach Mahlzeit filtern:</label>
                <select id="kategorie" value={selectedCategory} onChange={(e) => setSelectedCategory(e.target.value)}>
                    {kategorien.map((k) => (
                        <option key={k} value={k}>{k}</option>
                    ))}
                </select>

                <label htmlFor="küche">Nach Küche filtern:</label>
                <select id="küche" value={selectedCuisine} onChange={(e) => setSelectedCuisine(e.target.value)}>
                    {küchen.map((k) => (
                        <option key={k} value={k}>{k}</option>
                    ))}
                </select>
            </div>

            <div style={{
                display: "flex",
                flexWrap: "wrap",
                justifyContent: "center",
                gap: "20px"
            }}>
                {gefilterteRezepte.map((rezept) => (
                    <div key={rezept.id} style={{
                        width: "300px",
                        border: "1px solid #ccc",
                        borderRadius: "10px",
                        padding: "15px",
                        boxShadow: "0 2px 5px rgba(0,0,0,0.1)",
                        backgroundColor: "#fff"
                    }}>
                        <img src={rezept.image} alt={rezept.title}
                             style={{ width: "100%", borderRadius: "10px", objectFit: "cover", height: "200px" }} />
                        <h3>{rezept.title}</h3>
                        <p>{rezept.description}</p>
                        <p><strong>Kategorie:</strong> {rezept.category}</p>
                        <p><strong>Küche:</strong> {rezept.cuisine}</p>

                        <div style={{ display: "flex", justifyContent: "space-between", marginTop: "10px" }}>
                            <button style={buttonStyle}>Details</button>
                            <button style={buttonStyle}>Bearbeiten</button>
                            <button onClick={() => handleDelete(rezept.id)} style={{ ...buttonStyle, backgroundColor: "#c0392b" }}>
                                Löschen
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

const buttonStyle = {
    backgroundColor: "#637a43",
    color: "white",
    border: "none",
    padding: "6px 12px",
    borderRadius: "5px",
    textDecoration: "none",
    cursor: "pointer"
};

export default AlleRezepte;
