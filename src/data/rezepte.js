import menemen from '/image/menemen.jpg';
import pasta from '/image/pasta.jpg';
import tiramisu from '/image/tiramisu.jpg';
import eclair from '/image/eclair.jpg';
import croissant from '/image/croissant.jpg';
import karniyarik from '/image/karniyarik.jpg';
import padthai from '/image/padthai.jpg';
import ratatouille from '/image/ratatouille.jpg';
import weisswurst from '/image/weisswurst.jpg';
import apfelstrudel from '/image/apfelstrudel.jpg';

const rezepte = [
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
];

export default rezepte;
