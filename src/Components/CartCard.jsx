import { useCart } from "../hooks/useCart";


function CartCard({product}) {
    
   const {removeFromCart} = useCart()
    
    return (
  <div className="min-w-3/4 flex items-center gap-4 p-4 border border-gray-300 rounded-lg shadow-md mb-4 dark:bg-gray-950 dark:text-amber-50 dark:shadow-2xl">
      <img src={product.thumbnail} alt={product.name} className="w-20 h-20 object-cover rounded" />

      <div className="flex-1">
        <p className="text-lg font-medium">{product.title}</p>
      </div>

      <div className="text-right">
        <p className="text-xl font-semibold text-gray-700 dark:text-amber-50">${product.price}</p>
        <button onClick={()=>removeFromCart(product.cartId)} className="px-4 py-2 rounded-lg mt-2 bg-blue-600 text-white hover:bg-blue-500 duration-200 cursor-pointer">Remove From Cart</button>
      </div>
    </div>
    );
}

export default CartCard;