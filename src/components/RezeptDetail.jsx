import { useParams, useNavigate } from "react-router-dom";

function RezeptDetail({ rezepte, setRezepte }) {
    const { id } = useParams();
    const navigate = useNavigate();

    const rezept = rezepte.find(r => r.id === parseInt(id));

    if (!rezept) {
        return <p>Rezept nicht gefunden.</p>;
    }

    const handleDelete = () => {
        const confirm = window.confirm("Möchtest du dieses Rezept wirklich löschen?");
        if (confirm) {
            setRezepte(prev => prev.filter(r => r.id !== rezept.id));
            navigate("/rezepte");
        }
    };

    const handleEdit = () => {
        alert("In Bearbeitung...")
    };

    return (
        <div style={{ padding: "30px", maxWidth: "800px", margin: "auto", backgroundColor: "#fff", borderRadius: "10px", boxShadow: "0 2px 10px rgba(0,0,0,0.1)" }}>
            <h2>{rezept.title}</h2>
            <img src={rezept.image} alt={rezept.title} style={{ width: "100%", maxHeight: "400px", objectFit: "cover", borderRadius: "10px" }} />
            <p><strong>Beschreibung:</strong> {rezept.description}</p>
            <p><strong>Kategorie:</strong> {rezept.category}</p>
            <p><strong>Küche:</strong> {rezept.cuisine}</p>
            <p><strong>Zutaten:</strong></p>
            <ul>
                {rezept.ingredients.map((zutat, index) => (
                    <li key={index}>{zutat}</li>
                ))}
            </ul>
            <p><strong>Schritte:</strong></p>
            <p>{rezept.steps}</p>

            <div style={{ display: "flex", gap: "10px", marginTop: "20px" }}>
                <button onClick={handleEdit} style={buttonStyle}>Bearbeiten</button>
                <button onClick={handleDelete} style={{ ...buttonStyle, backgroundColor: "#c0392b" }}>Löschen</button>
            </div>
        </div>
    );
}

const buttonStyle = {
    backgroundColor: "#637a43",
    color: "white",
    border: "none",
    padding: "10px 16px",
    borderRadius: "5px",
    cursor: "pointer"
};

export default RezeptDetail;
