let  product = [
    {
        img: 'https://sublimagia.ru/image/cache/catalog/fut3/cotton_red-600x600.jpg',
        name: 'Red T-Shirt',
        price: 25,
        color: 'Red',
        currency: '€'
    },
    {
        img: 'https://sublimagia.ru/image/cache/catalog/fut3/cotton_lemon-600x600.jpg',
        name: 'Yellow T-Shirt',
        price: 30,
        color: 'Yellow',
        currency: '$'
    },
    {
        img: 'https://sublimagia.ru/image/cache/catalog/fut/19827-600x600.jpg',
        name: 'Black T-Shirt',
        price: 50,
        color: 'Black',
        currency: '$'
    },
    {
        img: 'https://sublimagia.ru/image/cache/catalog/fut/15247-600x600.jpg',
        name: 'Green T-Shirt',
        price: 120,
        color: 'Green',
        currency: '€'
    },
    {
        img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR0THR1rXrHnpXQ2rKozE5Aw-BM8Q5BAsKHuA&s',
        name: 'White T-Shirt',
        price: 250,
        color: 'White',
        currency: '€'
    },
    {
        img: 'https://sublimagia.ru/image/cache/catalog/fut3/15061-600x600.jpg',
        name: 'Orange T-Shirt',
        price: 80,
        color: 'Orange',
        currency: '£'
    },

];
function showProduct(products){
    let productHtml = '';
    for (let item of products) {
        productHtml += `<div class="col-2 text-center border border-2 mx-4 my-4">
            <img src="${item.img}" class="img-fluid" />
            <p>${item.name}</p>
            <p>${item.currency} ${item.price}</p>
            <p>${item.color}</p>
        </div>`;
    }
    document.getElementById('print').innerHTML = productHtml;
}
function searchProduct(){
    let value = document.getElementById('searchinput').value;
    let currency = document.getElementById('product-select').value;
    let maxPrice = parseFloat(document.getElementById('price-range').value);
    let color = document.getElementById('color-select').value;
    let sortOrder = document.getElementById('sort-select').value;

    let result = product.filter((item) => (item.name.toLowerCase().includes(value) || item.color.toLowerCase().includes(value)) &&
    (currency === '' || item.currency === currency) &&
    item.price <= maxPrice && (color === '' || item.color === color));

    result.sort((a, b) => 
    (sortOrder === 'price-asc' ? a.price - b.price 
    : sortOrder === 'price-desc' ? b.price - a.price 
    : 0));

    if (result.length > 0){
        showProduct(result);
    }else{
        document.getElementById('print').innerHTML = '<p class="text-center">Продукты не найдены</p>';
    }
}
function updatePrice(){
    let rangeInput = document.getElementById('price-range');
    let maxPrice = document.getElementById('max-price');

    maxPrice.value = rangeInput.value;

    searchProduct();
}
function updatePriceLabels(){
    let rangeInput = document.getElementById('range-price');
    let minPrice = document.getElementById('min-price');
    let maxPrice = document.getElementById('max-price');
    
    minPrice.value = rangeInput.min;
    maxPrice.value = rangeInput.max;
}
document.addEventListener('DOMContentLoaded', () => {
    showProduct(product);
    document.getElementById('price-range').addEventListener('input', updatePrice);
    document.getElementById('product-select').addEventListener('change', searchProduct);
    document.getElementById('color-select').addEventListener('change', searchProduct);
    document.getElementById('sort-select').addEventListener('change', searchProduct);
    updatePriceLabels();
});
