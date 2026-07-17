import { NavLink, Link } from "react-router";
import { RiShoppingCartLine} from "react-icons/ri";
import { CgProfile } from "react-icons/cg";
import { useSelector } from "react-redux";
function Header() {
    const cartItems = useSelector((state)=>state.cart.cartItems);
    return (
        
            <header className='sticky top-0 z-50 w-full h-16 bg-transparent backdrop-blur-xl text-gray-800 border border-gray-500 flex items-center justify-between px-4'>
                <div>
                    <h1 className='text-2xl ml-1'>Shopping Cart</h1>
                </div>
                <nav>
                    <ul className='flex gap-20'>
                        <li>
                            <NavLink to='/' className={({ isActive }) => isActive ? "text-blue-500 text-lg px-1 py-1 hover:bg-gray-300 duration-200 rounded" : "text-lg rounded hover:bg-gray-300 duration-200 px-1 py-1"}>Home</NavLink>
                        </li>
                        <li>
                            <NavLink to='/cart' className={({ isActive }) => isActive ? "text-blue-500 text-lg px-1 py-1 hover:bg-gray-300 duration-200 rounded" :  "text-lg rounded hover:bg-gray-300 duration-200 px-1 py-1"}>Cart</NavLink>
                        </li>
                    </ul>
                </nav>
                <div>
                    <Link to="/cart"  className='flex items-center gap-8 text-2xl mr-6'>
                    <RiShoppingCartLine />
                     <span>Count {cartItems.length}</span> 
                     <CgProfile />
                    </Link>
                </div>
            </header>
       
    );
}

export default Header;