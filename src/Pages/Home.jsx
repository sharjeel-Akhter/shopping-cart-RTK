import { Link } from "react-router";
import hero from '../assets/images/hero.webp';
import {useTitle} from '../hooks/useTitle'

function Home() {
  useTitle('Home | ShoppingEase')
  return (
    <section className="min-h-[calc(100vh-80px)] bg-linear-to-r from-slate-50 to-blue-50">
      <div className="mx-auto flex max-w-7xl flex-col-reverse items-center justify-between gap-12 px-6 py-16 md:flex-row">
        
        <div className="max-w-xl text-center md:text-left">
          <h1 className="mt-6 text-5xl font-extrabold leading-tight text-gray-900 lg:text-6xl">
            Everything You Need,
            <span className="block text-blue-600">
              Delivered to Your Door.
            </span>
          </h1>

          <p className="mt-6 text-lg leading-8 text-gray-600">
            Explore hundreds of premium products with unbeatable prices,
            secure payments, and fast delivery. Shopping has never been
            this easy.
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-4 md:justify-start">
            <Link
              to="/shop"
              className="rounded-lg bg-blue-600 px-6 py-3 text-lg font-semibold text-white transition hover:bg-blue-700"
            >
              Shop Now
            </Link>

            <Link
              to="/cart"
              className="rounded-lg border border-gray-300 px-6 py-3 text-lg font-semibold text-gray-700 transition hover:bg-gray-100"
            >
              View Cart
            </Link>
          </div>

          <div className="mt-10 flex justify-center gap-10 md:justify-start">
            <div>
              <h3 className="text-2xl font-bold text-gray-900">500+</h3>
              <p className="text-gray-500">Products</p>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-gray-900">10K+</h3>
              <p className="text-gray-500">Happy Customers</p>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-gray-900">24/7</h3>
              <p className="text-gray-500">Support</p>
            </div>
          </div>
        </div>



        <div className="flex justify-center w-full md:w-auto">
          <img
            src={hero}
            alt="Shopping illustration"
            className="drop-shadow-2xl min-w-full md:w-125 lg:w-150 rounded-xl grayscale transition duration-500 hover:grayscale-0"
          />
        </div>

      </div>
    </section>
  );
}

export default Home;