# Teddy Momos Website

Welcome to the **Teddy Momos** digital experience repository. This project is a static website optimized for GitHub Pages, featuring an admin dashboard for order management.

## 📁 Project Structure

```
teddymomos/
├── index.html          # Homepage
├── menu.html           # Menu & Ordering
├── order.html          # Checkout
├── admin/              # Admin Dashboard (Protected)
├── assets/
│   ├── css/            # Stylesheets (variables.css, style.css)
│   ├── js/             # Logic (main.js, cart.js)
│   └── images/         # Optimized assets
└── ...
```

## 🚀 Setup & Development

1. **Clone the repository**
   ```bash
   git clone https://github.com/teddymomos/website.git
   cd website
   ```

2. **Run Locally**
   Since this is a static site, you can use any static file server.
   - VS Code: Use "Live Server" extension.
   - Python: `python -m http.server 8000`
   - Node: `npx serve .`

   Open `http://localhost:8000` in your browser.

## 🛠 Deployment

This site is designed for **GitHub Pages**.

1. Go to repository **Settings** > **Pages**.
2. Source: **Deploy from a branch**.
3. Branch: `main` / `root`.
4. Custom Domain: `teddymomos.com` (Ensure CNAME file is present).

## 🎨 Branding
- **Primary Color**: Red (`#C41E3A`)
- **Accent**: Gold (`#D4A574`)
- **Font**: Georgia (Headlines), Open Sans (Body)

## 🔐 Admin Access
Navigate to `/admin` to access the dashboard.
*Note: In this static version, authentication is simulated via LocalStorage.*
