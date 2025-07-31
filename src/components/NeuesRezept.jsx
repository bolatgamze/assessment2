import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const NeuesRezept = ({ setRezepte }) => {
    const navigate = useNavigate();

    const [neuesRezept, setNeuesRezept] = useState({
        title: '',
        description: '',
        image: '/default.png',
        ingredients: '',
        steps: '',
        category: '',
        cuisine: ''
    });

    const kategorien = ['Frühstück', 'Hauptgericht', 'Dessert'];
    const küchen = ['Türkisch', 'Italienisch', 'Französisch', 'Deutsch', 'Thailändisch'];

    const handleChange = (e) => {
        const { name, value } = e.target;
        setNeuesRezept(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!neuesRezept.title || !neuesRezept.category || !neuesRezept.cuisine) {
            alert("Bitte fülle alle Pflichtfelder aus.");
            return;
        }

        const rezeptZumSpeichern = {
            id: Date.now(),
            title: neuesRezept.title,
            description: neuesRezept.description,
            image: '/default.png',
            ingredients: neuesRezept.ingredients.split(',').map(i => i.trim()),
            steps: neuesRezept.steps,
            category: neuesRezept.category,
            cuisine: neuesRezept.cuisine
        };

        setRezepte(prev => [...prev, rezeptZumSpeichern]);

        navigate('/rezepte');
    };

    return (
        <div className="card">
            <h2>Neues Rezept</h2>
            <form onSubmit={handleSubmit}>
                <label>Titel*</label><br />
                <input
                    type="text"
                    name="title"
                    value={neuesRezept.title}
                    onChange={handleChange}
                /><br /><br />

                <label>Beschreibung</label><br />
                <textarea
                    name="description"
                    value={neuesRezept.description}
                    onChange={handleChange}
                ></textarea><br /><br />

                <label>Zutaten (mit Komma trennen)</label><br />
                <input
                    type="text"
                    name="ingredients"
                    value={neuesRezept.ingredients}
                    onChange={handleChange}
                /><br /><br />

                <label>Zubereitungsschritte</label><br />
                <textarea
                    name="steps"
                    value={neuesRezept.steps}
                    onChange={handleChange}
                ></textarea><br /><br />

                <label>Kategorie*</label><br />
                <select name="category" value={neuesRezept.category} onChange={handleChange}>
                    <option value="">Kategorie wählen</option>
                    {kategorien.map(k => (
                        <option key={k} value={k}>{k}</option>
                    ))}
                </select><br /><br />

                <label>Küche*</label><br />
                <select name="cuisine" value={neuesRezept.cuisine} onChange={handleChange}>
                    <option value="">Küche wählen</option>
                    {küchen.map(k => (
                        <option key={k} value={k}>{k}</option>
                    ))}
                </select><br /><br />

                <button type="submit">Rezept speichern</button>
            </form>
        </div>
    );
};

export default NeuesRezept;
