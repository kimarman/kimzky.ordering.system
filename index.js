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
                    cart
