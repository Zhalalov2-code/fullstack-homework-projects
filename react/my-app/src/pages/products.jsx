import { useEffect, useState } from "react";
import Modal from '../components/modal';

function Products() {
    const [modalOpen, setModalOpen] = useState(false);
    const [productId, setProductId] = useState(1);
    const [products, setProducts] = useState([]);
    const [editProductData, setEditProductData] = useState(null);
    const [selectedCategory, setSelectedCategory] = useState('Все категории');

    const categories = ['Все категории', 'Ноутбук', 'Телефон', 'Акссесуары'];

    const openModal = () => { setEditProductData(null); setModalOpen(true); };
    const closeModal = () => setModalOpen(false);

    useEffect(() => {
        const storedProducts = JSON.parse(localStorage.getItem('products') || '[]');
        setProducts(storedProducts);
    }, []);


    function addProduct(product) {
        const newProduct = {
            ...product,
            id: productId,
            category: product.category
        };
        
        let newId = 1;
        if(products.length > 0){
            const lastproductsID = Math.max(... products.map(product => product.id));
            newId = lastproductsID + 1;
        }
        newProduct.id = newId;

        const updateProducts = [...products, newProduct];
        setProducts(updateProducts);
        localStorage.setItem('products', JSON.stringify(updateProducts))
    }

    function deleteProduct(id) {
        const deleteproduct = products.filter(product => product.id !== id);
        setProducts(deleteproduct);
        localStorage.setItem('products', JSON.stringify(deleteproduct));
    }

    function editProduct(id) {
        const productToEdit = products.find(product => product.id === id);
        setEditProductData(productToEdit);
        setSelectedCategory(productToEdit.category);
        setModalOpen(true);
    }

    function handleEditSave(updatedProduct) {
        const updatedProducts = products.map(product => {
            if (product.id === updatedProduct.id) {
                return updatedProduct;
            } else {
                return product;
            }
        });
        setProducts(updatedProducts);
        localStorage.setItem('products', JSON.stringify(updatedProducts));
        setModalOpen(false);
    }

    const filteredProducts = () => {
        if (selectedCategory === 'Все категории') {
            return products;
        } else {
            return products.filter(product => product.category === selectedCategory);
        };
    }

    return (
        <div>
            <div className="row">
                <div className="col-12 text-center border border-1 ">
                    <h1>Магазин</h1>
                </div>
                <div className="col-3 p-4">
                    <a href="/products" className="text-decoration-none fs-5 text-black">Продукты</a>
                    <br />
                    <a href="" className="text-decoration-none fs-5 text-black">Категория</a>
                    <br />
                    <a href="/users" className="text-decoration-none fs-5 text-black">Пользователи</a>
                    <br />
                    <a href="/main" className="text-decoration-none fs-5 text-black">Выйти</a>
                </div>
                <div className="col-9 border border-1 border-bottom-0 border-top-0">
                    <div className="row border border-1 p-3">
                        <div className="col-2">
                            <div className="row">
                                <button className="btn btn-primary" onClick={openModal}>+ продукт</button>
                            </div>
                        </div>
                        <div className="col-4">
                            <select
                                className="form-control"
                                value={selectedCategory}
                                onChange={(e) => setSelectedCategory(e.target.value)}
                            >
                                <option value="" disabled>Выберите категорию</option>
                                {categories.map(category => (
                                    <option key={category} value={category}>{category}</option>
                                ))}
                            </select>
                        </div>
                    </div>
                    <div className="row mb-2 mt-4 ms-1">
                        <div className="col-1">
                            <div className="row">
                                <h5>id</h5>
                            </div>
                        </div>
                        <div className="col-5">
                            <div className="row">
                                <h5>Название</h5>
                            </div>
                        </div>
                        <div className="col-1">
                            <div className="row">
                                <h5>Цена</h5>
                            </div>
                        </div>
                        <div className="col-2">
                            <div className="row">
                                <h5>Категория</h5>
                            </div>
                        </div>
                        <div className="col-3">
                            <div className="row">
                                <h5>Действие</h5>
                            </div>
                        </div>
                    </div>

                    <div>
                        {filteredProducts().length === 0 ? (
                            <p className="text-center p-5">Нет продуктов</p>
                        ) : (
                            filteredProducts().map((product) => (
                                <div className="row ms-1" key={product.id}>
                                    <div className="col-1">
                                        <div className="row">
                                            <p>{product.id}</p>
                                        </div>
                                    </div>
                                    <div className="col-5">
                                        <div className="row">
                                            <p>{product.name}</p>
                                        </div>
                                    </div>
                                    <div className="col-1">
                                        <div className="row">
                                            <p>{product.price}$</p>
                                        </div>
                                    </div>
                                    <div className="col-2">
                                        <div className="row">
                                            <p>{product.category}</p>
                                        </div>
                                    </div>
                                    <div className="col-3">
                                        <div className="row">
                                            <div className="col-4">
                                                <button className="btn btn-warning" onClick={() => editProduct(product.id)}>Edit</button>
                                            </div>
                                            <div className="col-4">
                                                <button className="btn btn-danger" onClick={() => deleteProduct(product.id)}>Delete</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))
                        )}
                    </div>
                </div>
            </div>

            <Modal show={modalOpen} onClose={closeModal} onAdd={addProduct} onEditSave={handleEditSave} productData={editProductData} categories={categories} />
        </div>
    );
}

export default Products;
