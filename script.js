let cart = [];
let totalPrice = 0;

document.querySelectorAll('.add-to-cart').forEach(button => {
    button.addEventListener('click', () => {
        const productElement = button.parentElement;
        const productName = productElement.getAttribute('data-name');
        const productPrice = parseFloat(productElement.getAttribute('data-price'));

        cart.push({ name: productName, price: productPrice });
        totalPrice += productPrice;

        updateCart();
    });
});

function updateCart() {
    const cartItemsList = document.getElementById('cart-items');
    cartItemsList.innerHTML = '';

    cart.forEach(item => {
        const li = document.createElement('li');
        li.textContent = `${item.name} - $${item.price.toFixed(2)}`;
        cartItemsList.appendChild(li);
    });

    document.getElementById('cart-count').textContent = cart.length;
    document.getElementById('total-price').textContent = `Total: $${totalPrice.toFixed(2)}`;
}

document.getElementById('checkout').addEventListener('click', () => {
    alert('Thank you for your purchase!');
    cart = [];
    totalPrice = 0;
    updateCart();
});
