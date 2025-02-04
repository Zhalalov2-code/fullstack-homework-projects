import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function CartPage() {
    const [basket, setBasket] = useState([]);

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

    function Delete(id){
        const deletephone = basket.filter((phone) => phone.id !== id);
        setBasket(deletephone);
        localStorage.setItem('basket', JSON.stringify(deletephone));
    }

    return (
        <div className='p-3'>
            <h2>Корзина</h2>
            <div className="row">
                {basket.length === 0 ? (
                    <p>Корзина пуста</p>
                ) : (
                    basket.map((phone, index) => (
                        <div key={index} className="col-12 col-md-4 mb-4">
                            <div className="card p-3">
                                <h5>{phone.brand} {phone.model}</h5>
                                <p>{phone.color}</p>
                                <p>{phone.storage}</p>
                                <p>{phone.price}$</p>
                                <Link to={`/product.details/${phone.id}`}><button className='btn btn-success'>Detailed</button></Link>
                                <button className='btn btn-danger mt-2' onClick={() => Delete(phone.id)}>Delete</button>
                            </div>
                        </div>
                    ))
                )}
            </div>
            <Link to='/magazin'><button className='btn btn-primary'>back</button></Link>
        </div>
    );
}

export default CartPage;
