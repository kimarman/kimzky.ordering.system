document.addEventListener('DOMContentLoaded', () => {
    const cartItems = {};
    const prices = {
        1: 200.00,
        2: 300.00,
        3: 270.00,
        4: 190.00,
        5: 250.00,
        6: 300.00,
        7: 250.00,
        8: 200.00
    };

    document.querySelectorAll('.addToCartBtn').forEach(button => {
        button.addEventListener('click', (event) => {
            const productId = event.target.getAttribute('data-product-id');
            const qtyInput = document.getElementById(`qty${productId}`);
            const quantity = parseInt(qtyInput.value, 10);

            if (quantity > 0) {
                if (cartItems[productId]) {
                    cartItems[productId] += quantity;
                } else {
                    cartItems[productId] = quantity;
                }
                updateCart();
            }
        });
    });

    function updateCart() {
        const cartContainer = document.getElementById('cart-items');
        cartContainer.innerHTML = '';
        let totalCost = 0;

        for (const productId in cartItems) {
            if (cartItems.hasOwnProperty(productId)) {
                const quantity = cartItems[productId];
                const cost = prices[productId] * quantity;
                totalCost += cost;

                const itemDiv = document.createElement('div');
                itemDiv.className = 'cart-item';
                itemDiv.innerHTML = `
                    <p>Product ID: ${productId}</p>
                    <p>Quantity: ${quantity}</p>
                    <p>Cost: ₱${cost.toFixed(2)}</p>
                `;
                cartContainer.appendChild(itemDiv);
            }
        }

        document.getElementById('total-cost').textContent = totalCost.toFixed(2);
    }

    window.calculateChange = function() {
        const totalCost = parseFloat(document.getElementById('total-cost').textContent);
        const payment = parseFloat(document.getElementById('payment').value);
        const change = payment - totalCost;

        document.getElementById('change').textContent = change.toFixed(2);
    };
});
