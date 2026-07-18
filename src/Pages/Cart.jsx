import { Link } from "react-router";
import { HiArrowLeft } from "react-icons/hi";
import CartCard from "../Components/CartCard";
import { useTitle } from "../hooks/useTitle";
import { useCart } from "../hooks/useCart";

function Cart() {
  const {cartItems} = useCart()
  useTitle('Cart | ShoppingEase')
  const totalPrice = cartItems.reduce(
    (sum, item) => sum + item.price,
    0
  );

  if (cartItems.length === 0) {
    return (
      <section className="min-h-screen bg-slate-50 flex flex-col items-center justify-center relative">
        <h2 className="text-4xl font-bold text-gray-800">
          🛒 Your Cart is Empty
        </h2>

        <p className="mt-4 text-lg text-gray-500">
          Looks like you haven't added anything yet.
        </p>

        <Link
          to="/shop"
          className="mt-5 flex items-center gap-2 rounded-lg bg-blue-600 px-5 py-3 text-white font-semibold hover:bg-blue-700 transition"
        >
          <HiArrowLeft />
          Continue Shopping
        </Link>
      </section>
    );
  }

  return (
    <section className="min-h-screen bg-slate-100 py-10">

      <div className="mx-auto max-w-7xl px-5">
        <Link
          to="/shop"
          className="mb-8 inline-flex items-center gap-2 text-blue-600 font-semibold hover:gap-3 transition-all"
        >
          <HiArrowLeft />
          Continue Shopping
        </Link>
        <div className="grid gap-8 lg:grid-cols-[2fr_1fr]">
          <div>

            <div className="mb-6 rounded-2xl bg-white p-6 shadow">

              <h1 className="text-3xl font-bold">
                Shopping Cart
              </h1>

              <p className="mt-2 text-gray-500">
                {cartItems.length} Items in your cart
              </p>

            </div>

            <div className="space-y-5">

              {cartItems.map((item) => (
                <CartCard
                  key={item.cartId}
                  product={item}
                />
              ))}

            </div>

          </div>
          <aside className="h-fit rounded-2xl bg-white p-7 shadow-lg lg:sticky lg:top-24">

            <h2 className="text-2xl font-bold">
              Order Summary
            </h2>
            <div className="my-8 border"></div>
            <div className="space-y-5">

              <div className="flex justify-between">
                <span className="text-gray-600">
                  Products
                </span>

                <span>
                  {cartItems.length}
                </span>
              </div>

              <div className="flex justify-between">
                <span className="text-gray-600">
                  Subtotal
                </span>

                <span>
                  ${totalPrice.toFixed(2)}
                </span>
              </div>

              <div className="flex justify-between">

                <span className="text-gray-600">
                  Shipping
                </span>

                <span className="font-semibold text-green-600">
                  FREE
                </span>

              </div>

              <div className="flex justify-between">

                <span className="text-gray-600">
                  Tax
                </span>

                <span>
                  $0.00
                </span>

              </div>

            </div>

            <div className="my-8 border"></div>

            <div className="flex justify-between text-2xl font-bold">

              <span>Total</span>

              <span className="text-blue-600">
                ${totalPrice.toFixed(2)}
              </span>

            </div>
            <div className="mt-8 rounded-xl bg-green-50 p-5">

              <h3 className="font-semibold text-green-700">
                🎉 Free Shipping
              </h3>

              <p className="mt-2 text-sm text-green-600">
                Your order qualifies for free delivery.
              </p>

            </div>
          </aside>

        </div>

      </div>

    </section>
  );
}

export default Cart;