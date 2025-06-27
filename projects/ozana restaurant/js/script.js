document.addEventListener('DOMContentLoaded', () => {
    // 1. Mobile Navigation Toggle (Burger Menu)
    const burgerMenu = document.querySelector('.burger-menu');
    const navLinks = document.querySelector('.nav-links');

    if (burgerMenu && navLinks) {
        burgerMenu.addEventListener('click', () => {
            navLinks.classList.toggle('nav-active');
            burgerMenu.classList.toggle('toggle');
        });
    }

    // 2. Menu Page Category Tabs
    const tabButtons = document.querySelectorAll('.tab-button');
    const menuContents = document.querySelectorAll('.menu-category-content');

    if (tabButtons.length > 0 && menuContents.length > 0) {
        tabButtons.forEach(button => {
            button.addEventListener('click', () => {
                // Remove active class from all buttons and content
                tabButtons.forEach(btn => btn.classList.remove('active'));
                menuContents.forEach(content => content.classList.remove('active'));

                // Add active class to clicked button
                button.classList.add('active');

                // Show corresponding content
                const category = button.dataset.category;
                const targetContent = document.getElementById(category);
                if (targetContent) {
                    targetContent.classList.add('active');
                }
            });
        });
    }

    // 3. Online Ordering Functionality
    const cartList = document.getElementById('cart-list');
    const cartTotalSpan = document.getElementById('cart-total');
    const checkoutBtn = document.getElementById('checkout-btn');
    const orderItemCards = document.querySelectorAll('.order-item-card');
    const checkoutModal = document.getElementById('checkout-modal');
    const closeModalBtn = document.querySelector('.close-button');
    const checkoutForm = document.getElementById('checkout-form');

    let cart = JSON.parse(localStorage.getItem('restaurantCart')) || []; // Load cart from localStorage

    // Function to update the cart display
    function updateCartDisplay() {
        cartList.innerHTML = ''; // Clear current cart display
        let total = 0;

        if (cart.length === 0) {
            cartList.innerHTML = '<li>No items in cart</li>';
            checkoutBtn.disabled = true;
            cartTotalSpan.textContent = '0.00';
            return;
        }

        cart.forEach(item => {
            const listItem = document.createElement('li');
            listItem.innerHTML = `
                <span>${item.name} x ${item.quantity}</span>
                <span>$${(item.price * item.quantity).toFixed(2)}</span>
            `;
            cartList.appendChild(listItem);
            total += item.price * item.quantity;
        });

        cartTotalSpan.textContent = total.toFixed(2);
        checkoutBtn.disabled = false;
        localStorage.setItem('restaurantCart', JSON.stringify(cart)); // Save cart to localStorage
    }

    // Add to Cart / Quantity control
    orderItemCards.forEach(card => {
        const itemId = card.dataset.itemId;
        const itemPrice = parseFloat(card.dataset.price);
        const itemName = card.querySelector('h3').textContent;
        const qtyInput = card.querySelector('.item-qty');
        const increaseBtn = card.querySelector('.increase-qty');
        const decreaseBtn = card.querySelector('.decrease-qty');
        const addToCartBtn = card.querySelector('.add-to-cart-btn');

        // Initialize quantity input based on cart
        const existingItem = cart.find(item => item.id === itemId);
        if (existingItem) {
            qtyInput.value = existingItem.quantity;
            addToCartBtn.textContent = 'Update Cart'; // Change button text if item is already in cart
        }


        increaseBtn.addEventListener('click', () => {
            qtyInput.value = parseInt(qtyInput.value) + 1;
            updateCartItem(itemId, itemName, itemPrice, parseInt(qtyInput.value));
        });

        decreaseBtn.addEventListener('click', () => {
            if (parseInt(qtyInput.value) > 0) {
                qtyInput.value = parseInt(qtyInput.value) - 1;
                updateCartItem(itemId, itemName, itemPrice, parseInt(qtyInput.value));
            }
        });

        addToCartBtn.addEventListener('click', () => {
             const currentQty = parseInt(qtyInput.value);
            if (currentQty > 0) {
                updateCartItem(itemId, itemName, itemPrice, currentQty);
                addToCartBtn.textContent = 'Update Cart';
            } else {
                // If quantity is 0 and "Add to Cart" is clicked, set to 1
                qtyInput.value = 1;
                updateCartItem(itemId, itemName, itemPrice, 1);
                addToCartBtn.textContent = 'Update Cart';
            }
        });

        // Handle direct input changes (optional, but good for UX)
        qtyInput.addEventListener('change', () => {
            let val = parseInt(qtyInput.value);
            if (isNaN(val) || val < 0) {
                qtyInput.value = 0;
            }
            updateCartItem(itemId, itemName, itemPrice, parseInt(qtyInput.value));
             if (parseInt(qtyInput.value) > 0) {
                addToCartBtn.textContent = 'Update Cart';
            } else {
                addToCartBtn.textContent = 'Add to Cart';
            }
        });
    });

    function updateCartItem(id, name, price, quantity) {
        const existingItemIndex = cart.findIndex(item => item.id === id);

        if (quantity > 0) {
            if (existingItemIndex > -1) {
                cart[existingItemIndex].quantity = quantity;
            } else {
                cart.push({ id, name, price, quantity });
            }
        } else {
            if (existingItemIndex > -1) {
                cart.splice(existingItemIndex, 1); // Remove item if quantity is 0
            }
        }
        updateCartDisplay();
    }

    // Show checkout modal
    if (checkoutBtn) {
        checkoutBtn.addEventListener('click', () => {
            checkoutModal.style.display = 'block';
        });
    }

    // Close modal
    if (closeModalBtn) {
        closeModalBtn.addEventListener('click', () => {
            checkoutModal.style.display = 'none';
        });
    }

    window.addEventListener('click', (event) => {
        if (event.target == checkoutModal) {
            checkoutModal.style.display = 'none';
        }
    });

    // Handle checkout form submission (frontend only)
    if (checkoutForm) {
        checkoutForm.addEventListener('submit', (event) => {
            event.preventDefault();
            const name = document.getElementById('name').value;
            const phone = document.getElementById('phone').value;
            const address = document.getElementById('address').value;
            const deliveryPickup = document.getElementById('delivery-pickup').value;
            const notes = document.getElementById('notes').value;

            // In a real application, you'd send this data to a backend server.
            // For a frontend project, you can display a confirmation message.
            console.log('Order Details:', {
                name,
                phone,
                address,
                deliveryPickup,
                notes,
                cart,
                total: cartTotalSpan.textContent
            });

            alert('Your order has been placed successfully! We will contact you shortly.');
            
            // Clear cart after successful order (frontend only)
            cart = [];
            localStorage.removeItem('restaurantCart');
            updateCartDisplay();
            checkoutModal.style.display = 'none';
            // Optionally, reset all quantity inputs to 0
            orderItemCards.forEach(card => {
                card.querySelector('.item-qty').value = 0;
                card.querySelector('.add-to-cart-btn').textContent = 'Add to Cart';
            });
        });
    }

    // Initial cart display on order page load
    if (document.querySelector('.order-page')) {
        updateCartDisplay();
    }


    // 4. Reservation Form Submission (frontend only)
    const reservationForm = document.getElementById('reservation-form');
    const reservationConfirmation = document.getElementById('reservation-confirmation');

    if (reservationForm) {
        reservationForm.addEventListener('submit', (event) => {
            event.preventDefault(); // Prevent actual form submission

            const name = document.getElementById('res-name').value;
            const email = document.getElementById('res-email').value;
            const phone = document.getElementById('res-phone').value;
            const date = document.getElementById('res-date').value;
            const time = document.getElementById('res-time').value;
            const guests = document.getElementById('res-guests').value;
            const notes = document.getElementById('res-notes').value;

            // In a real application, this data would be sent to a backend.
            // For a frontend demo, we'll just show a confirmation message.
            console.log('Reservation Details:', {
                name, email, phone, date, time, guests, notes
            });

            reservationConfirmation.innerHTML = `
                <p>Thank you, ${name}! Your reservation for ${guests} guests on ${date} at ${time} has been successfully submitted.</p>
                <p>A confirmation email will be sent to ${email}.</p>
            `;
            reservationConfirmation.classList.remove('hidden');
            reservationForm.reset(); // Clear the form

            // Optionally, hide the message after a few seconds
            setTimeout(() => {
                reservationConfirmation.classList.add('hidden');
            }, 7000); // Hide after 7 seconds
        });
    }

    // 5. Scroll Animations (using Intersection Observer for efficiency)
    const sections = document.querySelectorAll('section');

    const observerOptions = {
        root: null, // viewport
        rootMargin: '0px',
        threshold: 0.1 // Trigger when 10% of the element is visible
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in-up'); // Example class for animation
                observer.unobserve(entry.target); // Stop observing once animated
            }
        });
    }, observerOptions);

    sections.forEach(section => {
        section.classList.add('hidden-for-animation'); // Add a class to hide initially
        observer.observe(section);
    });

    // Add CSS for .hidden-for-animation and .fade-in-up
    // In style.css:
    /*
    .hidden-for-animation {
        opacity: 0;
        transform: translateY(20px);
        transition: opacity 0.8s ease-out, transform 0.8s ease-out;
    }

    .fade-in-up {
        opacity: 1;
        transform: translateY(0);
    }
    */
});





document.addEventListener('DOMContentLoaded', () => {
    // ... (Existing code for Mobile Navigation, Menu Tabs, Online Ordering) ...

    // --- New Code for Food Item Detail Modal ---
    const itemDetailModal = document.getElementById('item-detail-modal');
    const modalCloseButton = itemDetailModal ? itemDetailModal.querySelector('.close-button') : null;
    const modalItemImage = document.getElementById('modal-item-image');
    const modalItemName = document.getElementById('modal-item-name');
    const modalItemPrice = document.getElementById('modal-item-price');
    const modalItemIngredients = document.getElementById('modal-item-ingredients');
    const modalItemServing = document.getElementById('modal-item-serving');
    const addToOrderBtn = itemDetailModal ? itemDetailModal.querySelector('.add-to-order-btn') : null; // Get the "Add to Order" button

    const menuItems = document.querySelectorAll('.menu-item');

    menuItems.forEach(item => {
        item.addEventListener('click', () => {
            const name = item.dataset.itemName || item.querySelector('h3').textContent;
            const ingredients = item.dataset.ingredients || 'No ingredients listed.';
            const serving = item.dataset.serving || 'Serving portion not specified.';
            const price = item.querySelector('.price') ? item.querySelector('.price').textContent : 'N/A'; // Get price if available
            const imgSrc = item.querySelector('img') ? item.querySelector('img').src : 'assets/images/placeholder.jpg'; // Fallback image

            modalItemImage.src = imgSrc;
            modalItemName.textContent = name;
            modalItemPrice.textContent = `Price: ${price}`; // Display price in modal
            modalItemIngredients.textContent = ingredients;
            modalItemServing.textContent = serving;

            // Optional: If you want the "Add to Order" button to direct to the order page or add to cart directly
            if (addToOrderBtn) {
                 addToOrderBtn.onclick = () => {
                     // Option 1: Direct to order page
                     window.location.href = 'order.html';
                     // Option 2: Potentially add to cart (more complex for this modal, as it needs item ID/price)
                     // If you want to add to cart from here, you'd need the item's ID and price passed to this function.
                     // For now, let's just navigate.
                 };
            }

            itemDetailModal.style.display = 'block'; // Show the modal
            itemDetailModal.classList.add('show'); // Add 'show' class for animation
        });
    });

    if (modalCloseButton) {
        modalCloseButton.addEventListener('click', () => {
            itemDetailModal.classList.remove('show');
            setTimeout(() => {
                itemDetailModal.style.display = 'none';
            }, 300); // Wait for animation to finish before hiding
        });
    }

    // Close modal if clicking outside the modal content
    if (itemDetailModal) {
        window.addEventListener('click', (event) => {
            if (event.target == itemDetailModal) {
                itemDetailModal.classList.remove('show');
                setTimeout(() => {
                    itemDetailModal.style.display = 'none';
                }, 300); // Wait for animation to finish before hiding
            }
        });
    }
    // --- End New Code for Food Item Detail Modal ---


    // ... (Existing code for Reservation Form, Scroll Animations) ...
});

// Back-to-top button functionality (from file.js, corrected)
        document.addEventListener('DOMContentLoaded', function() {
            let backBtn = document.querySelector(".back-btn");

            window.addEventListener("scroll", () => {
                if (window.scrollY > 100) {
                    backBtn.classList.add('active');
                } else {
                    backBtn.classList.remove('active');
                }
            });

            backBtn.addEventListener("click", () => {
                window.scrollTo({
                    top: 0,
                    behavior: 'smooth'
                });
            });
        });