let currentView = 'home';
let selectedRestaurant = null;
let cartItems = [];
let selectedAddress = 0;
let selectedPayment = '';
document.addEventListener('DOMContentLoaded', function() {
    loadCategories();
    loadRestaurants();
    updateCartUI();
});
function loadCategories() {
    const categoriesGrid = document.getElementById('categories-grid');
    categoriesGrid.innerHTML = '';
    
    categories.forEach(category => {
        const categoryCard = document.createElement('div');
        categoryCard.className = 'group cursor-pointer transform transition-all duration-300 hover:scale-105 category-card';
        categoryCard.innerHTML = `
            <div class="${category.color} rounded-2xl p-6 text-center shadow-sm group-hover:shadow-md transition-shadow">
                <img
                    src="${category.image}"
                    alt="${category.name}"
                    class="w-16 h-16 mx-auto rounded-full object-cover mb-3"
                />
                <h3 class="font-semibold text-black-800">${category.name}</h3>
            </div>
        `;
        categoriesGrid.appendChild(categoryCard);
    });
}
function loadRestaurants() {
    const restaurantsGrid = document.getElementById('restaurants-grid');
    restaurantsGrid.innerHTML = '';
    
    restaurants.forEach(restaurant => {
        const restaurantCard = document.createElement('div');
        restaurantCard.className = 'bg-white rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300 cursor-pointer transform hover:scale-[1.02] group restaurant-card';
        restaurantCard.onclick = () => showRestaurant(restaurant.id);
        
        restaurantCard.innerHTML = `
            <div class="relative">
                <img
                    src="${restaurant.image}"
                    alt="${restaurant.name}"
                    class="w-full h-48 object-cover rounded-t-2xl"
                />
    
            </div>
                <div class="p-4">
                <h3 class="text-lg font-semibold text-gray-900 mb-2">${restaurant.name}</h3>
                <p class="text-gray-600 text-sm mb-3">${restaurant.cuisine}</p>
                
                <div class="flex items-center justify-between">
                    <div class="flex items-center space-x-1">
                        <svg class="h-4 w-4 text-green-600 fill-current" viewBox="0 0 20 20">
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                        </svg>
                        <span class="text-sm font-medium text-gray-900">${restaurant.rating}</span>
                    </div>
                    
                    <div class="flex items-center space-x-1 text-gray-600">
                        <svg class="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                        </svg>
                        <span class="text-sm">${restaurant.deliveryTime}</span>
                    </div>
                </div>
                    <div class="flex items-center space-x-1 mt-2 text-gray-500">
                    <svg class="h-3 w-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                    </svg>
                    <span class="text-xs">${restaurant.location}</span>
                </div>
            </div>
        `;
        restaurantsGrid.appendChild(restaurantCard);
    });
}
function showRestaurant(restaurantId) {
    selectedRestaurant = restaurantId;
    const restaurant = restaurants.find(r => r.id === restaurantId);
    if (!restaurant) return;
    document.getElementById('home-view').classList.add('hidden');
    document.getElementById('restaurant-view').classList.remove('hidden');
    const groupedMenu = restaurant.menu.reduce((acc, item) => {
        if (!acc[item.category]) {
            acc[item.category] = [];
        }
        acc[item.category].push(item);
        return acc;
    }, {});
    const restaurantContent = document.getElementById('restaurant-detail-content');
    restaurantContent.innerHTML = `
        <!-- Restaurant Info -->
        <div class="relative">
            <img src="${restaurant.image}" alt="${restaurant.name}" class="w-full h-48 object-cover rounded-t-2xl"/>
            
            <div class="absolute bottom-0 left-0 right-0 p-8 text-white">
                <h1 class="text-4xl font-bold mb-2">${restaurant.name}</h1>
                <p class="text-lg mb-2">${restaurant.cuisine}</p>
                <div class="flex items-center space-x-6">
                    <div class="flex items-center space-x-1">
                        <svg class="h-5 w-5 text-yellow-400 fill-current" viewBox="0 0 20 20">
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                        </svg>
                        <span class="font-medium">${restaurant.rating}</span>
                    </div>
                    <div class="flex items-center space-x-1">
                        <svg class="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                        </svg>
                        <span>${restaurant.deliveryTime}</span>
                    </div>
                    <div class="flex items-center space-x-1">
                        <svg class="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                        </svg>
                        <span>${restaurant.location}</span>
                    </div>
                </div>
            </div>
        </div>
        <!-- Menu -->
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <h2 class="text-3xl font-bold text-gray-900 mb-8">Menu</h2>
            ${Object.entries(groupedMenu).map(([category, items]) => `
                <div class="mb-12">
                    <h3 class="text-2xl font-semibold text-gray-900 mb-6">${category}</h3>
                    <div class="grid gap-6">
                        ${items.map(item => `
                            <div class="bg-white rounded-2xl shadow-sm p-6 flex items-center space-x-6">
                                <img
                                    src="${item.image}"
                                    alt="${item.name}"
                                    class="w-24 h-24 object-cover rounded-xl"
                                />
                                <div class="flex-1">
                                    <h4 class="text-lg font-semibold text-gray-900 mb-2">${item.name}</h4>
                                    <p class="text-gray-600 mb-3">${item.description}</p>
                                    <p class="text-xl font-bold text-orange-600">₹${item.price}</p>
                                </div>
                                <button
                                    onclick="addToCart(${item.id})"
                                    class="bg-orange-600 text-white p-3 rounded-full hover:bg-orange-700 transition-colors"
                                >
                                    <svg class="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6"></path>
                                    </svg>
                                </button>
                            </div>
                        `).join('')}
                    </div>
                </div>
            `).join('')}
        </div>
    `;
    
    currentView = 'restaurant';
}
function addToCart(itemId) {
    const restaurant = restaurants.find(r => r.id === selectedRestaurant);
    const item = restaurant.menu.find(m => m.id === itemId);
    
    if (!item) return;
    
    const existingItem = cartItems.find(cartItem => cartItem.id === itemId);
    if (existingItem) {
        existingItem.quantity += 1;
    } else {
        cartItems.push({ ...item, quantity: 1 });
    }
    
    updateCartUI();
}
function updateCartUI() {
    const cartCount = cartItems.reduce((sum, item) => sum + item.quantity, 0);
    const cartCountElement = document.getElementById('cart-count');
    
    if (cartCount > 0) {
        cartCountElement.textContent = cartCount;
        cartCountElement.classList.remove('hidden');
    } else {
        cartCountElement.classList.add('hidden');
    }
    
    updateCartItems();
}
function updateCartItems() {
    const cartItemsContainer = document.getElementById('cart-items-container');
    const cartSummary = document.getElementById('cart-summary');
    
    if (cartItems.length === 0) {
        cartItemsContainer.innerHTML = `
            <div class="text-center py-12">
                <svg class="h-16 w-16 text-gray-300 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4m0 0L7 13m0 0l-2.5 5M7 13l2.5 5m6-5v6a2 2 0 01-2 2H9a2 2 0 01-2-2v-6m8 0V9a2 2 0 00-2-2H9a2 2 0 00-2 2v4.01"></path>
                </svg>
                <p class="text-gray-500">Your cart is empty</p>
                <p class="text-sm text-gray-400">Add some delicious food to get started</p>
            </div>
        `;
        cartSummary.classList.add('hidden');
        return;
    }   
    cartItemsContainer.innerHTML = `
        <div class="space-y-4">
            ${cartItems.map(item => `
                <div class="flex items-center space-x-4 p-4 border rounded-xl">
                    <img
                        src="${item.image}"
                        alt="${item.name}"
                        class="w-16 h-16 object-cover rounded-lg"
                    />
                    <div class="flex-1">
                        <h3 class="font-medium text-gray-900">${item.name}</h3>
                        <p class="text-orange-600 font-semibold">₹${item.price}</p>
                    </div>
                    <div class="flex items-center space-x-2">
                        <button
                            onclick="updateQuantity(${item.id}, ${item.quantity - 1})"
                            class="p-1 hover:bg-gray-100 rounded-full transition-colors quantity-btn"
                        >
                            <svg class="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20 12H4"></path>
                            </svg>
                        </button>
                        <span class="w-8 text-center">${item.quantity}</span>
                        <button
                            onclick="updateQuantity(${item.id}, ${item.quantity + 1})"
                            class="p-1 hover:bg-gray-100 rounded-full transition-colors quantity-btn"
                        >
                            <svg class="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6"></path>
                            </svg>
                        </button>
                    </div>
                </div>
            `).join('')}
        </div>
    `; 
    const total = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    const deliveryFee = 40;
    const platformFee = 5;
    const gst = Math.round((total + deliveryFee + platformFee) * 0.05);
    const grandTotal = total + deliveryFee + platformFee + gst;
        cartSummary.innerHTML = `
        <div class="space-y-2 text-sm">
            <div class="flex justify-between">
                <span>Item total</span>
                <span>₹${total}</span>
            </div>
            <div class="flex justify-between">
                <span>Delivery fee</span>
                <span>₹${deliveryFee}</span>
            </div>
            <div class="flex justify-between">
                <span>Platform fee</span>
                <span>₹${platformFee}</span>
            </div>
            <div class="flex justify-between">
                <span>GST</span>
                <span>₹${gst}</span>
            </div>
            <div class="border-t pt-2 flex justify-between font-semibold text-base">
                <span>Total</span>
                <span>₹${grandTotal}</span>
            </div>
        </div>  
        <button
            onclick="showCheckout()"
            class="w-full mt-4 bg-orange-600 text-white py-3 rounded-xl font-semibold hover:bg-orange-700 transition-colors"
        >
            Proceed to Checkout
        </button>
    `;
    cartSummary.classList.remove('hidden');
}
function updateQuantity(itemId, newQuantity) {
    if (newQuantity === 0) {
        cartItems = cartItems.filter(item => item.id !== itemId);
    } else {
        const item = cartItems.find(item => item.id === itemId);
        if (item) {
            item.quantity = newQuantity;
        }
    }
    updateCartUI();
}
function toggleCart() {
    const cartSidebar = document.getElementById('cart-sidebar');
    cartSidebar.classList.toggle('hidden');
}
function showCheckout() {
    toggleCart();
    document.getElementById('home-view').classList.add('hidden');
    document.getElementById('restaurant-view').classList.add('hidden');
    document.getElementById('checkout-view').classList.remove('hidden');
    const total = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    const deliveryFee = 40;
    const platformFee = 5;
    const gst = Math.round((total + deliveryFee + platformFee) * 0.05);
    const grandTotal = total + deliveryFee + platformFee + gst;
    const checkoutContent = document.getElementById('checkout-content');
    checkoutContent.innerHTML = `
        <div class="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <h1 class="text-3xl font-bold text-gray-900 mb-8">Checkout</h1>
        <!-- Delivery Address -->
            <div class="bg-white rounded-2xl shadow-sm p-6 mb-6">
                <h2 class="text-xl font-semibold text-gray-900 mb-4 flex items-center">
                    <svg class="h-5 w-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                    </svg>
                    Delivery Address
                </h2>
                <div class="space-y-4">
                    ${addresses.map(address => `
                        <div class="p-4 border rounded-xl cursor-pointer transition-all address-option ${selectedAddress === address.id ? 'selected' : ''}" onclick="selectAddress(${address.id})">
                         <div class="flex items-start space-x-3">
                                <div class="w-4 h-4 rounded-full border-2 mt-1 ${selectedAddress === address.id ? 'border-orange-500 bg-orange-500' : 'border-gray-300'}"></div>
                                <div>
                                    <h3 class="font-semibold text-gray-900">${address.type}</h3>
                                    <p class="text-gray-600">${address.address}</p>
                                    <p class="text-sm text-gray-500">${address.landmark}</p>
                                </div>
                            </div>
                        </div>
                    `).join('')}
                </div>
            </div>
            <!-- Payment Method -->
            <div class="bg-white rounded-2xl shadow-sm p-6 mb-6">
                <h2 class="text-xl font-semibold text-gray-900 mb-4">Payment Method</h2>
                <div class="space-y-4">
                    ${paymentMethods.map(method => `
                        <div
                            class="p-4 border rounded-xl cursor-pointer transition-all payment-method ${selectedPayment === method.id ? 'selected' : ''}"
                            onclick="selectPayment('${method.id}')"
                        >
                            <div class="flex items-center space-x-3">
                                <div class="w-4 h-4 rounded-full border-2 ${selectedPayment === method.id ? 'border-orange-500 bg-orange-500' : 'border-gray-300'}"></div>
                                ${getPaymentIcon(method.icon)}
                                <div>
                                    <h3 class="font-semibold text-gray-900">${method.name}</h3>
                                    <p class="text-sm text-gray-500">${method.description}</p>
                                </div>
                            </div>
                        </div>
                    `).join('')}
                </div>
            </div>
            <!-- Order Summary -->
            <div class="bg-white rounded-2xl shadow-sm p-6 mb-6">
                <h2 class="text-xl font-semibold text-gray-900 mb-4">Order Summary</h2>
                <div class="space-y-2 text-sm">
                    <div class="flex justify-between">
                        <span>Item total</span>
                        <span>₹${total}</span>
                    </div>
                    <div class="flex justify-between">
                        <span>Delivery fee</span>
                        <span>₹${deliveryFee}</span>
                    </div>
                    <div class="flex justify-between">
                        <span>Platform fee</span>
                        <span>₹${platformFee}</span>
                    </div>
                    <div class="flex justify-between">
                        <span>GST</span>
                        <span>₹${gst}</span>
                    </div>
                    <div class="border-t pt-2 flex justify-between font-semibold text-base">
                        <span>Total to pay</span>
                        <span>₹${grandTotal}</span>
                    </div>
                </div>
            </div>
            <!-- Place Order Button -->
            <button
                onclick="placeOrder()"
                class="w-full bg-orange-600 text-white py-4 rounded-xl font-semibold hover:bg-orange-700 transition-colors"
            >
                Place Order • ₹${grandTotal}
            </button>
        </div>
    `;
    currentView = 'checkout';
}
function getPaymentIcon(iconType) {
    const icons = {
        'credit-card': '<svg class="h-5 w-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z"></path></svg>',
        'smartphone': '<svg class="h-5 w-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"></path></svg>',
        'wallet': '<svg class="h-5 w-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z"></path></svg>',
        'banknote': '<svg class="h-5 w-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z"></path></svg>'
    };
    return icons[iconType] || icons['credit-card'];
}
function selectAddress(addressId) {
    selectedAddress = addressId;
    document.querySelectorAll('.address-option').forEach(option => {
        option.classList.remove('selected');
    });
    document.querySelectorAll('.address-option')[addressId].classList.add('selected');
    document.querySelectorAll('.address-option .w-4.h-4').forEach((radio, index) => {
        if (index === addressId) {
            radio.className = 'w-4 h-4 rounded-full border-2 mt-1 border-orange-500 bg-orange-500';
        } else {
            radio.className = 'w-4 h-4 rounded-full border-2 mt-1 border-gray-300';
        }
    });
}
    function selectPayment(paymentId) {
    selectedPayment = paymentId;
    document.querySelectorAll('.payment-method').forEach(option => {
    option.classList.remove('selected');
    });
    document.querySelector(`[onclick="selectPayment('${paymentId}')"]`).classList.add('selected');
    document.querySelectorAll('.payment-method .w-4.h-4').forEach((radio, index) => {
        if (paymentMethods[index].id === paymentId) {
            radio.className = 'w-4 h-4 rounded-full border-2 border-orange-500 bg-orange-500';
        } else {
            radio.className = 'w-4 h-4 rounded-full border-2 border-gray-300';
        }
    });
}
function placeOrder() {
    if (!selectedPayment) {
        alert('Please select a payment method');
        return;
    }
    document.getElementById('checkout-view').classList.add('hidden');
    document.getElementById('success-view').classList.remove('hidden');
    cartItems = [];
    updateCartUI();
    currentView = 'success';
}
function showHome() {
    document.getElementById('home-view').classList.remove('hidden');
    document.getElementById('restaurant-view').classList.add('hidden');
    document.getElementById('checkout-view').classList.add('hidden');
    document.getElementById('success-view').classList.add('hidden');  
    currentView = 'home';
    selectedRestaurant = null;
}
function handleLocationClick() {
    console.log('Location clicked'); 
}