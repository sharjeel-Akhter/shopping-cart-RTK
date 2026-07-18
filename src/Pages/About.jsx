import { Link } from "react-router";
import { useTitle } from "../hooks/useTitle";

function About() {
  useTitle('About | ShoppingEase')
  return (
<section className="bg-white py-20">
      <div className="mx-auto max-w-7xl px-6 grid items-center gap-14 md:grid-cols-2">

        {/* Left */}
        <div>
          <span className="rounded-full bg-blue-100 px-4 py-1 text-sm font-semibold text-blue-600">
            About Shopping Ease
          </span>

          <h2 className="mt-6 text-4xl font-bold text-gray-900">
            Making Online Shopping Simple, Fast & Reliable
          </h2>

          <p className="mt-6 text-lg leading-8 text-gray-600">
            At <span className="font-semibold text-blue-600">Shopping Ease</span>,
            we believe everyone deserves a smooth shopping experience. From
            trending fashion and electronics to everyday essentials, we bring
            quality products together in one convenient place.
          </p>

          <p className="mt-4 text-lg leading-8 text-gray-600">
            Our goal is to help customers discover great products, compare
            prices easily, and shop with confidence through a clean, intuitive
            experience.
          </p>

          <Link
            to="/shop"
            className="mt-8 inline-block rounded-lg bg-blue-600 px-6 py-3 font-semibold text-white transition hover:bg-blue-700"
          >
            Explore Products
          </Link>
        </div>

        {/* Right */}
        <div className="grid gap-6 sm:grid-cols-2">
          <div className="rounded-xl bg-slate-50 p-6 shadow">
            <div className="text-4xl">🛍️</div>
            <h3 className="mt-4 text-xl font-semibold">Wide Selection</h3>
            <p className="mt-2 text-gray-600">
              Browse products across multiple categories, all in one place.
            </p>
          </div>

          <div className="rounded-xl bg-slate-50 p-6 shadow">
            <div className="text-4xl">💳</div>
            <h3 className="mt-4 text-xl font-semibold">Secure Shopping</h3>
            <p className="mt-2 text-gray-600">
              Shop confidently with a streamlined and user-friendly experience.
            </p>
          </div>

          <div className="rounded-xl bg-slate-50 p-6 shadow">
            <div className="text-4xl">🚚</div>
            <h3 className="mt-4 text-xl font-semibold">Fast Delivery</h3>
            <p className="mt-2 text-gray-600">
              Get your favorite products delivered quickly and reliably.
            </p>
          </div>

          <div className="rounded-xl bg-slate-50 p-6 shadow">
            <div className="text-4xl">⭐</div>
            <h3 className="mt-4 text-xl font-semibold">Quality First</h3>
            <p className="mt-2 text-gray-600">
              We focus on offering products that customers can trust and enjoy.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}

export default About;