import { useEffect, useState } from "react";

function ManagerZametki() {
    const [textarea, setTextarea] = useState('');
    const [categorie, setCategorie] = useState('');
    const [zametki, setZametki] = useState([]);
    const [isEditing, setIsEditing] = useState(false);
    const [editIndex, setEditIndex] = useState(null);
    const [selectedCategory, setSelectedCategory] = useState('Все заметки');

    const categories = ["Все заметки", "Работа", "Личное"];

    useEffect(() => {
        const storedZametki = JSON.parse(localStorage.getItem('zametki') || '[]');
        setZametki(storedZametki);
    }, []);

    function addZametka() {
        const newZametka = { value: textarea, categorie };
        const updatedZametki = [...zametki, newZametka];
        setZametki(updatedZametki);
        localStorage.setItem('zametki', JSON.stringify(updatedZametki));
        setTextarea('');
        setCategorie('');
    }

    function deleteZametka(index) {
        const updatedZametki = zametki.filter((_, i) => i !== index);
        setZametki(updatedZametki);
        localStorage.setItem('zametki', JSON.stringify(updatedZametki));
    }

    function editZametka(index) {
        const zametkaToEdit = zametki[index];
        setTextarea(zametkaToEdit.value);
        setCategorie(zametkaToEdit.categorie);
        setIsEditing(true);
        setEditIndex(index);
    }

    function saveEditZametka() {
        const updatedZametki = [...zametki];
        updatedZametki[editIndex] = { value: textarea, categorie };
        setZametki(updatedZametki);
        localStorage.setItem('zametki', JSON.stringify(updatedZametki));
        setTextarea('');
        setCategorie('');
        setIsEditing(false);
        setEditIndex(null);
    }

    const filteredZametki = selectedCategory === "Все заметки"
        ? zametki
        : zametki.filter(zametka => zametka.categorie === selectedCategory);

    return (
        <div>
            <div className="row" style={{ backgroundColor: 'LightCyan' }}>
                <div className="col-12 p-2" style={{ backgroundColor: 'white' }}>
                    <h2 className="ms-3">Менеджер заметок</h2>
                </div>
                <div className="col-3 ms-3 m-3 p-4" style={{ backgroundColor: 'white' }}>
                    <h3>Категории:</h3>
                    {categories.map((category, index) => (
                        <div key={index}>
                            <a
                                className="mt-3 text-secondary"
                                style={{ cursor: 'pointer', display: 'block' }}
                                onClick={() => setSelectedCategory(category)}
                            >
                                {category}
                            </a>
                        </div>
                    ))}
                </div>
                <div className="col-8 ms-3 m-3 p-4" style={{ backgroundColor: 'white' }}>
                    <div className="col-12">
                        <textarea
                            placeholder="Введите текст"
                            rows='5'
                            cols='80'
                            onChange={(e) => setTextarea(e.target.value)}
                            value={textarea}
                        />
                        <select
                            style={{ width: '200px' }}
                            onChange={(e) => setCategorie(e.target.value)}
                            value={categorie}
                        >
                            <option value="" disabled>Выберите категорию</option>
                            {categories.slice(1).map((category, index) => (
                                <option key={index} value={category}>{category}</option>
                            ))}
                        </select>
                        {isEditing ? (
                            <button className="btn btn-primary ms-3" onClick={saveEditZametka}>Сохранить изменения</button>
                        ) : (
                            <button
                                className="btn btn-primary ms-3"
                                onClick={addZametka}
                                disabled={!textarea || !categorie}
                            >
                                Добавить заметку
                            </button>
                        )}
                    </div>
                </div>
                <div className="row">
                    <div className="col-3 ms-3"></div>
                    <div className="col-8 ms-3 m-3 p-4">
                        {filteredZametki.length === 0 ? (
                            <p className="text-center">Нет заметок</p>
                        ) : (
                            <div>
                                {filteredZametki.map((zametka, index) => (
                                    <div
                                        key={index}
                                        style={{
                                            backgroundColor: 'white',
                                            marginBottom: '10px',
                                            padding: '10px',
                                            border: '1px solid #ddd',
                                            borderRadius: '5px',
                                        }}
                                    >
                                        <p><strong>Категория:</strong> {zametka.categorie}</p>
                                        <p>{zametka.value}</p>
                                        <button className="btn btn-warning" onClick={() => editZametka(index)}>Изменить</button>
                                        <button className="btn btn-danger ms-2" onClick={() => deleteZametka(index)}>Удалить</button>
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ManagerZametki;
