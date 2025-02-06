import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Link } from 'react-router-dom';

function BookDetails() {
    const [books, setBooks] = useState([]);
    const { id } = useParams();
    const bookID = parseInt(id);
    const book = books.find((p) => p.id === bookID);

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

    if (!book) {
        return <div>Книга не найдена</div>;
    }

    return (
        <div>
            <div className="row p-4 ">
                <div className="col-5 mt-3 border border-1 border-black p-3 bg-secondary-subtle">
                    <div className="row">
                        <div className="col-12 border border-1 border-start-0 border-end-0 border-top-0 border-black">
                            <h2>{book.name}</h2>
                        </div>
                        <div className="col-6">
                            <label htmlFor="">Автор:</label>
                            <h5>{book.avtor}</h5>
                            <label htmlFor="">Жанр:</label>
                            <h5>{book.genre}</h5>
                            <label htmlFor="">описание:</label>
                            <p><b>{book.description}</b></p>
                           <Link to={'/bookStore'}><button className="btn btn-primary">Назад</button></Link>
                        </div>
                        <div className="col-6">
                            <label htmlFor="">Год издания:</label>
                            <h5>{book.year}</h5>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BookDetails;