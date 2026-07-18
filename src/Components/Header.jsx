import { Link, NavLink } from "react-router";
import { RiShoppingCartLine } from "react-icons/ri";
import { CgProfile } from "react-icons/cg";
import { FaShoppingBag } from "react-icons/fa";
import { FiSearch } from "react-icons/fi";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router";

function Header() {
  const cartItems = useSelector((state) => state.cart.cartItems);
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    let queryTerm = e.target.search.value;
    console.log(queryTerm);
    e.target.reset();
    return navigate(`/search?q=${queryTerm}`);
  };
  return (
    <header className="sticky top-0 z-50 border-b border-gray-200 bg-white/80 backdrop-blur-lg shadow-sm">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">
        <Link
          to="/"
          className="flex items-center gap-3"
        >
          <div className="flex h-11 w-11 items-center justify-center rounded-full bg-blue-600 text-white shadow-lg">
            <FaShoppingBag className="text-xl" />
          </div>

          <div>
            <h1 className="text-2xl font-bold text-gray-900">
              ShoppingEase
            </h1>
            <p className="text-xs text-gray-500">
              Shop Smarter
            </p>
          </div>
        </Link>
        <nav>
          <ul className="flex items-center gap-10 font-medium">

            <li>
              <NavLink
                to="/"
                className={({ isActive }) =>
                  `transition duration-200 hover:text-blue-600 ${isActive ? "text-blue-600 font-semibold" : "text-gray-700" }`}> Home
              </NavLink>
            </li>

            <li>
              <NavLink
                to="/shop"
                className={({ isActive }) =>
                  `transition duration-200 hover:text-blue-600 ${
                    isActive
                      ? "text-blue-600 font-semibold"
                      : "text-gray-700"
                  }`
                }
              >
                Shop
              </NavLink>
            </li>

            <li>
              <NavLink
                to="/about"
                className={({ isActive }) =>
                  `transition duration-200 hover:text-blue-600 ${
                    isActive
                      ? "text-blue-600 font-semibold"
                      : "text-gray-700"
                  }`
                }
              >
                About
              </NavLink>
            </li>

            <li>
              <NavLink
                to="/cart"
                className={({ isActive }) =>
                  `transition duration-200 hover:text-blue-600 ${
                    isActive
                      ? "text-blue-600 font-semibold"
                      : "text-gray-700"
                  }`
                }
              >
                Cart
              </NavLink>
            </li>

          </ul>
        </nav>

        <div className="flex items-center gap-6">

          <form onSubmit={handleSubmit} className="hidden md:flex items-center bg-gray-100 rounded-full px-4 py-2 w-72 focus-within:ring-2 focus-within:ring-blue-500 transition">
            <FiSearch className="text-gray-500 text-lg" />

            <input
              type="search"
              name="search"
              placeholder="Search products..."
              autoComplete="off"
              className="ml-2 w-full bg-transparent outline-none text-sm placeholder:text-gray-500"
            />
          </form>

    
          <Link
            to="/cart"
            className="relative text-3xl text-gray-700 hover:text-blue-600 transition"
          >
            <RiShoppingCartLine />

            {cartItems.length > 0 && (
              <span className="absolute -right-2 -top-2 flex h-5 w-5 items-center justify-center rounded-full bg-red-500 text-xs font-bold text-white">
                {cartItems.length}
              </span>
            )}
          </Link>
        </div>
      </div>
    </header>
  );
}

export default Header;