// task 1
let products = [
    { name: "Laptop", price: 999.99, description: "Powerful computing on the go" },
    { name: "Smartphone", price: 699.99, description: "Stay connected wherever you are" },
    { name: "Headphones", price: 149.99, description: "Immersive audio experience" },
    { name: "Smartwatch", price: 199.99, description: "Track your fitness and stay on time" },
    { name: "Tablet", price: 349.99, description: "Portable and versatile for work or play" }
];

// task 2
function displayProducts() {
    const productListContainer = document.getElementById('product-list');

    products.forEach(product => {
        const productDiv = document.createElement('div');
        productDiv.classList.add('product');

        const productName = document.createElement('h2');
        productName.textContent = product.name;
        productDiv.appendChild(productName);

        const productPrice = document.createElement('p');
        productPrice.textContent = `$${product.price.toFixed(2)}`;
        productDiv.appendChild(productPrice);

        const productDescription = document.createElement('p');
        productDescription.textContent = product.description;
        productDiv.appendChild(productDescription);

        productListContainer.appendChild(productDiv);
    });
}

// task 3
document.addEventListener('DOMContentLoaded', function() {
    displayProducts();
});
