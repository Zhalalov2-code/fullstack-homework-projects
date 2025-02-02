import { useEffect, useState } from 'react';
import '../css/modalCss.css';

function Modal({ show, onAdd, onClose, onEditSave, productData, categories, selectedCategory }) {
    const [productName, setProductName] = useState('');
    const [productPrice, setProductPrice] = useState('');
    const [productCategory, setProductCategory] = useState('');

    useEffect(() => {
        if (productData) {
            setProductName(productData.name);
            setProductPrice(productData.price);
            setProductCategory(productData.category);
        } else {
            setProductName('');
            setProductPrice('');
            setProductCategory(selectedCategory);
        }
    }, [productData, selectedCategory]);

    if (!show) return null;

    function formSenden(e) {
        e.preventDefault();
        const product = {
            name: productName,
            price: productPrice,
            category: productCategory,
        };

        if (productData) {
            const updatedProduct = {
                ...productData,
                name: productName,
                price: productPrice,
                category: productCategory,
            };
            onEditSave(updatedProduct);
        } else {
            onAdd(product);
        }

        onClose();
        setProductName('');
        setProductPrice('');
        setProductCategory('');
    }

    const handleOverlayClick = (e) => {
        if (e.target === e.currentTarget) {
            onClose();
        }
    };

    return (
        <div className="modal-overlay" onClick={handleOverlayClick}>
            <div className="modal">
                <div className="modal-header text-center">
                    <h3>{productData ? 'Редактировать продукт' : 'Добавьте продукт'}</h3>
                </div>
                <div className="modal-body">
                    <form onSubmit={formSenden}>
                        <label htmlFor="product-name">Название:</label>
                        <input
                            type="text"
                            id="product-name"
                            className="form-control"
                            value={productName}
                            onChange={(e) => setProductName(e.target.value)}
                            required
                        />
                        <label htmlFor="product-price">Цена:</label>
                        <input
                            type="number"
                            id="product-price"
                            className="form-control"
                            value={productPrice}
                            onChange={(e) => setProductPrice(e.target.value)}
                            required
                        />
                        <label htmlFor="product-category">Категория:</label>
                        <select
                            className="form-control"
                            value={productCategory}
                            onChange={(e) => setProductCategory(e.target.value)}
                            required
                        >
                            <option value="" disabled>Выберите категорию</option>
                            {categories.map((category) => (
                                <option key={category} value={category}>
                                    {category}
                                </option>
                            ))}
                        </select>
                        <div className="modal-footer">
                            <button type="submit" className="btn-submit btn btn-primary">
                                {productData ? 'Сохранить изменения' : 'Добавить продукт'}
                            </button>
                            <button type="button" className="btn btn-danger" onClick={onClose}>
                                Закрыть
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Modal;
