import { Link, NavLink, UNSAFE_createClientRoutesWithHMRRevalidationOptOut, useNavigate } from "react-router";
import { RiShoppingCartLine } from "react-icons/ri";
import { CgProfile } from "react-icons/cg";
import { FaShoppingBag } from "react-icons/fa";
import { FiSearch } from "react-icons/fi";
import { useCart } from "../hooks/useCart";
import { useState } from "react";
import { HiOutlineMenu, HiOutlineX } from "react-icons/hi";
import { CiDark, CiLight } from "react-icons/ci";
import {useTheme} from '../hooks/useTheme'


function Header() {
  const {cartItems} = useCart();
  const [open, setOpen] = useState(false);
  const {theme, toggleTheme} = useTheme()

  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    let queryTerm = e.target.search.value;
    console.log(queryTerm);
    e.target.reset();
    return navigate(`/search?q=${queryTerm}`);
  };
  return (
<header className="sticky top-0 z-50 border-b border-gray-200/60 bg-white/80 backdrop-blur-2xl shadow-lg dark:border-slate-700/60 dark:bg-slate-900/80">

  <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 md:h-20 md:px-6">
    <Link to="/" className="flex items-center gap-3">
      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-600 text-white shadow-lg transition-transform duration-300 hover:scale-105 md:h-11 md:w-11">
        <FaShoppingBag className="text-lg md:text-xl" />
      </div>

      <div>
        <h1 className="text-xl font-bold text-gray-900 transition-colors duration-300 dark:text-white md:text-2xl">
          ShoppingEase
        </h1>

        <p className="hidden text-xs text-gray-500 transition-colors duration-300 dark:text-gray-400 md:block">
          Shop Smarter
        </p>
      </div>
    </Link>

    <nav className="hidden md:block">
      <ul className="flex items-center gap-8 font-medium lg:gap-16">

        <li>
          <NavLink to="/" className={({ isActive }) =>
              isActive
                ? "font-semibold text-blue-600 dark:text-blue-400"
                : "text-gray-700 transition-colors duration-300 hover:text-blue-600 dark:text-gray-200 dark:hover:text-blue-400" }>Home
          </NavLink>
        </li>

        <li>
          <NavLink to="/shop" className={({ isActive }) =>
              isActive
                ? "font-semibold text-blue-600 dark:text-blue-400"
                : "text-gray-700 transition-colors duration-300 hover:text-blue-600 dark:text-gray-200 dark:hover:text-blue-400"}>Shop</NavLink>
        </li>

        <li>
          <NavLink to="/about" className={({ isActive }) =>
              isActive
                ? "font-semibold text-blue-600 dark:text-blue-400"
                : "text-gray-700 transition-colors duration-300 hover:text-blue-600 dark:text-gray-200 dark:hover:text-blue-400"}>About</NavLink>
        </li>

        <li>
          <NavLink to="/cart" className={({ isActive }) =>
              isActive
                ? "font-semibold text-blue-600 dark:text-blue-400"
                : "text-gray-700 transition-colors duration-300 hover:text-blue-600 dark:text-gray-200 dark:hover:text-blue-400"}>Cart</NavLink>
        </li>

      </ul>
    </nav>

    <div className="flex items-center gap-3 md:gap-6">
      <form
        onSubmit={handleSubmit}
        className="hidden w-72 items-center rounded-full bg-gray-100 px-4 py-2 transition-colors focus-within:ring-2 focus-within:ring-blue-500 dark:bg-slate-800 lg:flex">
        <FiSearch className="text-gray-500 dark:text-gray-400" />

        <input type="search" name="search" autoComplete="off" placeholder="Search products..." className="ml-2 w-full bg-transparent text-sm text-gray-900 outline-none placeholder:text-gray-500 dark:text-white dark:placeholder:text-gray-400"/>
      </form>
      <button
        onClick={()=>toggleTheme()}
        className="cursor-pointer rounded-lg border border-gray-300 p-2 text-2xl text-gray-700 transition-all duration-300 hover:bg-gray-100 dark:border-slate-700 dark:text-yellow-300 dark:hover:bg-slate-800 md:text-3xl">
        {theme === "light" ? <CiDark /> : <CiLight />}
      </button>

      <Link to="/cart"
        className="relative text-2xl text-gray-700 transition-all duration-300 hover:scale-110 hover:text-blue-600 dark:text-white dark:hover:text-blue-400 md:text-3xl"
      >
        <RiShoppingCartLine />

        {cartItems.length > 0 && (
          <span className="absolute -right-2 -top-2 flex h-5 w-5 items-center justify-center rounded-full bg-red-500 text-xs font-bold text-white">
            {cartItems.length}
          </span>
        )}
      </Link>

      <button
        onClick={() => setOpen(!open)}
        className="text-3xl text-gray-700 transition-colors duration-300 dark:text-white md:hidden">
        {open ? <HiOutlineX /> : <HiOutlineMenu />}
      </button>

    </div>

  </div>
  {open && (
    <nav className="border-t border-gray-200 bg-white shadow-md transition-colors duration-300 dark:border-slate-700 dark:bg-slate-900 md:hidden">

      <ul className="flex flex-col gap-5 p-5 font-medium">

        <NavLink to="/" onClick={() => setOpen(false)} className={({ isActive }) =>
            isActive
              ? "font-semibold text-blue-600 dark:text-blue-400"
              : "text-gray-700 transition-colors hover:text-blue-600 dark:text-gray-200 dark:hover:text-blue-400"}>Home</NavLink>

        <NavLink to="/shop" onClick={() => setOpen(false)} className={({ isActive }) =>
            isActive
              ? "font-semibold text-blue-600 dark:text-blue-400"
              : "text-gray-700 transition-colors hover:text-blue-600 dark:text-gray-200 dark:hover:text-blue-400" }>Shop</NavLink>

        <NavLink to="/about" onClick={() => setOpen(false)} className={({ isActive }) =>
            isActive
              ? "font-semibold text-blue-600 dark:text-blue-400"
              : "text-gray-700 transition-colors hover:text-blue-600 dark:text-gray-200 dark:hover:text-blue-400"
          }>About</NavLink>

        <NavLink to="/cart" onClick={() => setOpen(false)} className={({ isActive }) =>
            isActive
              ? "font-semibold text-blue-600 dark:text-blue-400"
              : "text-gray-700 transition-colors hover:text-blue-600 dark:text-gray-200 dark:hover:text-blue-400"}>Cart</NavLink>

        <form onSubmit={handleSubmit}>
          <div className="mt-2 flex items-center rounded-full bg-gray-100 px-4 py-2 transition-colors dark:bg-slate-800">

            <FiSearch className="text-gray-500 dark:text-gray-400" />

            <input type="search" name="search" autoComplete="off" placeholder="Search products..." className="ml-2 w-full bg-transparent text-gray-900 outline-none placeholder:text-gray-500 dark:text-white dark:placeholder:text-gray-400"/>
          </div>
        </form>
      </ul>
    </nav>
  )}

</header>
  );
}

export default Header;