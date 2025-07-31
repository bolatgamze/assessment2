import {useState} from "react";
import {useNavigate} from "react-router-dom";

function AlleRezepte({rezepte, setRezepte}) {
    const [selectedCategory, setSelectedCategory] = useState("Alle");
    const [selectedCuisine, setSelectedCuisine] = useState("Alle");
    const [searchTitle, setSearchTitle] = useState("");

    const navigate = useNavigate();

    const kategorien = ["Alle", "Frühstück", "Hauptgericht", "Dessert"];
    const küchen = ["Alle", "Türkisch", "Italienisch", "Französisch", "Deutsch", "Thailändisch"];

    const gefilterteRezepte = rezepte.filter((r) => {
        const kategorieMatch = selectedCategory === "Alle" || r.category === selectedCategory;
        const kücheMatch = selectedCuisine === "Alle" || r.cuisine === selectedCuisine;
        const titelMatch = r.title.toLowerCase().includes(searchTitle.toLowerCase());
        return kategorieMatch && kücheMatch && titelMatch;
    });
    const handleRatingClick = (id, newRating) => {
        setRezepte(prev =>
            prev.map(r =>
                r.id === id ? {...r, rating: newRating} : r
            )
        );
    };

    return (
        <div style={{padding: '20px'}}>
            <input
                type="text"
                placeholder="Rezept suchen..."
                value={searchTitle}
                onChange={(e) => setSearchTitle(e.target.value)}
                style={{padding: '5px', marginBottom: '20px', width: '100%'}}
            />

            <div style={{display: "flex", gap: "20px", marginBottom: "20px", alignItems: "center", color: "white"}}>
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
                    <div
                        key={rezept.id}
                        onClick={() => navigate(`/rezepte/${rezept.id}`)}
                        style={{
                            width: "300px",
                            border: "1px solid #ccc",
                            borderRadius: "10px",
                            padding: "15px",
                            boxShadow: "0 2px 5px rgba(0,0,0,0.1)",
                            backgroundColor: "#fff",
                            cursor: "pointer",
                            transition: "transform 0.2s ease",
                        }}
                        onMouseEnter={(e) => e.currentTarget.style.transform = "scale(1.02)"}
                        onMouseLeave={(e) => e.currentTarget.style.transform = "scale(1)"}
                    >
                        <img src={rezept.image} alt={rezept.title}
                             style={{width: "100%", borderRadius: "10px", objectFit: "cover", height: "200px"}}/>
                        <h3>{rezept.title}</h3>
                        <p>{rezept.description}</p>
                        <p><strong>Kategorie:</strong> {rezept.category}</p>
                        <p><strong>Küche:</strong> {rezept.cuisine}</p>
                        <p>
                           <span onClick={(e) => {
                               e.stopPropagation();
                               handleRatingClick(rezept.id, 1);
                           }}>
                               {rezept.rating >= 1 ? "⭐" : "☆"}
                           </span>
                            <span onClick={(e) => {
                                e.stopPropagation();
                                handleRatingClick(rezept.id, 2);
                            }}>
                                {rezept.rating >= 2 ? "⭐" : "☆"}
                            </span>
                            <span onClick={(e) => {
                                e.stopPropagation();
                                handleRatingClick(rezept.id, 3);
                            }}>
                                {rezept.rating >= 3 ? "⭐" : "☆"}
                            </span>
                        </p>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default AlleRezepte;
