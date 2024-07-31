let cart = [];

function showSection(section) {
    document.querySelectorAll('main > section').forEach(s => s.classList.add('hidden'));
    document.getElementById(section).classList.remove('hidden');
}

function addToCart(product) {
    cart.push(product);
    alert(product + ' has been added to your cart.');
    updateCart();
}

function updateCart() {
    const cartItems = document.getElementById('cart-items');
    if (cartItems) {
        cartItems.innerHTML = '';
        cart.forEach(item => {
            const div = document.createElement('div');
            div.textContent = item;
            cartItems.appendChild(div);
        });
    }
}

function checkout() {
    alert('Proceeding to checkout with the following items:\n' + cart.join('\n'));
    // Add functionality for checkout process here
}
