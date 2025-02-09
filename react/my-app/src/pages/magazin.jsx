import { useEffect, useState } from 'react';
import { phones } from '../js/phones';
import { Link } from 'react-router-dom';

function Magazin() {
    const [basket, setBasket] = useState([]);
    const [search, setSearch] = useState('');
    const [sortedPhones, setSortedPhones] = useState(phones);
    const [theme, setTheme] = useState(false);

    useEffect(() => {
        const savedBasket = localStorage.getItem('basket');

        if (savedBasket) {
            try {
                setBasket(JSON.parse(savedBasket));
            } catch {
                setBasket([]);
            }
        }

        const savedState = localStorage.getItem('theme');
        if (savedState !== null) {
            setTheme(JSON.parse(savedState));
        }
    }, []);

    useEffect(() => {
        const filteredPhones = phones.filter(phone =>
            phone.brand.toLowerCase().includes(search.toLowerCase()) ||
            phone.model.toLowerCase().includes(search.toLowerCase()) ||
            phone.color.toLowerCase().includes(search.toLowerCase()) ||
            phone.storage.toLowerCase().includes(search.toLowerCase())
        );
        setSortedPhones(filteredPhones);
    }, [search]);

    function addCard(phone) {
        const updateBasket = [...basket, phone];
        setBasket(updateBasket);
        localStorage.setItem('basket', JSON.stringify(updateBasket));
    }

    function sortPhones(e) {
        const sortBy = e.target.value;
        let sortArrays = [...sortedPhones];

        if (sortBy === 'price') {
            sortArrays.sort((a, b) => a.price - b.price);
        } else if (sortBy === 'brand') {
            sortArrays.sort((a, b) => a.brand.localeCompare(b.brand));
        }

        setSortedPhones(sortArrays);
    }

    function toggleTheme() {
        setTheme(prevTheme => {
            const newTheme = !prevTheme;
            localStorage.setItem('theme', JSON.stringify(newTheme));
            return newTheme;
        });
    }
    

    return (
        <div>
            <div style={{ backgroundColor: theme ? 'gray' : 'green'}} className="row text-white">
                <div className="col-12 text-center p-3">
                    <div className='row'>
                        <div className='col-5'>

                        </div>
                        <div className='col-2'>
                            <h2>Intephone</h2>
                            <button className='btn btn-dark' onClick={toggleTheme}>dark</button>
                            <br />
                            <Link to='/basket'> <button className='btn btn-primary mt-2'>View card</button></Link>
                        </div>
                        <div className='col-2'>
                            <input type="search" className='form-control' placeholder='Search' onChange={(e) => setSearch(e.target.value)} />
                            <br />
                            <select onChange={sortPhones} className='form-control' name="" id="">
                                <option value="" disabled>Sort by</option>
                                <option value="price">Price</option>
                                <option value="brand">Brand</option>
                            </select>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row" style={{ backgroundColor: theme ? 'black' : 'white'}}>
                {sortedPhones && sortedPhones.length > 0 ? (
                    sortedPhones.map((product) => (
                        <div className="col-12 col-md-4 mb-4 p-3" key={product.id}>
                            <div style={{ backgroundColor: theme ? 'gray' : 'white', color: theme ? 'white' : 'black'}} className="card p-3">
                                <h4>{product.brand} {product.model}</h4>
                                <p><strong>Color:</strong> {product.color}</p>
                                <p><strong>Storage:</strong> {product.storage}</p>
                                <p><strong>Price:</strong> ${product.price}</p>
                                <button className='btn btn-success' onClick={() => addCard(product)}>add to card</button>
                            </div>
                        </div>
                    ))
                ) : (
                    <p>No products available</p>
                )}
            </div>
        </div>
    );
}

export default Magazin;
