let products = [
  { name: 'Vanilla special', price: 150, image: 'Vanilla special.webp' },
  { name: 'Cool mint', price: 200, image: 'Cool mint.webp' },
  { name: 'pina colada', price: 300, image: 'Pina colada.webp' },
  { name: 'Raspberry and white chocolate', price: 210, image: 'Raspberry and white chocolate.webp' },
  { name: 'Blueberry cheesecake', price: 150, image: 'Blueberry cheesecake.webp' },
  { name: 'Strawberry marshmallow', price: 250, image: 'Strawberry marshmallow.webp' },

];

function loadProducts() {
  const productContainer = document.getElementById('product-list');
  products.forEach((product, index) => {
    let productDiv = document.createElement('div');
    productDiv.classList.add('col-md-4', 'mb-3');
    productDiv.innerHTML = `
            <div class="card h-100">
                <img src="${product.image}" class="card-img-top" alt="${product.name}">
                <div class="card-body">
                    <h5 class="card-title">${product.name}</h5>
                    <p class="card-text">₱${product.price}</p>
                    <button class="btn btn-primary" onclick="addToCart(${index})">Add to Cart</button>
                </div>
            </div>
        `;
    productContainer.appendChild(productDiv);
  });
}

let cart = [];

function addToCart(index) {
  cart.push(products[index]);
  updateCart();
}

function updateCart() {
  const cartItems = document.getElementById('cart-items');
  cartItems.innerHTML = '';
  let totalCost = 0;
  cart.forEach(item => {
    cartItems.innerHTML += <p>${item.name} - ₱${item.price}</p>;
    totalCost += item.price;
  });
  document.getElementById('total-cost').innerText = totalCost;
}

function calculateChange() {
  const payment = document.getElementById('payment').value;
  const totalCost = document.getElementById('total-cost').innerText;
  const change = payment - totalCost;
  document.getElementById('change').innerText = change >= 0 ? change : 'Insufficient payment';
}

window.onload = loadProducts;
