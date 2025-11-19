/* AUREVIA PRODUCT DATA */
const products = {
    perfumes: [
        {
            id: 'p1',
            name: 'Pink Princess Bloom',
            description: 'Delicate floral notes of cherry blossom and vanilla – perfect for everyday princess vibes.',
            price: 3499,
            image: 'https://images.unsplash.com/photo-1585386959984-a4155224a1ad?w=400&h=400&fit=crop'
        },
        {
            id: 'p2',
            name: 'Aurevia Rose Elixir',
            description: 'Romantic rose and peony blend with a hint of pink sugar. Long-lasting girly scent.',
            price: 4299,
            image: 'https://images.unsplash.com/photo-1556048219-bb6978360b84?w=400&h=400&fit=crop'
        },
        {
            id: 'p3',
            name: 'Kawaii Candy Cloud',
            description: 'Sweet cotton candy and caramel with soft musk – smells like a pink candy store!',
            price: 2999,
            image: 'https://images.unsplash.com/photo-1523294587484-bae6cc870010?w=400&h=400&fit=crop'
        },
        {
            id: 'p4',
            name: 'Princess Midnight Magic',
            description: 'Mysterious yet sweet – blackberry, jasmine and pink amber for special nights.',
            price: 4999,
            image: 'https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?w=400&h=400&fit=crop'
        },
        {
            id: 'p5',
            name: 'Pink Petal Paradise',
            description: 'Fresh peony, lily and white tea – like walking through a pink flower garden.',
            price: 3799,
            image: 'https://images.unsplash.com/photo-1585386959984-a4155224a1ad?w=400&h=400&fit=crop'
        }
    ],
    bags: [
        {
            id: 'b1',
            name: 'Princess Bow Tote',
            description: 'Large pink tote with satin bow and gold hardware. Fits laptop + daily essentials.',
            price: 6499,
            image: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=400&h=400&fit=crop'
        },
        {
            id: 'b2',
            name: 'Kawaii Crossbody Bag',
            description: 'Cute mini crossbody with heart charm – perfect for concerts and dates.',
            price: 2999,
            image: 'https://images.unsplash.com/photo-1584917865442-de89df76afd3?w=400&h=400&fit=crop'
        },
        {
            id: 'b3',
            name: 'Aurevia Satchel Dream',
            description: 'Elegant pink satchel with quilted pattern and gold chain strap.',
            price: 7999,
            image: 'https://images.unsplash.com/photo-1590874103328-eac38a683ce3?w=400&h=400&fit=crop'
        },
        {
            id: 'b4',
            name: 'Princess Backpack',
            description: 'Sparkly pink backpack with multiple compartments – school or travel ready!',
            price: 4999,
            image: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=400&h=400&fit=crop'
        },
        {
            id: 'b5',
            name: 'Rosy Clutch Evening',
            description: 'Stunning pink clutch with crystal clasp – perfect for parties and events.',
            price: 5499,
            image: 'https://images.unsplash.com/photo-1591561954557-26941169b49e?w=400&h=400&fit=crop'
        }
    ],
    plushies: [
        {
            id: 'pl1',
            name: 'Princess Pink Unicorn',
            description: 'Giant 24" unicorn with rainbow mane and glitter horn. Super soft plush!',
            price: 2499,
            image: 'https://images.unsplash.com/photo-1556012014-72c7b6f810fc?w=400&h=400&fit=crop'
        },
        {
            id: 'pl2',
            name: 'Kawaii Cat Plush',
            description: 'Adorable pink cat with big eyes and bow tie. Perfect for hugging!',
            price: 1499,
            image: 'https://images.unsplash.com/photo-1605901309584-818e25960a1f?w=400&h=400&fit=crop'
        },
        {
            id: 'pl3',
            name: 'Princess Bear Family',
            description: 'Set of 3 pink teddy bears in different sizes. Super cuddly and cute!',
            price: 3499,
            image: 'https://images.unsplash.com/photo-1586023842575-54f2206049f8?w=400&h=400&fit=crop'
        },
        {
            id: 'pl4',
            name: 'Magical Pink Dragon',
            description: 'Mythical dragon plush with sparkly wings and pearl necklace.',
            price: 2999,
            image: 'https://images.unsplash.com/photo-1556012014-72c7b6f810fc?w=400&h=400&fit=crop'
        },
        {
            id: 'pl5',
            name: 'Princess Pillow Pet',
            description: 'Soft pink pillow that folds into a cute puppy. Perfect for naps!',
            price: 1999,
            image: 'https://images.unsplash.com/photo-1605901309584-818e25960a1f?w=400&h=400&fit=crop'
        }
    ]
};

/* ===== SAME CART/ORDER LOGIC AS ZEXIS (PINK THEME) ===== */
let cart = [];
let orders = [];
let selectedPaymentMethod = null;

document.addEventListener('DOMContentLoaded', function() {
    renderProducts();
    updateCartCount();
});

function renderProducts() {
    renderCategory('perfumes', 'perfumesGrid');
    renderCategory('bags', 'bagsGrid');
    renderCategory('plushies', 'plushiesGrid');
}

function renderCategory(category, gridId) {
    const grid = document.getElementById(gridId);
    grid.innerHTML = products[category].map(product => `
        <div class="product-card fade-in">
            <img src="${product.image}" alt="${product.name}" class="product-image">
            <div class="product-info">
                <h3 class="product-name">${product.name}</h3>
                <p class="product-description">${product.description}</p>
                <div class="product-price">₱${product.price.toLocaleString()}</div>
                <button class="add-to-cart-btn" onclick="addToCart('${product.id}', '${category}')">
                    Add to Cart
                </button>
            </div>
        </div>
    `).join('');
}

function addToCart(productId, category) {
    const product = products[category].find(p => p.id === productId);
    const existingItem = cart.find(item => item.id === productId);
    
    if (existingItem) {
        existingItem.quantity += 1;
    } else {
        cart.push({ ...product, quantity: 1, category });
    }
    
    updateCartCount();
    updateCartDisplay();
    showNotification('Added to cart! 🛍️');
}

function updateCartCount() {
    const count = cart.reduce((total, item) => total + item.quantity, 0);
    document.getElementById('cartCount').textContent = count;
}

function updateCartDisplay() {
    const cartItems = document.getElementById('cartItems');
    const cartTotal = document.getElementById('cartTotal');
    
    if (cart.length === 0) {
        cartItems.innerHTML = '<p style="text-align: center; color: #999;">Your pink cart is empty 🌸</p>';
        cartTotal.textContent = '0';
        return;
    }
    
    cartItems.innerHTML = cart.map(item => `
        <div class="cart-item">
            <img src="${item.image}" alt="${item.name}" class="cart-item-image">
            <div class="cart-item-info">
                <div class="cart-item-name">${item.name}</div>
                <div class="cart-item-price">₱${item.price.toLocaleString()}</div>
                <div class="quantity-controls">
                    <button class="quantity-btn" onclick="updateQuantity('${item.id}', -1)">
                        <i class="fas fa-minus"></i>
                    </button>
                    <span class="quantity-display">${item.quantity}</span>
                    <button class="quantity-btn" onclick="updateQuantity('${item.id}', 1)">
                        <i class="fas fa-plus"></i>
                    </button>
                </div>
            </div>
            <button class="cart-item-remove" onclick="removeFromCart('${item.id}')">
                <i class="fas fa-trash"></i>
            </button>
        </div>
    `).join('');
    
    const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    cartTotal.textContent = total.toLocaleString();
}

function updateQuantity(productId, change) {
    const item = cart.find(item => item.id === productId);
    if (item) {
        item.quantity += change;
        if (item.quantity <= 0) {
            cart = cart.filter(item => item.id !== productId);
        }
        updateCartCount();
        updateCartDisplay();
    }
}

function removeFromCart(productId) {
    cart = cart.filter(item => item.id !== productId);
    updateCartCount();
    updateCartDisplay();
}

function toggleCart() {
    const cartSidebar = document.getElementById('cartSidebar');
    const overlay = document.getElementById('overlay');
    cartSidebar.classList.toggle('active');
    overlay.classList.toggle('active');
}

function proceedToCheckout() {
    if (cart.length === 0) {
        showNotification('Your cart is empty! 🌸', 'error');
        return;
    }
    toggleCart();
    document.getElementById('paymentModal').classList.add('active');
    document.getElementById('overlay').classList.add('active');
}

function selectPayment(method) {
    selectedPaymentMethod = method;
    document.querySelectorAll('.payment-method').forEach(el => el.classList.remove('selected'));
    event.currentTarget.classList.add('selected');
    document.getElementById('paymentForm').style.display = 'block';
    document.getElementById('cardFields').style.display = method === 'card' ? 'block' : 'none';
}

function processPayment() {
    const name = document.getElementById('customerName').value.trim();
    const phone = document.getElementById('customerPhone').value.trim();
    
    if (!name || !phone) {
        showNotification('Please fill in all fields! 🌸', 'error');
        return;
    }
    
    const payBtn = document.querySelector('.pay-btn');
    payBtn.innerHTML = '<span class="loading"></span> Processing...';
    payBtn.disabled = true;
    
    setTimeout(() => {
        const order = {
            id: 'ORD' + Date.now(),
            items: [...cart],
            total: cart.reduce((sum, item) => sum + (item.price * item.quantity), 0),
            customerName: name,
            customerPhone: phone,
            paymentMethod: selectedPaymentMethod,
            date: new Date().toLocaleString(),
            status: 'pending'
        };
        
        orders.push(order);
        cart = [];
        updateCartCount();
        
        closePaymentModal();
        document.getElementById('successModal').classList.add('active');
        
        payBtn.innerHTML = 'Pay Now';
        payBtn.disabled = false;
    }, 2000);
}

function cancelOrder(orderId) {
    if (confirm('Cancel this order? 🌸')) {
        const order = orders.find(o => o.id === orderId);
        if (order) order.status = 'cancelled';
        updateOrdersDisplay();
        showNotification('Order cancelled! 🌸');
    }
}

function openOrdersModal() {
    updateOrdersDisplay();
    document.getElementById('ordersModal').classList.add('active');
    document.getElementById('overlay').classList.add('active');
}

function updateOrdersDisplay() {
    const ordersList = document.getElementById('ordersList');
    if (orders.length === 0) {
        ordersList.innerHTML = '<p style="text-align: center; color: #999;">No orders yet 🌸</p>';
        return;
    }
    
    ordersList.innerHTML = orders.map(order => `
        <div class="order-item">
            <div class="order-header">
                <div>
                    <strong>Order ${order.id}</strong>
                    <div style="font-size: 0.9rem; color: #999;">${order.date}</div>
                </div>
                <div style="text-align: right;">
                    <span class="order-status ${order.status}">${order.status.toUpperCase()}</span>
                    <div style="font-weight: 600; color: var(--pink-candy);">₱${order.total.toLocaleString()}</div>
                </div>
            </div>
            <div style="margin-bottom: 15px;">
                ${order.items.map(item => `
                    <div style="display: flex; justify-content: space-between; margin-bottom: 5px;">
                        <span>${item.name} x${item.quantity}</span>
                        <span>₱${(item.price * item.quantity).toLocaleString()}</span>
                    </div>
                `).join('')}
            </div>
            <div style="display: flex; justify-content: space-between; align-items: center;">
                <div style="font-size: 0.9rem;">
                    <strong>Payment:</strong> ${order.paymentMethod.toUpperCase()}<br>
                    <strong>Customer:</strong> ${order.customerName}
                </div>
                ${order.status === 'pending' ? `
                    <button class="cancel-order-btn" onclick="cancelOrder('${order.id}')">
                        Cancel Order
                    </button>
                ` : ''}
            </div>
        </div>
    `).join('');
}

function closePaymentModal() {
    document.getElementById('paymentModal').classList.remove('active');
    document.getElementById('overlay').classList.remove('active');
    document.getElementById('paymentForm').style.display = 'none';
    document.querySelectorAll('.payment-method').forEach(el => el.classList.remove('selected'));
    selectedPaymentMethod = null;
}

function closeSuccessModal() {
    document.getElementById('successModal').classList.remove('active');
    document.getElementById('overlay').classList.remove('active');
}

function closeOrdersModal() {
    document.getElementById('ordersModal').classList.remove('active');
    document.getElementById('overlay').classList.remove('active');
}

function closeAllModals() {
    closePaymentModal();
    closeSuccessModal();
    closeOrdersModal();
    toggleCart();
}

function scrollToSection(sectionId) {
    document.getElementById(sectionId).scrollIntoView({ behavior: 'smooth' });
}

function showNotification(message, type = 'success') {
    const notification = document.createElement('div');
    notification.style.cssText = `
        position: fixed;
        top: 100px;
        right: 20px;
        background: ${type === 'success' ? 'var(--pink-candy)' : '#dc3545'};
        color: white;
        padding: 15px 20px;
        border-radius: 25px;
        z-index: 4000;
        animation: slideIn 0.3s ease;
        font-weight: 500;
    `;
    notification.textContent = message;
    document.body.appendChild(notification);
    setTimeout(() => notification.remove(), 3000);
}

const style = document.createElement('style');
style.textContent = `
    @keyframes slideIn {
        from { transform: translateX(100%); opacity: 0; }
        to { transform: translateX(0); opacity: 1; }
    }
`;
document.head.appendChild(style);
