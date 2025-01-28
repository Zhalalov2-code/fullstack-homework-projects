import { useEffect, useState } from "react";

function Localstoragecart() {
    const [name, setName] = useState('');
    const [price, setPrice] = useState('');
    const [quantity, setQuantity] = useState('');
    let [mycarts, setMycarts] = useState([]);

    useEffect(() => {
        const storedCarts = JSON.parse(localStorage.getItem("mycarts") || "[]");
        setMycarts(storedCarts);
    }, []);

    function addCart() {
        const cart = {
            id: Date.now(),
            name: name,
            price: price,
            quantity: quantity
        }

        let updateCart = [...mycarts, cart];
        setMycarts(updateCart);

        localStorage.setItem('mycarts', JSON.stringify(updateCart));
        setName('');
        setPrice('');
        setQuantity('');
    }
    return (
        <div>
            <div className="row mt-5">
                <div className="col-6">
                    <div className="row">
                        <div className="col-3">

                        </div>
                        <div className="col-6">
                            <h2 className="text-center">Add Cart</h2>
                            <label htmlFor="">Name:</label>
                            <input type="text" className="form-control" value={name} onChange={(e) => setName(e.target.value)} />
                            <label htmlFor="">Price:</label>
                            <input type="text" className="form-control" value={price} onChange={(e) => setPrice(e.target.value)} />
                            <label htmlFor="">Quantity:</label>
                            <input type="text" className="form-control" value={quantity} onChange={(e) => setQuantity(e.target.value)} />
                            <button className="btn btn-primary mt-3" onClick={addCart}>Add Cart</button>
                        </div>
                        <div className="col-3">

                        </div>
                    </div>
                </div>
                <div className="col-6">
                    <div className="col-12 text-center">
                        <h2>My Cart</h2>
                        {mycarts.length === 0 ? (
                            <p>No items in cart</p>
                        ) : (
                            <ul>
                                {mycarts.map((cart) => (
                                    <li key={cart.id}>
                                        {cart.name} - ${cart.price} x {cart.quantity}
                                    </li>
                                ))}
                            </ul>
                        )}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Localstoragecart;