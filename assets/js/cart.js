// Cart Logic

const Cart = {
    get: () => JSON.parse(localStorage.getItem('teddyCart')) || [],

    set: (cart) => {
        localStorage.setItem('teddyCart', JSON.stringify(cart));
        updateGlobalCartCount();
    },

    add: (product) => {
        let cart = Cart.get();
        const existingItem = cart.find(item => item.id === product.id);

        if (existingItem) {
            existingItem.quantity += 1;
        } else {
            cart.push({ ...product, quantity: 1 });
        }

        Cart.set(cart);
        // Optional: Show toast notification
        alert(`${product.name} added to cart!`);
    },

    remove: (productId) => {
        let cart = Cart.get();
        cart = cart.filter(item => item.id !== productId);
        Cart.set(cart);
    },

    updateQuantity: (productId, change) => {
        let cart = Cart.get();
        const item = cart.find(item => item.id === productId);

        if (item) {
            item.quantity += change;
            if (item.quantity <= 0) {
                cart = cart.filter(i => i.id !== productId);
            }
        }

        Cart.set(cart);
    },

    clear: () => {
        localStorage.removeItem('teddyCart');
        updateGlobalCartCount();
    }
};
