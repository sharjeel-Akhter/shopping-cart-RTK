import { Link } from "react-router";
import { HiArrowLeft } from "react-icons/hi";
import { useSelector } from "react-redux";
import CartCard from "../Components/CartCard";
import { useTitle } from "../hooks/useTitle";

function Cart() {
  const cartItems = useSelector((state) => state.cart.cartItems);
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
          className="absolute bottom-8 left-8 flex items-center gap-2 rounded-lg bg-blue-600 px-5 py-3 text-white font-semibold hover:bg-blue-700 transition"
        >
          <HiArrowLeft />
          Continue Shopping
        </Link>
      </section>
    );
  }

  return (
    <section className="min-h-screen bg-slate-50 py-10 relative">
      <div className="mx-auto max-w-7xl px-6">

     
        <div className="mb-8 rounded-xl bg-white p-6 shadow-md ">
          <h2 className="text-2xl font-bold text-gray-800">
            Shopping Cart
          </h2>

          <div className="mt-5 grid grid-cols-2 gap-6 md:grid-cols-4">

            <div className="rounded-lg bg-blue-50 p-4">
              <p className="text-gray-500">Products</p>
              <h3 className="text-3xl font-bold text-blue-600">
                {cartItems.length}
              </h3>
            </div>

            <div className="rounded-lg bg-green-50 p-4">
              <p className="text-gray-500">Total Price</p>
              <h3 className="text-3xl font-bold text-green-600">
                ${totalPrice.toFixed(2)}
              </h3>
            </div>
          </div>
        </div>

        <div className="space-y-5">
          {cartItems.map((item) => (
            <CartCard key={item.cartId} product={item} />
          ))}
        </div>
      </div>

        <Link
          to="/shop"
          className="absolute bottom-8 left-8 flex items-center gap-2 rounded-lg bg-blue-600 px-5 py-3 text-white font-semibold hover:bg-blue-700 transition cursor-pointer"
        >
          <HiArrowLeft />
          Continue Shopping
        </Link>
    </section>
  );
}

export default Cart;