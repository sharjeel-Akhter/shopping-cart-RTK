# ShoppingEase

**Live At:** https://shopping-ease.vercel.app/

## Overview

ShoppingEase is a modern e-commerce web application built using React, Redux Toolkit, and Tailwind CSS. The application demonstrates how to build a scalable frontend architecture while implementing real-world shopping functionality.

Users can browse products, search for specific items, view detailed product information, add products to the shopping cart, remove products independently, and switch between light and dark themes. The project focuses on clean UI, reusable components, responsive design, and organized state management.

---

# Features

- Landing page with modern hero section
- Product listing page
- Product details page
- Product search functionality
- Shopping cart management
- Add products to cart
- Remove individual products from cart
- Dynamic cart count
- Dynamic total price calculation
- Light and Dark mode
- Responsive layout for mobile, tablet, and desktop
- Sticky navigation bar
- Custom hooks for reusable logic
- Dynamic document title management
- Reusable layouts using React Router

---

# Tech Stack

### Frontend

- React
- React Router
- Redux Toolkit
- React Redux
- Tailwind CSS v4
- Axios
- React Icons

---

# Project Architecture

The application is divided into independent modules to improve readability, scalability, and maintainability.

## Pages

The `Pages` directory contains all application screens.

- Home
- Shop
- Product Details
- Search
- Cart
- About

Each page is responsible only for rendering UI related to that route.

---

## Components

The `Components` directory contains reusable UI components shared across multiple pages.

Examples include:

- Header
- Footer
- ProductCard
- CartCard

This separation avoids duplicate code and keeps pages clean.

---

## Layouts

Layouts are used to share common UI between multiple pages.

### RootLayout

Contains the landing page layout with its dedicated footer.

### ShopLayout

Contains pages related to the shopping experience such as:

- Shop
- Product Details
- Search
- Cart
- About

This prevents repeating common layout code across pages.

---

## Redux Toolkit

Redux Toolkit is used for centralized state management.

The project currently contains two slices.

### Cart Slice

The Cart Slice manages all shopping cart operations.

Responsibilities include:

- Adding products
- Removing products
- Managing cart state globally
- Maintaining cart count
- Calculating total values

Instead of relying only on the product ID, every item added to the cart receives a unique `cartId` generated using `crypto.randomUUID()`. This allows users to add the same product multiple times while still removing each instance independently.

---

### Theme Slice

The Theme Slice manages the application's appearance.

Responsibilities include:

- Switching between Light and Dark mode
- Persisting theme preference using Local Storage
- Synchronizing the selected theme with the HTML root element

This ensures the selected theme remains active even after refreshing the browser.

---

# Custom Hooks

Custom hooks are used to separate reusable logic from UI components.

### useCart

Provides simplified access to cart operations such as:

- Reading cart items
- Adding products
- Removing products

This avoids repeatedly writing Redux logic inside components.

---

### useFetch

A reusable data fetching hook built with Axios.

Responsibilities include:

- API requests
- Loading state
- Error handling
- Returning fetched data

This hook is used throughout the application wherever API data is required.

---

### useTheme

Encapsulates all theme-related Redux logic.

Responsibilities include:

- Reading current theme
- Toggling Light and Dark mode

This keeps theme management reusable across the application.

---

### useTitle

A custom hook responsible for dynamically updating the browser tab title.

Instead of manually setting `document.title` inside every page component, each page simply calls the hook with its desired title. This keeps the code cleaner and centralizes title management.

---

# Routing

React Router is used for client-side navigation.

The application includes routes for:

- Home
- Shop
- Product Details
- Search Results
- Cart
- About

Nested layouts are used to avoid duplication and keep routing organized.

---

# Project Structure

```text
src/
│
├── assets/
│
├── Components/
│   ├── CartCard.jsx
│   ├── Footer.jsx
│   ├── Header.jsx
│   ├── ProductCard.jsx
│   └── index.js
│
├── features/
│   ├── CartSlice.js
│   └── ThemeSlice.js
│
├── hooks/
│   ├── useCart.js
│   ├── useFetch.js
│   ├── useTheme.js
│   └── useTitle.js
│
├── layout/
│   ├── RootLayout.jsx
│   └── ShopLayout.jsx
│
├── Pages/
│   ├── Home.jsx
│   ├── Shop.jsx
│   ├── ProductDetails.jsx
│   ├── Search.jsx
│   ├── Cart.jsx
│   ├── About.jsx
│   └── index.js
│
├── routes/
│   └── AllRoutes.jsx
│
├── Store/
│   └── store.js
│
├── App.jsx
├── main.jsx
└── index.css
```

---

# API

Product data is fetched from the DummyJSON API.

The application uses endpoints for:

- Product listing
- Product details
- Product search

Axios is used to handle all HTTP requests.

---

# State Management Flow

```
User Action
      │
      ▼
Dispatch Action
      │
      ▼
Redux Slice
      │
      ▼
Global Store
      │
      ▼
React Components Re-render
```

This approach keeps the application predictable and makes state updates easier to manage.

---

# Responsive Design

The application is fully responsive and optimized for:

- Mobile devices
- Tablets
- Laptops
- Desktop screens

Tailwind CSS responsive utilities are used throughout the project to adapt layouts across different screen sizes.

---

# Future Improvements

Some features that can be added in future versions include:

- User authentication
- Wishlist functionality
- Product categories and filters
- Pagination or infinite scrolling
- Checkout page
- Order history
- User profile
- Payment gateway integration
- Product reviews and ratings
- Backend integration
