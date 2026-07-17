import React from 'react';

import { Link } from "react-router";

function Footer() {
  return (
    <footer className="bottom-0 bg-gray-900 text-gray-300">
      <div className="mx-auto max-w-7xl px-6 py-12">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div>
            <h2 className="text-2xl font-bold text-white">ShopEase</h2>
            <p className="mt-4 text-sm leading-6">
              Your one-stop destination for quality products at affordable
              prices. Shop smarter with fast delivery and secure checkout.
            </p>
          </div>

          {/* Shop */}
          <div>
            <h3 className="mb-4 text-lg font-semibold text-white">Shop</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="transition hover:text-white">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/" className="transition hover:text-white">
                  Products
                </Link>
              </li>
              <li>
                <Link to="/" className="transition hover:text-white">
                  Categories
                </Link>
              </li>
              <li>
                <Link to="/cart" className="transition hover:text-white">
                  Cart
                </Link>
              </li>
            </ul>
          </div>

          {/* Customer Care */}
          <div>
            <h3 className="mb-4 text-lg font-semibold text-white">
              Customer Care
            </h3>
            <ul className="space-y-2">
              <li>
                <Link to="/contact" className="transition hover:text-white">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link to="/shipping" className="transition hover:text-white">
                  Shipping
                </Link>
              </li>
              <li>
                <Link to="/returns" className="transition hover:text-white">
                  Returns
                </Link>
              </li>
              <li>
                <Link to="/faq" className="transition hover:text-white">
                  FAQs
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="mb-4 text-lg font-semibold text-white">
              Get in Touch
            </h3>
            <p className="mb-2">📍 New York, USA</p>
            <p className="mb-2">📧 support@shopease.com</p>
            <p>📞 +1 (123) 456-7890</p>
          </div>
        </div>

        <div className="mt-10 border-t border-gray-700 pt-6 text-center text-sm text-gray-400">
          © {new Date().getFullYear()} ShopEase. All rights reserved.
        </div>
      </div>
    </footer>
  );
}

export default Footer;

