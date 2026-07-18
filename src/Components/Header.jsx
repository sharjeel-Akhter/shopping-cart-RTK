import { Link, NavLink, UNSAFE_createClientRoutesWithHMRRevalidationOptOut, useNavigate } from "react-router";
import { RiShoppingCartLine } from "react-icons/ri";
import { CgProfile } from "react-icons/cg";
import { FaShoppingBag } from "react-icons/fa";
import { FiSearch } from "react-icons/fi";
import { useSelector } from "react-redux";
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
<header className="sticky top-0 z-50 border-b border-gray-200 bg-white/80 backdrop-blur-2xl shadow-sm">

  <div className="mx-auto flex h-16 md:h-20 max-w-7xl items-center justify-between px-4 md:px-6">

    <Link to="/" className="flex items-center gap-3">
      <div className="flex h-10 w-10 md:h-11 md:w-11 items-center justify-center rounded-full bg-blue-600 text-white shadow-lg">
        <FaShoppingBag className="text-lg md:text-xl" />
      </div>

      <div>
        <h1 className="text-xl md:text-2xl font-bold text-gray-900">
          ShoppingEase
        </h1>

        <p className="hidden md:block text-xs text-gray-500">
          Shop Smarter
        </p>
      </div>
    </Link>

    <nav className="hidden md:block">
      <ul className="flex items-center gap-8 lg:gap-16 font-medium">

        <li>
          <NavLink to="/" className={({ isActive }) =>
              isActive
                ? "text-blue-600 font-semibold"
                : "text-gray-700 hover:text-blue-600"
            }>Home</NavLink>
        </li>

        <li>
          <NavLink to="/shop" className={({ isActive }) =>
              isActive
                ? "text-blue-600 font-semibold"
                : "text-gray-700 hover:text-blue-600"
            }>Shop</NavLink>
        </li>

        <li>
          <NavLink to="/about"
            className={({ isActive }) =>
              isActive
                ? "text-blue-600 font-semibold"
                : "text-gray-700 hover:text-blue-600"
            }>About</NavLink>
        </li>

        <li>
          <NavLink to="/cart" className={({ isActive }) =>
              isActive
                ? "text-blue-600 font-semibold"
                : "text-gray-700 hover:text-blue-600"
            }>Cart</NavLink>
        </li>

      </ul>
    </nav>
   
    <div className="flex items-center gap-3 md:gap-6">
      <form
        onSubmit={handleSubmit}
        className="hidden lg:flex items-center bg-gray-100 rounded-full px-4 py-2 w-72 focus-within:ring-2 focus-within:ring-blue-500">
        <FiSearch className="text-gray-500" />

        <input type="search" name="search" autoComplete="off" placeholder="Search products..."
          className="ml-2 w-full bg-transparent outline-none text-sm"/>
      </form>
          
    <button onClick={()=>toggleTheme()}
     className="cursor-pointer text-2xl md:text-3xl rounded-lg px-1.5 py-1.5 hover:bg-gray-600/10 transition-colors duration-300 border border-gray-300">
      {theme==='light'? <CiDark/> : <CiLight/>}
    </button>
  
      <Link to="/cart" className="relative text-2xl md:text-3xl text-gray-700 hover:text-blue-600">
        <RiShoppingCartLine />
        {cartItems.length > 0 && (
          <span className="absolute -right-2 -top-2 flex h-5 w-5 items-center justify-center rounded-full bg-red-500 text-xs font-bold text-white">
            {cartItems.length}</span>)}
      </Link>

      <button
        onClick={() => setOpen(!open)}
        className="md:hidden text-3xl text-gray-700">
        {open ? <HiOutlineX /> : <HiOutlineMenu />}
      </button>

    </div>

  </div>
  {open && (
    <nav className="md:hidden border-t bg-white shadow-md">
      <ul className="flex flex-col p-5 gap-5 font-medium">

        <NavLink to="/" onClick={() => setOpen(false)}>
          Home
        </NavLink>

        <NavLink to="/shop" onClick={() => setOpen(false)}>
          Shop
        </NavLink>

        <NavLink to="/about" onClick={() => setOpen(false)}>
          About
        </NavLink>

        <NavLink to="/cart" onClick={() => setOpen(false)}>
          Cart
        </NavLink>

        <form onSubmit={handleSubmit}>
          <div className="flex items-center rounded-full bg-gray-100 px-4 py-2 mt-2">
            <FiSearch className="text-gray-500" />
            <input type="search" name="search" autoComplete="off" placeholder="Search products..." className="ml-2 w-full bg-transparent outline-none"/>
          </div>
        </form>

      </ul>
    </nav>
  )}

</header>
  );
}

export default Header;