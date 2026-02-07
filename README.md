# VogueLITZ. - Headless Shopify Storefront

This is a modern, high-performance e-commerce storefront built with React, Vite, and TailwindCSS. It is designed as a **Headless Storefront** for Shopify.

**Important Note:** This project is NOT a standard Shopify Liquid theme. It connects to Shopify via the Storefront API.

## 🚀 Getting Started

### Prerequisites

- Node.js (v18 or higher)
- A Shopify store with a private app configured for Storefront API access.

### Installation

1.  Clone the repository:
    ```bash
    git clone https://github.com/your-username/voguelitz-storefront.git
    cd voguelitz-storefront
    ```

2.  Install dependencies:
    ```bash
    npm install
    ```

3.  Configure Environment Variables:
    Create a `.env` file in the root directory and add your Shopify API credentials:
    ```env
    VITE_SHOPIFY_STORE_DOMAIN=your-store.myshopify.com
    VITE_SHOPIFY_STOREFRONT_ACCESS_TOKEN=your-access-token
    ```

4.  Run the development server:
    ```bash
    npm run dev
    ```

## 🛍️ Shopify Integration Guide

This storefront uses a "Headless" architecture. This means the frontend (this React app) is decoupled from the Shopify backend.

### Why Headless?

- **Create Unique Customer Experiences:** Full control over the UI/UX without the limitations of Liquid themes.
- **Performance:** Single Page Application (SPA) architecture for instant page transitions.
- **Modern Tech Stack:** React ecosystem (framer-motion, lucide-react, etc.).

### Deployment

Can be deployed to any modern static hosting platform:

- **Vercel** (Recommended)
- **Netlify**
- **Cloudflare Pages**

**Do NOT** upload this project as a `.zip` file to the Shopify Admin > Online Store > Themes section. It will not work.

## 🛠️ Features

- **Branding:** "VogueLITZ." premium luxury aesthetic.
- **Components:** Custom "Floating Pill" header, Glassmorphism UI elements.
- **Localization:** Fully localized (Japanese/English) using `react-i18next`.
- **Checkout:** Mock checkout flow (ready for integration with Shopify Checkout API).
