// Main JS - Global Functionality

document.addEventListener('DOMContentLoaded', () => {
    updateGlobalCartCount();
});

// Update Cart Count in Navbar
function updateGlobalCartCount() {
    const cart = JSON.parse(localStorage.getItem('teddyCart')) || [];
    const count = cart.reduce((total, item) => total + item.quantity, 0);
    const cartCountEl = document.getElementById('cart-count');
    
    if (cartCountEl) {
        cartCountEl.textContent = count;
        cartCountEl.style.display = count > 0 ? 'flex' : 'none';
        
        // Add minimal animation
        cartCountEl.style.transform = 'scale(1.2)';
        setTimeout(() => {
            cartCountEl.style.transform = 'scale(1)';
        }, 200);
    }
}

// Mobile Menu Toggle (To be implemented if needed)
// Placeholder for future expansion
