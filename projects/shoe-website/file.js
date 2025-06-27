const products = [
            {
                id: 'run001',
                name: 'Nike Air Zoom Pegasus 40',
                price: 130.00,
                description: 'Experience lightweight support and responsive cushioning with the Nike Air Zoom Pegasus 40, perfect for daily runs and long distances. Engineered for comfort and durability.',
                category: 'running',
                isNew: true, // New property for "New Arrival" badge
                sizes: ['US 7', 'US 8', 'US 9', 'US 10', 'US 11', 'US 12'],
                variations: [
                    { colorName: 'Forest Green', hexCode: '#4CAF50', image: 'https://placehold.co/600x450/22c55e/ffffff?text=Pegasus+Green', moreImages: ['https://placehold.co/600x450/22c55e/ffffff?text=Pegasus+Green+1', 'https://placehold.co/600x450/22c55e/ffffff?text=Pegasus+Green+2', 'https://placehold.co/600x450/22c55e/ffffff?text=Pegasus+Green+3'] },
                    { colorName: 'Deep Blue', hexCode: '#3F51B5', image: 'https://placehold.co/600x450/f97316/ffffff?text=Pegasus+Blue', moreImages: ['https://placehold.co/600x450/f97316/ffffff?text=Pegasus+Blue+1', 'https://placehold.co/600x450/f97316/ffffff?text=Pegasus+Blue+2', 'https://placehold.co/600x450/f97316/ffffff?text=Pegasus+Blue+3'] },
                    { colorName: 'Vibrant Yellow', hexCode: '#FFEB3B', image: 'https://placehold.co/600x450/ef4444/000000?text=Pegasus+Yellow', moreImages: ['https://placehold.co/600x450/ef4444/000000?text=Pegasus+Yellow+1', 'https://placehold.co/600x450/ef4444/000000?text=Pegasus+Yellow+2', 'https://placehold.co/600x450/ef4444/000000?text=Pegasus+Yellow+3'] }
                ]
            },
            {
                id: 'bas001',
                name: 'Adidas Harden Vol. 7',
                price: 160.00,
                description: 'Dominate the court with the Adidas Harden Vol. 7. Designed for explosive movements and ultimate lockdown, featuring Boost cushioning for energy return.',
                category: 'basketball',
                isNew: false,
                sizes: ['US 8', 'US 9', 'US 10', 'US 11', 'US 12', 'US 13'],
                variations: [
                    { colorName: 'Blaze Orange', hexCode: '#FF5722', image: 'https://placehold.co/600x450/f97316/ffffff?text=Harden+Orange', moreImages: ['https://placehold.co/600x450/f97316/ffffff?text=Harden+Orange+1', 'https://placehold.co/600x450/f97316/ffffff?text=Harden+Orange+2'] },
                    { colorName: 'Cloud White', hexCode: '#FFFFFF', image: 'https://placehold.co/600x450/ffffff/000000?text=Harden+White', moreImages: ['https://placehold.co/600x450/ffffff/000000?text=Harden+White+1', 'https://placehold.co/600x450/ffffff/000000?text=Harden+White+2'] },
                    { colorName: 'Core Black', hexCode: '#000000', image: 'https://placehold.co/600x450/1f2937/ffffff?text=Harden+Black', moreImages: ['https://placehold.co/600x450/1f2937/ffffff?text=Harden+Black+1', 'https://placehold.co/600x450/1f2937/ffffff?text=Harden+Black+2'] }
                ]
            },
            {
                id: 'foo001',
                name: 'Puma Future Z 1.4 FG/AG',
                price: 200.00,
                description: 'Unleash your agility on the field with the Puma Future Z 1.4. Revolutionary FUZIONFIT+ compression band adapts to your foot shape for optimal fit and support.',
                category: 'football',
                isNew: true,
                sizes: ['US 6', 'US 7', 'US 8', 'US 9', 'US 10'],
                variations: [
                    { colorName: 'Electric Blue', hexCode: '#2196F3', image: 'https://placehold.co/600x450/f97316/ffffff?text=Future+Blue', moreImages: ['https://placehold.co/600x450/f97316/ffffff?text=Future+Blue+1', 'https://placehold.co/600x450/f97316/ffffff?text=Future+Blue+2'] },
                    { colorName: 'Fiery Coral', hexCode: '#FF6F61', image: 'https://placehold.co/600x450/ef4444/ffffff?text=Future+Coral', moreImages: ['https://placehold.co/600x450/ef4444/ffffff?text=Future+Coral+1', 'https://placehold.co/600x450/ef4444/ffffff?text=Future+Coral+2'] },
                    { colorName: 'Phantom Black', hexCode: '#424242', image: 'https://placehold.co/600x450/1f2937/ffffff?text=Future+Black', moreImages: ['https://placehold.co/600x450/1f2937/ffffff?text=Future+Black+1', 'https://placehold.co/600x450/1f2937/ffffff?text=Future+Black+2'] }
                ]
            },
            {
                id: 'tra001',
                name: 'Under Armour Project Rock 5',
                price: 150.00,
                description: 'Built for intense training, the Under Armour Project Rock 5 provides stability and cushioning for your toughest workouts. Designed in collaboration with Dwayne "The Rock" Johnson.',
                category: 'training',
                isNew: false,
                sizes: ['US 7.5', 'US 8.5', 'US 9.5', 'US 10.5', 'US 11.5'],
                variations: [
                    { colorName: 'Stealth Gray', hexCode: '#607D8B', image: 'https://placehold.co/600x450/22c55e/ffffff?text=Rock+Gray', moreImages: ['https://placehold.co/600x450/22c55e/ffffff?text=Rock+Gray+1', 'https://placehold.co/600x450/22c55e/ffffff?text=Rock+Gray+2'] },
                    { colorName: 'Crimson Red', hexCode: '#D32F2F', image: 'https://placehold.co/600x450/ef4444/ffffff?text=Rock+Red', moreImages: ['https://placehold.co/600x450/ef4444/ffffff?text=Rock+Red+1', 'https://placehold.co/600x450/ef4444/ffffff?text=Rock+Red+2'] },
                    { colorName: 'Onyx Black', hexCode: '#212121', image: 'https://placehold.co/600x450/1f2937/ffffff?text=Rock+Black', moreImages: ['https://placehold.co/600x450/1f2937/ffffff?text=Rock+Black+1', 'https://placehold.co/600x450/1f2937/ffffff?text=Rock+Black+2'] }
                ]
            },
            {
                id: 'run002',
                name: 'Hoka Clifton 9',
                price: 145.00,
                description: 'The Hoka Clifton 9 offers a perfect balance of soft cushioning and a lightweight ride, making it ideal for everyday training and recovery runs. Known for its smooth transitions.',
                category: 'running',
                isNew: false,
                sizes: ['US 6', 'US 7', 'US 8', 'US 9', 'US 10', 'US 11'],
                variations: [
                    { colorName: 'Emerald Green', hexCode: '#8BC34A', image: 'https://placehold.co/600x450/22c55e/ffffff?text=Clifton+Green', moreImages: ['https://placehold.co/600x450/22c55e/ffffff?text=Clifton+Green+1', 'https://placehold.co/600x450/22c55e/ffffff?text=Clifton+Green+2'] },
                    { colorName: 'Sky Blue', hexCode: '#00BCD4', image: 'https://placehold.co/600x450/f97316/ffffff?text=Clifton+Blue', moreImages: ['https://placehold.co/600x450/f97316/ffffff?text=Clifton+Blue+1', 'https://placehold.co/600x450/f97316/ffffff?text=Clifton+Blue+2'] },
                    { colorName: 'Sunset Orange', hexCode: '#FF9800', image: 'https://placehold.co/600x450/ef4444/ffffff?text=Clifton+Orange', moreImages: ['https://placehold.co/600x450/ef4444/ffffff?text=Clifton+Orange+1', 'https://placehold.co/600x450/ef4444/ffffff?text=Clifton+Orange+2'] }
                ]
            },
            {
                id: 'bas002',
                name: 'Jordan Zion 2',
                price: 140.00,
                description: 'Experience powerful support and responsiveness with the Jordan Zion 2, engineered for dynamic play and stability on the court. Inspired by Zion Williamson\'s explosive style.',
                category: 'basketball',
                isNew: true,
                sizes: ['US 9', 'US 10', 'US 11', 'US 12', 'US 13', 'US 14'],
                variations: [
                    { colorName: 'Varsity Red', hexCode: '#D32F2F', image: 'https://placehold.co/600x450/ef4444/ffffff?text=Zion+Red', moreImages: ['https://placehold.co/600x450/ef4444/ffffff?text=Zion+Red+1', 'https://placehold.co/600x450/ef4444/ffffff?text=Zion+Red+2'] },
                    { colorName: 'Pure Platinum', hexCode: '#E0E0E0', image: 'https://placehold.co/600x450/ffffff/000000?text=Zion+Platinum', moreImages: ['https://placehold.co/600x450/ffffff/000000?text=Zion+Platinum+1', 'https://placehold.co/600x450/ffffff/000000?text=Zion+Platinum+2'] },
                    { colorName: 'Game Royal', hexCode: '#1976D2', image: 'https://placehold.co/600x450/f97316/ffffff?text=Zion+Royal', moreImages: ['https://placehold.co/600x450/f97316/ffffff?text=Zion+Royal+1', 'https://placehold.co/600x450/f97316/ffffff?text=Zion+Royal+2'] }
                ]
            },
            {
                id: 'foo002',
                name: 'Nike Mercurial Vapor 15 Elite FG',
                price: 250.00,
                description: 'Speed is key with the Nike Mercurial Vapor 15 Elite. Designed for quick bursts of pace and precise ball control, giving you the edge in every game.',
                category: 'football',
                isNew: false,
                sizes: ['US 6.5', 'US 7.5', 'US 8.5', 'US 9.5', 'US 10.5'],
                variations: [
                    { colorName: 'Bright Crimson', hexCode: '#E6211C', image: 'https://placehold.co/600x450/ef4444/ffffff?text=Mercurial+Crimson', moreImages: ['https://placehold.co/600x450/ef4444/ffffff?text=Mercurial+Crimson+1', 'https://placehold.co/600x450/ef4444/ffffff?text=Mercurial+Crimson+2'] },
                    { colorName: 'Volt Green', hexCode: '#CDDC39', image: 'https://placehold.co/600x450/22c55e/000000?text=Mercurial+Volt', moreImages: ['https://placehold.co/600x450/22c55e/000000?text=Mercurial+Volt+1', 'https://placehold.co/600x450/22c55e/000000?text=Mercurial+Volt+2'] },
                    { colorName: 'Obsidian Black', hexCode: '#263238', image: 'https://placehold.co/600x450/1f2937/ffffff?text=Mercurial+Obsidian', moreImages: ['https://placehold.co/600x450/1f2937/ffffff?text=Mercurial+Obsidian+1', 'https://placehold.co/600x450/1f2937/ffffff?text=Mercurial+Obsidian+2'] }
                ]
            },
            {
                id: 'tra002',
                name: 'Reebok Nano X3',
                price: 130.00,
                description: 'The Reebok Nano X3 is the ultimate cross-training shoe, providing stability for lifting, flexibility for cardio, and durability for all your fitness pursuits.',
                category: 'training',
                isNew: false,
                sizes: ['US 7', 'US 8', 'US 9', 'US 10', 'US 11'],
                variations: [
                    { colorName: 'Vivid Purple', hexCode: '#9C27B0', image: 'https://placehold.co/600x450/ef4444/ffffff?text=Nano+Purple', moreImages: ['https://placehold.co/600x450/ef4444/ffffff?text=Nano+Purple+1', 'https://placehold.co/600x450/ef4444/ffffff?text=Nano+Purple+2'] },
                    { colorName: 'Navy Blue', hexCode: '#3F51B5', image: 'https://placehold.co/600x450/f97316/ffffff?text=Nano+Navy', moreImages: ['https://placehold.co/600x450/f97316/ffffff?text=Nano+Navy+1', 'https://placehold.co/600x450/f97316/ffffff?text=Nano+Navy+2'] },
                    { colorName: 'Carbon Gray', hexCode: '#757575', image: 'https://placehold.co/600x450/1f2937/ffffff?text=Nano+Gray', moreImages: ['https://placehold.co/600x450/1f2937/ffffff?text=Nano+Gray+1', 'https://placehold.co/600x450/1f2937/ffffff?text=Nano+Gray+2'] }
                ]
            }
        ];

        // Shopping Cart Array to store items added by the user
        let cart = [];
        // Wishlist Array to store items
        let wishlist = [];

        // Global state for product detail modal
        let currentProductInModal = null; // Stores the product object currently displayed in the modal
        let modalSelectedSize = '';
        let modalSelectedQuantity = 1;
        let modalSelectedVariationImage = ''; // Store the image URL of the selected variation in modal
        let modalSelectedColorName = ''; // Store the color name of the selected variation in modal
        let modalSelectedProductImages = []; // Stores array of images for the selected variation in modal

        // Get DOM elements
        const appContainer = document.getElementById('app-container');
        const cartCount = document.getElementById('cart-count');
        const cartIcon = document.getElementById('cart-icon');
        const cartModal = document.getElementById('cart-modal');
        const closeCartModalBtn = document.getElementById('close-cart-modal-btn');
        const cartItemsContainer = document.getElementById('cart-items-container');
        const emptyCartMessage = document.getElementById('empty-cart-message');
        const cartTotal = document.getElementById('cart-total');
        const proceedToCheckoutBtn = document.getElementById('proceed-to-checkout-btn');

        const wishlistCount = document.getElementById('wishlist-count');
        const wishlistIcon = document.getElementById('wishlist-icon');
        const wishlistModal = document.getElementById('wishlist-modal');
        const closeWishlistModalBtn = document.getElementById('close-wishlist-modal-btn');
        const wishlistItemsContainer = document.getElementById('wishlist-items-container');
        const emptyWishlistMessage = document.getElementById('empty-wishlist-message');

        const productDetailModal = document.getElementById('product-detail-modal');
        const closeProductDetailModalBtn = document.getElementById('close-product-detail-modal-btn');
        const modalDetailProductImage = document.getElementById('modal-detail-product-image');
        const modalProductImageThumbnails = document.getElementById('modal-product-image-thumbnails');
        const modalDetailProductName = document.getElementById('modal-detail-product-name');
        const modalDetailProductPrice = document.getElementById('modal-detail-product-price');
        const modalDetailProductDescription = document.getElementById('modal-detail-product-description');
        const modalVariationOptions = document.getElementById('modal-variation-options');
        const modalSizeOptions = document.getElementById('modal-size-options');
        const modalQuantityInput = document.getElementById('modal-quantity');
        const modalAddToCartBtn = document.getElementById('modal-add-to-cart-btn');
        const modalAddToWishlistBtn = document.getElementById('modal-add-to-wishlist-btn');

        const messageBox = document.getElementById('message-box');

        const mobileMenuButton = document.getElementById('mobile-menu-button');
        const mobileMenu = document.getElementById('mobile-menu');
        const navLinks = document.querySelectorAll('.nav-link');

        const themeToggleBtn = document.getElementById('theme-toggle-btn');
        const moonIcon = document.getElementById('moon-icon');
        const sunIcon = document.getElementById('sun-icon');


        // --- HTML Templates for Pages ---

        const homePageTemplate = `
            <section id="home" class="hero-section">
                <div class="hero-content">
                    <h1 class="animate-slide-in-up">Step Up Your Game. Find Your Perfect Pair.</h1>
                    <p class="animate-slide-in-up">Explore our wide range of high-performance sports shoes for every athlete.</p>
                    <a href="#shop" class="shop-now-btn animate-slide-in-up">Shop Now</a>
                </div>
            </section>

            <section class="product-list-section container">
                <h2 class="section-title">Featured Products</h2>
                <div id="home-featured-products" class="product-grid">
                    <!-- Featured Products will be dynamically loaded here -->
                </div>
            </section>
        `;

        const shopPageTemplate = `
            <section id="shop" class="product-list-section container">
                <h2 class="section-title">Our Latest Collection</h2>
                <div class="filter-buttons">
                    <button class="filter-btn active" data-category="all">All Shoes</button>
                    <button class="filter-btn" data-category="running">Running</button>
                    <button class="filter-btn" data-category="basketball">Basketball</button>
                    <button class="filter-btn" data-category="football">Football</button>
                    <button class="filter-btn" data-category="training">Training</button>
                </div>
                <div id="product-grid" class="product-grid">
                    <!-- Products will be dynamically loaded here by JavaScript -->
                </div>
            </section>
        `;

        const aboutUsPageTemplate = `
            <section id="about" class="about-section container">
                <h2 class="section-title">About Sporting Soles</h2>
                <div class="about-content">
                    <img src="https://placehold.co/600x400/93c5fd/ffffff?text=About+Us+Image" alt="About Us">
                    <div class="about-text">
                        <p>
                            At Sporting Soles, we are passionate about helping athletes of all levels find the perfect footwear to enhance their performance and comfort. We believe that the right pair of shoes can make all the difference, whether you're hitting the track, court, or field.
                        </p>
                        <p>
                            We carefully curate our collection from leading brands, ensuring quality, innovation, and style in every step. Our mission is to provide an unparalleled shopping experience, offering a diverse range of shoes tailored to various sports and individual needs.
                        </p>
                    </div>
                </div>
            </section>
        `;

        const contactPageTemplate = `
            <section id="contact" class="contact-section container">
                <h2 class="section-title">Get in Touch</h2>
                <div class="contact-form-wrapper">
                    <form class="contact-form">
                        <div class="form-group">
                            <label for="name">Name</label>
                            <input type="text" id="name" placeholder="Your Name">
                        </div>
                        <div class="form-group">
                            <label for="email">Email</label>
                            <input type="email" id="email" placeholder="you@example.com">
                        </div>
                        <div class="form-group">
                            <label for="message">Message</label>
                            <textarea id="message" rows="5" placeholder="Your message..."></textarea>
                        </div>
                        <button type="submit" class="submit-btn">Send Message</button>
                    </form>
                </div>
            </section>
        `;

        const checkoutPageTemplate = `
            <section id="checkout" class="checkout-page container">
                <h2 class="section-title">Secure Checkout</h2>

                <div class="checkout-section">
                    <h3>Order Summary</h3>
                    <div id="checkout-summary-items" class="cart-items-container" style="max-height: 250px; overflow-y: auto;">
                        <p id="empty-checkout-message" class="empty-message">Your cart is empty.</p>
                        <!-- Cart items will be cloned here from cart modal -->
                    </div>
                    <div class="cart-summary" style="margin-top: 1rem; padding-top: 1rem; border-top: 1px solid var(--color-border);">
                        <span>Total:</span>
                        <span id="checkout-total">$0.00</span>
                    </div>
                </div>

                <div class="checkout-section">
                    <h3>Shipping Information</h3>
                    <div class="form-group">
                        <label for="shipping-address">Full Address</label>
                        <input type="text" id="shipping-address" placeholder="123 Main St, City, Country">
                    </div>
                    <div class="form-group">
                        <label for="shipping-phone">Phone Number</label>
                        <input type="text" id="shipping-phone" placeholder="+254 7XX XXX XXX">
                    </div>
                </div>

                <div class="checkout-section">
                    <h3>Payment Method</h3>
                    <div class="space-y-4">
                        <div class="payment-option">
                            <input type="radio" id="payment-mpesa" name="payment-method" value="mpesa" checked>
                            <label for="payment-mpesa">
                                <img src="https://placehold.co/80x30/22c55e/ffffff?text=M-Pesa" alt="M-Pesa Logo" style="vertical-align: middle; margin-right: 10px;">
                                M-Pesa (Mobile Money)
                            </label>
                        </div>
                        <div class="payment-option">
                            <input type="radio" id="payment-paypal" name="payment-method" value="paypal">
                            <label for="payment-paypal">
                                <img src="https://placehold.co/80x30/f97316/ffffff?text=PayPal" alt="PayPal Logo" style="vertical-align: middle; margin-right: 10px;">
                                PayPal
                            </label>
                        </div>
                        <div class="payment-option">
                            <input type="radio" id="payment-card" name="payment-method" value="card">
                            <label for="payment-card">
                                <img src="https://placehold.co/80x30/ef4444/ffffff?text=Card" alt="Credit/Debit Card Logo" style="vertical-align: middle; margin-right: 10px;">
                                Credit/Debit Card
                            </label>
                        </div>
                    </div>
                    <div id="card-details" style="margin-top: 1.5rem; display: none;">
                        <div class="form-group">
                            <label for="card-number">Card Number</label>
                            <input type="text" id="card-number" placeholder="XXXX XXXX XXXX XXXX">
                        </div>
                        <div class="form-group" style="display: flex; gap: 1rem;">
                            <div style="flex: 1;">
                                <label for="expiry-date">Expiry Date (MM/YY)</label>
                                <input type="text" id="expiry-date" placeholder="MM/YY">
                            </div>
                            <div style="flex: 1;">
                                <label for="cvv">CVV</label>
                                <input type="text" id="cvv" placeholder="XXX">
                            </div>
                        </div>
                    </div>
                </div>

                <button class="checkout-button" id="place-order-btn">Place Order</button>
            </section>
        `;


        // --- Helper Functions ---

        /**
         * Displays a temporary message box for user feedback.
         * @param {string} message - The message to display.
         * @param {string} type - 'success' (default) or 'error' for styling.
         */
        function showMessageBox(message, type = 'success') {
            messageBox.textContent = message;
            messageBox.classList.remove('error'); // Clear previous type
            if (type === 'error') {
                messageBox.classList.add('error');
            }

            messageBox.classList.add('show');

            setTimeout(() => {
                messageBox.classList.remove('show');
            }, 2500); // Message disappears after 2.5 seconds
        }

        /**
         * Shows a modal.
         * @param {HTMLElement} modalElement - The modal element to show.
         */
        function showModal(modalElement) {
            modalElement.classList.add('show');
            document.body.style.overflow = 'hidden'; // Prevent scrolling background
        }

        /**
         * Hides a modal.
         * @param {HTMLElement} modalElement - The modal element to hide.
         */
        function hideModal(modalElement) {
            modalElement.classList.remove('show');
            document.body.style.overflow = ''; // Restore scrolling
        }

        /**
         * Adds a product to the cart. If the product already exists, increments its quantity.
         * Also handles variations and sizes.
         * @param {object} product - The product object to add.
         * @param {string} selectedSize - The selected size.
         * @param {string} selectedColorName - The selected color name.
         * @param {string} selectedImage - The image URL of the selected variation.
         * @param {number} quantity - The quantity to add.
         */
        function addToCart(product, selectedSize, selectedColorName, selectedImage, quantity = 1) {
            // Create a unique identifier for the cart item based on product ID, size, and color
            const cartItemId = `${product.id}-${selectedSize}-${selectedColorName}`;
            const existingItemIndex = cart.findIndex(item => item.cartItemId === cartItemId);

            if (existingItemIndex > -1) {
                cart[existingItemIndex].quantity += quantity;
            } else {
                cart.push({
                    cartItemId: cartItemId,
                    id: product.id,
                    name: product.name,
                    price: product.price,
                    image: selectedImage,
                    size: selectedSize,
                    color: selectedColorName,
                    quantity: quantity
                });
            }
            updateCartDisplay();
            showMessageBox(`${product.name} (${selectedColorName}, ${selectedSize}) added to cart!`);
        }

        /**
         * Removes a product from the cart.
         * @param {string} cartItemId - The unique ID of the item in the cart to remove.
         */
        function removeFromCart(cartItemId) {
            cart = cart.filter(item => item.cartItemId !== cartItemId);
            updateCartDisplay();
        }

        /**
         * Updates the quantity of a product in the cart.
         * @param {string} cartItemId - The unique ID of the item in the cart.
         * @param {number} newQuantity - The new quantity.
         */
        function updateCartQuantity(cartItemId, newQuantity) {
            const itemIndex = cart.findIndex(item => item.cartItemId === cartItemId);
            if (itemIndex > -1) {
                if (newQuantity <= 0) {
                    removeFromCart(cartItemId);
                } else {
                    cart[itemIndex].quantity = newQuantity;
                }
            }
            updateCartDisplay();
        }

        /**
         * Updates the shopping cart UI, including item list, count, and total.
         * @param {HTMLElement} container - The container to render cart items into (defaults to cartItemsContainer).
         * @param {HTMLElement} totalDisplay - The element to update the total price (defaults to cartTotal).
         * @param {HTMLElement} emptyMessageDisplay - The element for empty message (defaults to emptyCartMessage).
         */
        function updateCartDisplay(container = cartItemsContainer, totalDisplay = cartTotal, emptyMessageDisplay = emptyCartMessage) {
            cartCount.textContent = cart.reduce((sum, item) => sum + item.quantity, 0);
            container.innerHTML = ''; // Clear current cart items

            if (cart.length === 0) {
                emptyMessageDisplay.style.display = 'block';
            } else {
                emptyMessageDisplay.style.display = 'none';
                cart.forEach(item => {
                    const cartItemDiv = document.createElement('div');
                    cartItemDiv.className = 'cart-item';
                    cartItemDiv.innerHTML = `
                        <div style="display: flex; align-items: center;">
                            <img src="${item.image}" alt="${item.name}">
                            <div class="cart-item-details">
                                <h4>${item.name}</h4>
                                <p>$${item.price.toFixed(2)} x ${item.quantity}</p>
                                <p>Size: ${item.size || 'N/A'}, Color: ${item.color || 'N/A'}</p>
                            </div>
                        </div>
                        <div class="cart-item-actions">
                            <input type="number" min="1" value="${item.quantity}" data-id="${item.cartItemId}" class="quantity-input">
                            <button data-id="${item.cartItemId}" class="remove-from-cart-btn">
                                <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"></path></svg>
                            </button>
                        </div>
                    `;
                    container.appendChild(cartItemDiv);
                });
            }

            // Calculate total
            const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
            totalDisplay.textContent = `$${total.toFixed(2)}`;
        }

        /**
         * Adds a product to the wishlist.
         * @param {object} product - The product object to add.
         * @param {string} selectedSize - The selected size.
         * @param {string} selectedColorName - The selected color name.
         * @param {string} selectedImage - The image URL of the selected variation.
         */
        function addToWishlist(product, selectedSize, selectedColorName, selectedImage) {
            const wishlistItemId = `${product.id}-${selectedSize}-${selectedColorName}`;
            const existingItem = wishlist.find(item => item.wishlistItemId === wishlistItemId);

            if (existingItem) {
                showMessageBox(`${product.name} (${selectedColorName}, ${selectedSize}) is already in your wishlist.`, 'error');
            } else {
                wishlist.push({
                    wishlistItemId: wishlistItemId,
                    id: product.id,
                    name: product.name,
                    price: product.price,
                    image: selectedImage,
                    size: selectedSize,
                    color: selectedColorName,
                    // Add any other properties relevant to the wishlist item
                });
                updateWishlistDisplay();
                showMessageBox(`${product.name} (${selectedColorName}, ${selectedSize}) added to wishlist!`);
            }
        }

        /**
         * Removes a product from the wishlist.
         * @param {string} wishlistItemId - The unique ID of the item in the wishlist to remove.
         */
        function removeFromWishlist(wishlistItemId) {
            wishlist = wishlist.filter(item => item.wishlistItemId !== wishlistItemId);
            updateWishlistDisplay();
        }

        /**
         * Updates the wishlist UI, including item list and count.
         */
        function updateWishlistDisplay() {
            wishlistCount.textContent = wishlist.length;
            wishlistItemsContainer.innerHTML = ''; // Clear current wishlist items

            if (wishlist.length === 0) {
                emptyWishlistMessage.style.display = 'block';
            } else {
                emptyWishlistMessage.style.display = 'none';
                wishlist.forEach(item => {
                    const wishlistItemDiv = document.createElement('div');
                    wishlistItemDiv.className = 'wishlist-item';
                    wishlistItemDiv.innerHTML = `
                        <div style="display: flex; align-items: center;">
                            <img src="${item.image}" alt="${item.name}">
                            <div class="wishlist-item-details">
                                <h4>${item.name}</h4>
                                <p>$${item.price.toFixed(2)}</p>
                                <p>Size: ${item.size || 'N/A'}, Color: ${item.color || 'N/A'}</p>
                            </div>
                        </div>
                        <div class="wishlist-item-actions">
                            <button
                                class="add-to-cart-from-wishlist-btn"
                                data-id="${item.id}"
                                data-size="${item.size}"
                                data-color="${item.color}"
                                data-image="${item.image}"
                                data-name="${item.name}"
                                data-price="${item.price}"
                                data-wishlist-item-id="${item.wishlistItemId}" <!-- Added for removal -->
                            >
                                Add to Cart
                            </button>
                            <button data-id="${item.wishlistItemId}" class="remove-from-wishlist-btn">
                                <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"></path></svg>
                            </button>
                        </div>
                    `;
                    wishlistItemsContainer.appendChild(wishlistItemDiv);
                });
            }
        }


        /**
         * Renders all products to the grid for the Shop page, optionally filtered by category.
         * @param {string} category - The category to filter by ('all', 'running', etc.).
         * @param {HTMLElement} targetGrid - The HTML element to render products into.
         */
        function renderProducts(category = 'all', targetGrid) {
            targetGrid.innerHTML = ''; // Clear existing products
            const filteredProducts = category === 'all'
                ? products
                : products.filter(product => product.category === category);

            if (filteredProducts.length === 0) {
                targetGrid.innerHTML = '<p style="text-align: center; width: 100%; color: var(--color-text-medium); font-size: 1.25rem;">No products found in this category.</p>';
                return;
            }

            filteredProducts.forEach(product => {
                const productCard = document.createElement('div');
                productCard.className = 'product-card';
                if (product.isNew) {
                    productCard.classList.add('new-arrival'); // Add class for new arrival badge
                }
                productCard.setAttribute('data-id', product.id); // Store product ID for easy lookup

                // Use the first variation's image as the default thumbnail
                const defaultImage = product.variations && product.variations.length > 0
                                    ? product.variations[0].image
                                    : 'https://placehold.co/400x300/cccccc/ffffff?text=No+Image';

                productCard.innerHTML = `
                    <img src="${defaultImage}" alt="${product.name}">
                    <div class="card-content">
                        <h3>${product.name}</h3>
                        <p class="category-text">${product.category} Shoes</p>
                        <p class="price-text">$${product.price.toFixed(2)}</p>
                        <div class="product-card-actions">
                            <button class="add-to-cart-btn" data-product-id="${product.id}">Add to Cart</button>
                            <button class="add-to-wishlist-btn" data-product-id="${product.id}">Wishlist</button>
                        </div>
                    </div>
                `;
                targetGrid.appendChild(productCard);
            });
        }

        /**
         * Populates and displays the Product Detail Modal (Lightbox).
         * @param {string} productId - The ID of the product to display.
         */
        function populateProductDetailModal(productId) {
            const product = products.find(p => p.id === productId);

            if (!product) {
                showMessageBox('Product details not found.', 'error');
                return;
            }

            // Populate modal elements
            modalDetailProductName.textContent = product.name;
            modalDetailProductPrice.textContent = `$${product.price.toFixed(2)}`;
            modalDetailProductDescription.textContent = product.description;

            currentProductInModal = product; // Set global state for this product

            // Reset selected options for modal
            modalSelectedSize = '';
            modalSelectedQuantity = 1;
            modalQuantityInput.value = 1;
            modalSelectedVariationImage = '';
            modalSelectedColorName = '';
            modalSelectedProductImages = [];

            // Render Variations in modal
            modalVariationOptions.innerHTML = '';
            product.variations.forEach((variation, index) => {
                const img = document.createElement('img');
                img.src = variation.image;
                img.alt = variation.colorName;
                img.className = 'modal-variation-thumb';
                img.setAttribute('data-color-name', variation.colorName);
                img.setAttribute('data-image-url', variation.image); // Main image for this variation
                img.setAttribute('data-more-images', JSON.stringify(variation.moreImages || [])); // Store additional images
                modalVariationOptions.appendChild(img);

                // Automatically select the first variation and update main image and thumbnails
                if (index === 0) {
                    img.classList.add('selected');
                    modalDetailProductImage.src = variation.image;
                    modalSelectedVariationImage = variation.image;
                    modalSelectedColorName = variation.colorName;
                    modalSelectedProductImages = [variation.image, ...(variation.moreImages || [])];
                    renderModalProductImages(modalSelectedProductImages, modalDetailProductImage, modalProductImageThumbnails);
                }
            });

            // Add event listener for variation selection in modal
            modalVariationOptions.addEventListener('click', (event) => {
                const target = event.target;
                if (target.classList.contains('modal-variation-thumb')) {
                    document.querySelectorAll('.modal-variation-thumb').forEach(thumb => {
                        thumb.classList.remove('selected');
                    });
                    target.classList.add('selected');
                    modalSelectedVariationImage = target.getAttribute('data-image-url');
                    modalSelectedColorName = target.getAttribute('data-color-name');
                    modalSelectedProductImages = [modalSelectedVariationImage, ...JSON.parse(target.getAttribute('data-more-images'))];
                    renderModalProductImages(modalSelectedProductImages, modalDetailProductImage, modalProductImageThumbnails);
                }
            });

            // Function to render main product image and its thumbnails within the modal
            function renderModalProductImages(images, mainImageElement, thumbnailsContainer) {
                mainImageElement.src = images[0]; // Set the first image as the main one
                thumbnailsContainer.innerHTML = ''; // Clear existing thumbnails

                images.forEach((imgSrc, index) => {
                    const thumb = document.createElement('img');
                    thumb.src = imgSrc;
                    thumb.alt = `Product view ${index + 1}`;
                    thumb.className = 'modal-product-image-thumbnail';
                    thumb.setAttribute('data-full-image', imgSrc);
                    if (index === 0) {
                        thumb.classList.add('active-thumb'); // Mark the first thumbnail as active
                    }
                    thumbnailsContainer.appendChild(thumb);

                    thumb.addEventListener('click', (event) => {
                        document.querySelectorAll('.modal-product-image-thumbnail').forEach(t => t.classList.remove('active-thumb'));
                        event.target.classList.add('active-thumb');
                        mainImageElement.src = event.target.getAttribute('data-full-image');
                    });
                });
            }


            // Render Sizes in modal
            modalSizeOptions.innerHTML = '';
            product.sizes.forEach(size => {
                const button = document.createElement('button');
                button.textContent = size;
                button.className = 'modal-size-btn';
                button.setAttribute('data-size', size);
                modalSizeOptions.appendChild(button);
            });

            // Add event listener for size selection in modal
            modalSizeOptions.addEventListener('click', (event) => {
                const target = event.target;
                if (target.classList.contains('modal-size-btn')) {
                    document.querySelectorAll('.modal-size-btn').forEach(btn => {
                        btn.classList.remove('selected');
                    });
                    target.classList.add('selected');
                    modalSelectedSize = target.getAttribute('data-size');
                }
            });

            // Event listener for quantity input in modal
            modalQuantityInput.addEventListener('change', (event) => {
                const val = parseInt(event.target.value);
                modalSelectedQuantity = (val > 0) ? val : 1;
                event.target.value = modalSelectedQuantity;
            });

            // Event listener for "Add to Cart" button in modal
            modalAddToCartBtn.onclick = () => {
                if (!modalSelectedSize) {
                    showMessageBox('Please select a size.', 'error');
                    return;
                }
                if (!modalSelectedVariationImage) {
                    showMessageBox('Please select a color variation.', 'error');
                    return;
                }
                addToCart(currentProductInModal, modalSelectedSize, modalSelectedColorName, modalSelectedVariationImage, modalSelectedQuantity);
                hideModal(productDetailModal); // Close modal after adding to cart
            };

            // Event listener for "Add to Wishlist" button in modal
            modalAddToWishlistBtn.onclick = () => {
                if (!modalSelectedSize) {
                    showMessageBox('Please select a size to add to wishlist.', 'error');
                    return;
                }
                if (!modalSelectedVariationImage) {
                    showMessageBox('Please select a color variation to add to wishlist.', 'error');
                    return;
                }
                addToWishlist(currentProductInModal, modalSelectedSize, modalSelectedColorName, modalSelectedVariationImage);
                hideModal(productDetailModal); // Close modal after adding to wishlist
            };

            // Show the modal
            showModal(productDetailModal);
        }


        /**
         * Renders the static About Us Page.
         */
        function renderAboutUsPage() {
            appContainer.innerHTML = aboutUsPageTemplate;
            // Add animation class after content is in DOM for effect
            const aboutSection = appContainer.querySelector('.about-section');
            if(aboutSection) aboutSection.style.opacity = '1'; // Ensure it's visible after render
        }

        /**
         * Renders the static Contact Page.
         */
        function renderContactPage() {
            appContainer.innerHTML = contactPageTemplate;
            const contactSection = appContainer.querySelector('.contact-section');
            if(contactSection) contactSection.style.opacity = '1'; // Ensure it's visible after render
            // Add form submission listener if needed (e.g., for AJAX submission)
            const contactForm = appContainer.querySelector('.contact-form');
            if (contactForm) {
                contactForm.addEventListener('submit', (e) => {
                    e.preventDefault();
                    showMessageBox('Message sent! (This is a demo, no actual send)', 'success');
                    contactForm.reset(); // Clear form
                });
            }
        }

        /**
         * Renders the checkout page.
         */
        function renderCheckoutPage() {
            appContainer.innerHTML = checkoutPageTemplate;
            const checkoutSection = appContainer.querySelector('.checkout-page');
            if(checkoutSection) checkoutSection.style.opacity = '1';

            // Populate order summary
            const checkoutSummaryItems = document.getElementById('checkout-summary-items');
            const checkoutTotal = document.getElementById('checkout-total');
            const emptyCheckoutMessage = document.getElementById('empty-checkout-message');
            updateCartDisplay(checkoutSummaryItems, checkoutTotal, emptyCheckoutMessage);

            // Handle payment method visibility
            const paymentRadios = document.querySelectorAll('input[name="payment-method"]');
            const cardDetailsDiv = document.getElementById('card-details');

            paymentRadios.forEach(radio => {
                radio.addEventListener('change', () => {
                    if (radio.value === 'card') {
                        cardDetailsDiv.style.display = 'block';
                    } else {
                        cardDetailsDiv.style.display = 'none';
                    }
                });
            });

            // "Place Order" button handler
            const placeOrderBtn = document.getElementById('place-order-btn');
            if (placeOrderBtn) {
                placeOrderBtn.addEventListener('click', () => {
                    // This is a non-functional demo
                    if (cart.length === 0) {
                        showMessageBox('Your cart is empty. Please add items before checking out.', 'error');
                        return;
                    }
                    const selectedMethod = document.querySelector('input[name="payment-method"]:checked').value;
                    showMessageBox(`Order placed! Payment via ${selectedMethod}. (Demo only)`, 'success');
                    cart = []; // Clear cart after "order"
                    updateCartDisplay(); // Update cart count in header
                    window.location.hash = '#home'; // Redirect to home after "order"
                });
            }
        }

        /**
         * The main routing function. Renders the appropriate page based on the URL hash.
         */
        function handleRouting() {
            const hash = window.location.hash || '#home'; // Default to home

            // Update active navigation link
            navLinks.forEach(link => {
                link.classList.remove('active');
                if (link.getAttribute('href') === hash.split(':')[0]) { // Match base hash for nav links
                    link.classList.add('active');
                }
            });
            mobileMenu.querySelectorAll('a').forEach(link => {
                 link.classList.remove('active');
                 if (link.getAttribute('href') === hash.split(':')[0]) {
                     link.classList.add('active');
                 }
            });

            // Handle page rendering based on hash
            switch (hash.split(':')[0]) { // Use split to ignore product ID for page routing
                case '#home':
                    appContainer.innerHTML = homePageTemplate;
                    const homeFeaturedProductsGrid = document.getElementById('home-featured-products');
                    if (homeFeaturedProductsGrid) {
                        renderProducts('all', homeFeaturedProductsGrid); // Render all, but new arrivals will have badge
                    }
                    break;
                case '#shop':
                    appContainer.innerHTML = shopPageTemplate;
                    const productGrid = document.getElementById('product-grid');
                    if (productGrid) {
                        renderProducts('all', productGrid); // Initial render for shop page
                        // Re-attach filter button listeners after content is loaded
                        document.querySelectorAll('.filter-btn').forEach(button => {
                            button.addEventListener('click', (event) => {
                                const category = event.target.getAttribute('data-category');
                                renderProducts(category, productGrid);

                                // Update active button styling
                                document.querySelectorAll('.filter-btn').forEach(btn => {
                                    btn.classList.remove('active');
                                });
                                event.target.classList.add('active');
                            });
                        });
                    }
                    break;
                case '#about':
                    renderAboutUsPage();
                    break;
                case '#contact':
                    renderContactPage();
                    break;
                case '#checkout':
                    renderCheckoutPage();
                    break;
                default:
                    // Fallback to home if an invalid hash is provided or on direct load without hash
                    window.location.hash = '#home';
                    break;
            }
            // Scroll to top of the page when navigating to a new page
            window.scrollTo(0, 0);
        }

        /**
         * Toggles between light and dark themes.
         */
        function toggleTheme() {
            if (document.body.classList.contains('dark-theme')) {
                document.body.classList.remove('dark-theme');
                localStorage.setItem('theme', 'light');
                moonIcon.style.display = 'block';
                sunIcon.style.display = 'none';
            } else {
                document.body.classList.add('dark-theme');
                localStorage.setItem('theme', 'dark');
                moonIcon.style.display = 'none';
                sunIcon.style.display = 'block';
            }
        }

        /**
         * Applies the saved theme preference on page load.
         */
        function applySavedTheme() {
            const savedTheme = localStorage.getItem('theme') || 'light'; // Default to light
            if (savedTheme === 'dark') {
                document.body.classList.add('dark-theme');
                moonIcon.style.display = 'none';
                sunIcon.style.display = 'block';
            } else {
                document.body.classList.remove('dark-theme');
                moonIcon.style.display = 'block';
                sunIcon.style.display = 'none';
            }
        }

        // --- Event Listeners ---

        // Listen for hash changes to trigger page rendering
        window.addEventListener('hashchange', handleRouting);

        // Initial page load
        document.addEventListener('DOMContentLoaded', () => {
            applySavedTheme(); // Apply theme before rendering content
            handleRouting();
            updateCartDisplay(); // Initialize cart count on load
            updateWishlistDisplay(); // Initialize wishlist count on load

            // Event delegation for product card clicks on Home and Shop pages
            appContainer.addEventListener('click', (event) => {
                const productCard = event.target.closest('.product-card');
                if (productCard) {
                    const productId = productCard.getAttribute('data-id');

                    // Check if an 'Add to Cart' or 'Add to Wishlist' button was clicked
                    if (event.target.classList.contains('add-to-cart-btn')) {
                        const productToAdd = products.find(p => p.id === productId);
                        if (productToAdd) {
                            // For simplicity, directly add with default first variation and size if not in modal
                            const defaultVariation = productToAdd.variations[0];
                            const defaultSize = productToAdd.sizes[0];
                            addToCart(productToAdd, defaultSize, defaultVariation.colorName, defaultVariation.image, 1);
                        }
                    } else if (event.target.classList.contains('add-to-wishlist-btn')) {
                        const productToWishlist = products.find(p => p.id === productId);
                         if (productToWishlist) {
                            const defaultVariation = productToWishlist.variations[0];
                            const defaultSize = productToWishlist.sizes[0];
                            addToWishlist(productToWishlist, defaultSize, defaultVariation.colorName, defaultVariation.image);
                        }
                    }
                    else {
                        // If not a button, open the product detail modal
                        populateProductDetailModal(productId);
                    }
                }
            });
        });

        // Open Cart Modal
        cartIcon.addEventListener('click', () => {
            updateCartDisplay(); // Ensure cart display is up-to-date before opening
            showModal(cartModal);
        });

        // Close Cart Modal (by clicking close button or outside modal)
        closeCartModalBtn.addEventListener('click', () => {
            hideModal(cartModal);
        });
        cartModal.addEventListener('click', (event) => {
            if (event.target === cartModal) { // Click outside content to close
                hideModal(cartModal);
            }
        });

        // Event delegation for cart item quantity change and remove buttons
        cartItemsContainer.addEventListener('input', (event) => {
            if (event.target.classList.contains('quantity-input')) {
                const cartItemId = event.target.getAttribute('data-id');
                const newQuantity = parseInt(event.target.value);
                if (!isNaN(newQuantity)) {
                    updateCartQuantity(cartItemId, newQuantity);
                }
            }
        });

        cartItemsContainer.addEventListener('click', (event) => {
            const removeBtn = event.target.closest('.remove-from-cart-btn');
            if (removeBtn) {
                const cartItemId = removeBtn.getAttribute('data-id');
                removeFromCart(cartItemId);
            }
        });

        // Proceed to Checkout button in Cart Modal
        proceedToCheckoutBtn.addEventListener('click', () => {
            hideModal(cartModal); // Close cart modal
            window.location.hash = '#checkout'; // Navigate to checkout page
        });

        // Open Wishlist Modal
        wishlistIcon.addEventListener('click', () => {
            updateWishlistDisplay();
            showModal(wishlistModal);
        });

        // Close Wishlist Modal
        closeWishlistModalBtn.addEventListener('click', () => {
            hideModal(wishlistModal);
        });
        wishlistModal.addEventListener('click', (event) => {
            if (event.target === wishlistModal) {
                hideModal(wishlistModal);
            }
        });

        // Event delegation for removing items from wishlist AND adding to cart from wishlist
        wishlistItemsContainer.addEventListener('click', (event) => {
            const removeBtn = event.target.closest('.remove-from-wishlist-btn');
            if (removeBtn) {
                const wishlistItemId = removeBtn.getAttribute('data-id');
                removeFromWishlist(wishlistItemId);
            }

            const addToCartBtn = event.target.closest('.add-to-cart-from-wishlist-btn');
            if (addToCartBtn) {
                const productId = addToCartBtn.getAttribute('data-id');
                const size = addToCartBtn.getAttribute('data-size');
                const color = addToCartBtn.getAttribute('data-color');
                const image = addToCartBtn.getAttribute('data-image');
                const name = addToCartBtn.getAttribute('data-name');
                const price = parseFloat(addToCartBtn.getAttribute('data-price'));
                const wishlistItemId = addToCartBtn.getAttribute('data-wishlist-item-id'); // Get the wishlist item ID

                const product = { id: productId, name, price }; // Recreate a simplified product object for addToCart
                addToCart(product, size, color, image, 1); // Add to cart with quantity 1
                removeFromWishlist(wishlistItemId); // Automatically remove from wishlist
            }
        });

        // Close Product Detail Modal
        closeProductDetailModalBtn.addEventListener('click', () => {
            hideModal(productDetailModal);
        });
        productDetailModal.addEventListener('click', (event) => {
            if (event.target === productDetailModal) { // Click outside content to close
                hideModal(productDetailModal);
            }
        });

        // Mobile menu toggle
        mobileMenuButton.addEventListener('click', () => {
            mobileMenu.classList.toggle('hidden');
            // Removed desktop nav visibility toggle from here. It's handled by CSS media queries.
        });

        // Close mobile menu when a link is clicked
        mobileMenu.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                mobileMenu.classList.add('hidden');
                // Ensure desktop nav returns to its appropriate display state based on screen size
                if (window.innerWidth > 768) {
                    document.querySelector('.desktop-nav').style.display = 'flex';
                }
            });
        });

        // Ensure desktop nav shows on larger screens if mobile menu was toggled
        window.addEventListener('resize', () => {
            if (window.innerWidth > 768) {
                document.querySelector('.desktop-nav').style.display = 'flex';
                mobileMenu.classList.add('hidden');
            } else {
                document.querySelector('.desktop-nav').style.display = 'none';
            }
        });
        // Initial check on load for desktop nav display
        if (window.innerWidth <= 768) {
             document.querySelector('.desktop-nav').style.display = 'none';
        } else {
             document.querySelector('.desktop-nav').style.display = 'flex';
        }

        // Header shadow on scroll
        window.addEventListener('scroll', () => {
            if (window.scrollY > 50) { // Add shadow after scrolling 50px
                document.body.classList.add('scrolled');
            } else {
                document.body.classList.remove('scrolled');
            }
        });

        // Theme Toggle Event Listener
        themeToggleBtn.addEventListener('click', toggleTheme);