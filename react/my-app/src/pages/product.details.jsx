import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function ProductDetails() {
    const [basket, setBasket] = useState([]);
    const { id } = useParams();
    const phoneID = parseInt(id)
    const phone = basket.find((p) => p.id === phoneID);

    useEffect(() => {
        const savedBasket = localStorage.getItem('basket');

        if (savedBasket) {
            try {
                setBasket(JSON.parse(savedBasket));
            } catch {
                setBasket([]);
            }
        }
    }, []);

    if (!phone) {
        return <div>Не найдено</div>
    }

    return (
        <div className="product-details p-3">
            <h1>{phone.brand} {phone.model}</h1>
            <p>price: {phone.price}</p>
            <p>color: {phone.color}</p>
            <p>storage: {phone.storage}</p>
            <Link to='/basket'><button className='btn btn-success'>back</button></Link>
        </div>
    )
}

export default ProductDetails;