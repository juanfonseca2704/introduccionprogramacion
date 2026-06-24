const cartSidebar = document.getElementById('cart-sidebar');
const cartOverlay = document.getElementById('cart-overlay');
const openCartBtn = document.getElementById('open-cart-btn');
const closeCartBtn = document.getElementById('close-cart-btn');
const cartItemsContainer = document.getElementById('cart-items-container');
const cartCountBadge = document.getElementById('cart-count-badge');
const cartTotalPrice = document.getElementById('cart-total-price');

let cart = [];

function toggleCart() {
    cartSidebar.classList.toggle('open');
    cartOverlay.classList.toggle('open');
}

openCartBtn.addEventListener('click', toggleCart);
closeCartBtn.addEventListener('click', toggleCart);
cartOverlay.addEventListener('click', toggleCart);

const productButtons = document.querySelectorAll('.card-btn');
productButtons.forEach(button => {
    button.addEventListener('click', (e) => {
        const card = e.target.closest('.card');
        const title = card.querySelector('.card-title').textContent.replace(/"/g, '').trim();
        const priceText = card.querySelector('.card-price').textContent;
        const price = parseInt(priceText.replace('$', '').replace(/\./g, '').trim());
        const imageSrc = card.querySelector('.card-image').getAttribute('src');

        addToCart(title, price, imageSrc);
    });
});

function addToCart(title, price, imageSrc) {
    const existingItem = cart.find(item => item.title === title);

    if (existingItem) {
        existingItem.quantity += 1;
    } else {
        cart.push({
            title,
            price,
            imageSrc,
            quantity: 1
        });
    }
    updateCartUI();
    
    if(!cartSidebar.classList.contains('open')) {
        toggleCart();
    }
}

function changeQuantity(title, amount) {
    const item = cart.find(item => item.title === title);
    if (item) {
        item.quantity += amount;
        if (item.quantity <= 0) {
            cart = cart.filter(i => i.title !== title);
        }
    }
    updateCartUI();
}

function removeItem(title) {
    cart = cart.filter(item => item.title !== title);
    updateCartUI();
}

function formatCurrency(value) {
    return '$' + value.toLocaleString('es-CO');
}

function updateCartUI() {
    cartItemsContainer.innerHTML = '';
    let totalItems = 0;
    let totalPrice = 0;

    cart.forEach(item => {
        totalItems += item.quantity;
        totalPrice += (item.price * item.quantity);

        const itemHTML = `
            <div class="cart-item">
                <img src="${item.imageSrc}" alt="${item.title}" class="cart-item-img">
                <div class="cart-item-details">
                    <div class="cart-item-title">${item.title}</div>
                    <div class="cart-item-price">${formatCurrency(item.price)}</div>
                    <div class="cart-item-qty">
                        <button class="qty-btn" onclick="changeQuantity('${item.title}', -1)">-</button>
                        <span>${item.quantity}</span>
                        <button class="qty-btn" onclick="changeQuantity('${item.title}', 1)">+</button>
                    </div>
                </div>
                <button class="delete-item" onclick="removeItem('${item.title}')">&times;</button>
            </div>
        `;
        cartItemsContainer.insertAdjacentHTML('beforeend', itemHTML);
    });

    cartCountBadge.textContent = totalItems;
    cartTotalPrice.textContent = formatCurrency(totalPrice);
}