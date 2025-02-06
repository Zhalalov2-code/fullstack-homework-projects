import { useEffect, useState } from "react";
import { Link } from 'react-router-dom';

function BookStore() {
    const [nameBook, setNameBook] = useState('');
    const [avtorBook, setAvtorBook] = useState('');
    const [yearBook, setYearBook] = useState('');
    const [select, setSelect] = useState('');
    const [textarea, setTextarea] = useState('');
    const [bookID, setBookId] = useState(1);

    const [books, setBooks] = useState([]);

    useEffect(() => {
        const storedBooks = localStorage.getItem('books');

        if (storedBooks) {
            try {
                setBooks(JSON.parse(storedBooks));
            } catch {
                setBooks([]);
            }
        }
    }, []);

    function addBook() {
        const book = {
            id: bookID,
            name: nameBook,
            avtor: avtorBook,
            year: yearBook,
            genre: select,
            description: textarea
        }

        const updateBooks = [...books, book];
        setBooks(updateBooks);
        localStorage.setItem('books', JSON.stringify(updateBooks));
        setBookId(bookID + 1);
        setNameBook('');
        setAvtorBook('');
        setYearBook('');
        setSelect('');
        setTextarea('');
    }

    function deleteBook(id){
        const bookDelete = books.filter(i => i.id !== id);
        setBooks(bookDelete);
        localStorage.setItem('books', JSON.stringify(bookDelete));

    }

    return (
        <div>
            <div className="row p-3">
                <div className="col-12">
                    <h1>Библиотека книг</h1>
                </div>
                <div className="col-7 mt-3 border border-1 border-black p-3 bg-secondary-subtle">
                    <input type="text" className="form-control" value={nameBook} placeholder="Название книги" onChange={(e) => setNameBook(e.target.value)} />
                    <input type="text" className="form-control mt-3" value={avtorBook} placeholder="Автор" onChange={(e) => setAvtorBook(e.target.value)} />
                    <input type="text" className="form-control mt-3" value={yearBook} placeholder="Год издание" onChange={(e) => setYearBook(e.target.value)} />
                    <select className="form-control mt-3" value={select} onChange={(e) => setSelect(e.target.value)}>
                        <option value="" disabled>Выберите жанр</option>
                        <option value="Фантастика">Фантастика</option>
                        <option value="Драма">Драма</option>
                        <option value="Приключения">Приключения</option>
                        <option value="Триллер">Триллер</option>
                    </select>
                    <textarea className="mt-3 p-2" value={textarea} placeholder="Краткое описание" onChange={(e) => setTextarea(e.target.value)}></textarea>
                    <button className="btn btn-primary ms-3" onClick={addBook}>Добавить книгу</button>
                </div>
                <div className="col-5">

                </div>
                <div className="row mt-3">
                    <div className="col-2 border border-1 border-black p-2 bg-secondary-subtle">
                        <h5>Название</h5>
                    </div>
                    <div className="col-2 border border-1 border-black p-2 bg-secondary-subtle">
                        <h5>Автор</h5>
                    </div>
                    <div className="col-1 border border-1 border-black p-2 bg-secondary-subtle">
                        <h5>Год</h5>
                    </div>
                    <div className="col-2 border border-1 border-black p-2 bg-secondary-subtle">
                        <h5>Действие</h5>
                    </div>
                </div>
                {books.length === 0 ? (
                    <p>Нет книг</p>
                ) : (books.map(book => (
                        <div className="row">
                        <div className="col-2 border border-1 border-black p-2">
                            <h5>{book.name}</h5>
                        </div>
                        <div className="col-2 border border-1 border-black p-2">
                            <h5>{book.avtor}</h5>
                        </div>
                        <div className="col-1 border border-1 border-black p-2">
                            <h5>{book.year}</h5>
                        </div>
                        <div className="col-2 border border-1 border-black p-2">
                            <div className="row">
                                <div className="col-5">
                                    <button className="btn btn-danger" onClick={() => deleteBook(book.id)}>Удалить</button>
                                </div>
                                <div className="col-5">
                                    <Link to={`/book.details/${book.id}`}><button className="btn btn-success">Подробнее</button></Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    ))
                )}
            </div>
        </div>
    )
}

export default BookStore;