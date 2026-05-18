# ☀️ SunCart — Premium Summer-Themed eCommerce Platform

Welcome to **SunCart**, a production-ready, highly interactive, and visually stunning eCommerce web application tailored for summer essentials. Bootstrapped with **Next.js 16 (App Router)** and **React 19**, SunCart combines state-of-the-art web performance with a warm, refreshing summer aesthetic. 

It features responsive layouts, a robust database-backed session authentication system via **Better Auth**, Tailwind CSS v4, and curated components with premium micro-animations.

---

## Design System & Visual Aesthetics

SunCart's identity is defined by the warm sands, crystal clear shorelines, and bright skies of summer. It is styled with **Tailwind CSS v4** and **DaisyUI v5**, featuring:
*   **Typography**: 
    *   **Display Font**: `Fraunces` (serif) — Used for gorgeous, high-contrast headings.
    *   **Sans Font**: `Plus Jakarta Sans` — Clean, modern typography optimized for reading body copy.
*   **Color Palette**:
    *   **Primary (`#FF6B6B`)**: A vibrant, sun-soaked coral pink/red.
    *   **Secondary (`#0D9488`)**: A deep, refreshing ocean teal/turquoise.
    *   **Background (`#FFFBF5`)**: A soft off-white reflecting bright summer sunshine.
    *   **Muted Background (`#F5efe6`)**: A soothing warm sand tone.
    *   **Warning (`#FFC72C`)**: A lively, sunny yellow.

---

## 🚀 Key Features

### 1. Dynamic Landing Page
*   **Hero Banner**: A stunning and responsive introductory section welcoming users to the ultimate summer store.
*   **Popular Products**: Highlighted, handpicked summer essentials with smooth hover effects.
*   **Summer Care Tips**: Interactive cards delivering expert advice on hydration, skincare protection, and clothing choices to beat the heat.
*   **Top Brands Carousel**: Showcases industry-leading brands like Ray-Ban, Supergoop!, Roxy, and Quiksilver.

### 2. Advanced Product Catalog & Search
*   Navigate to `/products` to discover the full range of items.
*   **Real-time Category Filtering**: Switch seamlessly between categories: *Accessories, Clothing, Skincare, Beach Essentials, Drinkware, and Footwear*.
*   **Sorting Capabilities**: Order products by *Featured status, Price (Low to High / High to Low), and Highest Rated*.

### 3. Dynamic Product Detail Pages
*   Fully dynamic routing `/products/[id]` fetches individual products.
*   Displays comprehensive product details, UV protection metrics, ingredients/features checklist, stock metrics, and beautiful imagery powered by Unsplash.

### 4. Robust Secure Authentication (Better Auth)
*   **Credentials Auth**: Register and sign in with email and password, protected by frontend/backend validation and feedback.
*   **Social Sign-In**: Fully integrated authentication with Google Provider.
*   **Session State Access**: Uses the modern `@better-auth` client/server handlers with React hooks (`useSession`).
*   **Protected Profiles**: The `/profile` and `/profile/edit` pages are strictly restricted to authenticated users using Next.js server-side session checks. Unauthenticated requests are gracefully redirected to the login screen with a `callbackUrl`.

### 5. Premium Micro-interactions & Transitions
*   **Global Loader (`loading.jsx`)**: A gorgeous, animated page transition that features a pulsating heartbeat Sun icon, alerting users that content is loading smoothly.
*   **Custom 404 page (`not-found.jsx`)**: A delightful error page decorated with sunset gradients, custom Lucide icons, and quick-jump actions back to safety.
*   **React Hot Toast**: Instant feedback toast notifications for actions like signing in, registering, or update alerts.

---

## 🛠️ Technology Stack

*   **Core**: [Next.js 16 (App Router)](https://nextjs.org/) & [React 19](https://react.dev/)
*   **Styling & UI Components**: [Tailwind CSS v4](https://tailwindcss.com/) & [DaisyUI v5](https://daisyui.com/)
*   **Database Adapter**: [MongoDB](https://www.mongodb.com/) via `@better-auth/mongo-adapter`
*   **Authentication**: [Better Auth v1.6.11](https://www.better-auth.com/)
*   **Icons**: [Lucide React](https://lucide.dev/)
*   **Transitions**: [Animate.css](https://animate.style/)
*   **Forms**: [React Hook Form](https://react-hook-form.com/)

---

## ⚙️ Environment Setup

To run this application locally, you will need to configure your environment variables. Create a `.env` file in the root directory and add the following keys:

```env
# Better Auth Configuration
BETTER_AUTH_SECRET=your_auth_secret_key
BETTER_AUTH_URL=http://localhost:3000

# Database Connections
MONGO_URI=your_mongodb_connection_uri

# OAuth Social Logins
GOOGLE_CLIENT_ID=your_google_client_id
GOOGLE_CLIENT_SECRET=your_google_client_secret
```

---

## 💻 Getting Started & Installation

Follow these quick steps to get SunCart up and running on your local machine:

1.  **Clone the Repository**:
    ```bash
    git clone https://github.com/I-M-J/sun-cart.git
    cd sun-cart
    ```

2.  **Install Dependencies**:
    ```bash
    npm install
    ```

3.  **Run Development Server**:
    ```bash
    npm run dev
    ```

4.  **Open in Browser**:
    Visit [http://localhost:3000](http://localhost:3000) to explore the website.

---

## 📁 Project Directory Structure

```text
├── src/
│   ├── app/                      # Next.js App Router (pages and api routing)
│   │   ├── api/auth/[...better-auth]/route.js  # Better Auth API handlers
│   │   ├── auth/                 # Sign In and Sign Up page views
│   │   ├── products/             # Product catalog grid and product dynamic pages
│   │   ├── profile/              # User profile dashboard and information editor
│   │   ├── globals.css           # Tailwind v4 configuration & theme tokens
│   │   ├── layout.js             # Shell wrapper with Navbar, Footer, and Toast Providers
│   │   ├── loading.jsx           # Global animated site loader
│   │   └── not-found.jsx         # Custom 404 Sunset View
│   ├── components/               # Custom UI and Layout Components
│   │   ├── home/                 # HeroBanner, SummerCareTips, TopBrands, and PopularProducts
│   │   ├── layouts/              # Navbar, Footer, and NavbarAuth authentication check
│   │   ├── products/             # ProductGrid, ProductCard, and product detail components
│   │   └── ui/                   # Reusable UI primitives
│   ├── data/                     # Local JSON/JS mock datasets (products, brand tips, etc.)
│   └── lib/                      # Shared helper utility files and Better Auth client/server configurations
├── public/                       # Static assets, favicon, and icons
├── package.json                  # Scripts and dependencies configuration
└── next.config.mjs               # Next.js bundler settings
```

---

☀️ **SunCart** — Created to bring warmth, brightness, and comfort to your digital shopping journey.
