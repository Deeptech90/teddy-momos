// Admin JS

// Check Auth
document.addEventListener('DOMContentLoaded', () => {
    const isLoginPage = window.location.pathname.includes('index.html');
    const token = localStorage.getItem('teddyAdminToken');

    if (!token && !isLoginPage) {
        window.location.href = 'index.html';
    }

    if (token && isLoginPage) {
        window.location.href = 'dashboard.html';
    }
});

function logout() {
    localStorage.removeItem('teddyAdminToken');
    window.location.href = 'index.html';
}
