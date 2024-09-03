document.addEventListener('DOMContentLoaded', () => {
    const cartNumberElement = document.getElementById('cart-number');

    document.querySelectorAll('.buy-now').forEach(button => {
        const productContainer = button.closest('.relative');
        const quantityElement = productContainer.querySelector('.quantity');
        const incrementButton = productContainer.querySelector('.increment');
        const decrementButton = productContainer.querySelector('.decrement');
        const priceElement = productContainer.querySelector('p.mb-3');
        const productPrice = parseFloat(priceElement.textContent.replace('$', ''));
        
        // Initialize quantity
        let quantity = 0;

        function updateCartTotal() {
            const cartTotal = Array.from(document.querySelectorAll('.quantity'))
                .reduce((total, elem) => {
                    const qty = parseInt(elem.textContent, 10);
                    const price = parseFloat(elem.closest('.relative').querySelector('p.mb-3').textContent.replace('$', ''));
                    return total + (price * qty);
                }, 0);
            cartNumberElement.textContent = `$${cartTotal.toFixed(2)}`;
        }

        incrementButton.addEventListener('click', () => {
            quantity += 1;
            quantityElement.textContent = quantity;
            updateCartTotal();
        });

        decrementButton.addEventListener('click', () => {
            if (quantity > 0) {
                quantity -= 1;
                quantityElement.textContent = quantity;
                updateCartTotal();
            }
        });

        button.addEventListener('click', () => {
            // Update cart number based on current quantity
            updateCartTotal();
        });
    });
});
