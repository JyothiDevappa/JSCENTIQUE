

/* -------------------------------------------------------
    CART FUNCTIONALITY (OPEN, CLOSE, ADD ITEMS)
-------------------------------------------------------- */

// Store all cart items here
let cartItems = [];

/**
 * Add product to cart
 * @param {string} name  - product name
 * @param {number} price - product price
 * @param {string} image - image URL
 */
function addToCart(name, price, image) {
    cartItems.push({ name, price, image });
    updateCart();
    openCart(); // auto open when product added
}

/**
 * Updates the cart items inside the sidebar
 */
function updateCart() {
    const cartItemsContainer = document.getElementById('cartItems');

    // If no items → show empty message
    if (cartItems.length === 0) {
        cartItemsContainer.innerHTML =
            '<p style="color: #999; text-align: center; padding: 40px 0;">Your cart is empty</p>';
        return;
    }

    // Build updated HTML for cart items
    let html = '';
    cartItems.forEach((item, index) => {
        html += `
            <div class="cart-item">
                <div class="cart-item-image">
                    <img src="${item.image}" alt="${item.name}">
                </div>
                <div class="cart-item-details">
                    <p class="cart-item-name">${item.name}</p>
                    <p class="cart-item-price">₹${item.price}</p>
                </div>
            </div>
        `;
    });

    cartItemsContainer.innerHTML = html;
}

/**
 * Opens the cart sidebar
 */
function openCart() {
    document.getElementById('cartSidebar').classList.add('active');
    document.getElementById('cartOverlay').classList.add('active');
}

/**
 * Closes the cart sidebar
 */
function closeCart() {
    document.getElementById('cartSidebar').classList.remove('active');
    document.getElementById('cartOverlay').classList.remove('active');
}

/**
 * Temporary functionality for View Cart button
 */
function viewCart() {
    alert('Total items: ' + cartItems.length + '\nCart functionality coming soon!');
}
