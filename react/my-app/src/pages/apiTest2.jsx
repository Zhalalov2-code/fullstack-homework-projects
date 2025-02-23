import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function ApiTest2() {
    const [products, setProducts] = useState([]);
    const [categories, setCategories] = useState([]);
    const [filteredProducts, setFilteredProducts] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState(null);

    async function apiTest1() {
        const x = await axios({
            method: 'get',
            url: 'https://api.escuelajs.co/api/v1/products'
        })
        console.log(x)
        if (x.status === 200) {
            setProducts(x.data);
            setFilteredProducts(x.data)
        }
    }

    async function getCategories() {
        const x = await axios({
            method: 'get',
            url: 'https://api.escuelajs.co/api/v1/categories'
        })
        console.log(x)
        if (x.status === 200) {
            setCategories(x.data);
        }
    }

    useEffect(() => {
        apiTest1();
        getCategories();
    }, []);

    function filterProductsByCategory(categoryId){
        setSelectedCategory(categoryId);
        if (categoryId) {
            const filtered = products.filter(product => product.category.id === categoryId)
            setFilteredProducts(filtered);
        }else{
            setFilteredProducts(products);
        }
    }

    return (
        <div>
            <div className="row">
                {categories.length > 0 && (
                    <div className="col-2">
                        {categories.map(category => (
                            <p style={{ cursor: "pointer" }} onClick={() => filterProductsByCategory(category.id)} key={category.id}>{category.name}</p> 
                        ))}
                    </div>
                )}

            </div>
            <div className="row">
                {filteredProducts.length > 0 && (
                    <div className="row p-3">
                        {filteredProducts.map(product => (
                            <div className="col-2" key={product.id}>
                                <img src={product.images[0]} alt="" width={"200"} />
                                <Link to={`/details.apiTest2/${product.id}`}><p>{product.title}</p></Link>
                                <p>{product.description}</p>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </div>
    )
}

export default ApiTest2;