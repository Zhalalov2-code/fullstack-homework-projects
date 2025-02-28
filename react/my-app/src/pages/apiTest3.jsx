import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function ApiTest3() {
    const [products3, setProducts3] = useState([]);
    const [categories3, setCategories3] = useState([]);
    const [selectedCategory3, setSelectedCategory3] = useState(null);

    async function test3() {
        const x = await axios({
            method: 'get',
            url: 'https://fakestoreapi.com/products'
        });
        console.log(x);
        if (x.status === 200) {
            setProducts3(x.data);
        }
    }

    async function getCategories3() {
        const x = await axios({
            method: 'get',
            url: 'https://fakestoreapi.com/products/categories'
        });
        console.log(x);
        if (x.status === 200) {
            setCategories3(x.data);
        }
    }

    const filteredProducts = selectedCategory3
        ? products3.filter(product => product.category === selectedCategory3)
        : products3;

    useEffect(() => {
        test3();
        getCategories3();
    }, []);

    return (
        <div>
            <div className="row">
                <h3>Категории:</h3>
                {categories3.length > 0 ? (
                    categories3.map((category) => (
                        <button
                            key={category}
                            onClick={() => setSelectedCategory3(category)}
                            className="btn btn-white m-2"
                        >
                            {category}
                        </button>
                    ))
                ) : (
                    <p>Загрузка категорий...</p>
                )}
            </div>

            <div className="row">
                <h3>Продукты:</h3>
                <br />
                {filteredProducts.length > 0 ? (
                    filteredProducts.map((product) => (
                        <div className="col-2" key={product.id}>
                            <Link to={`/details.apiTest3/${product.id}`}><p>{product.title}</p></Link>
                            <img src={product.image} alt={product.title} width={200} />
                            <p><b>Описание:</b> {product.description}</p>
                            <p><b>Цена:</b> ${product.price}</p>
                        </div>
                    ))
                ) : (
                    <p>Загрузка продуктов...</p>
                )}
            </div>
        </div>
    );
}

export default ApiTest3;
