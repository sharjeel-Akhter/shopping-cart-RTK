import { Link } from 'react-router'
import { useCart } from "../hooks/useCart";

function ProductCard({product}) {
  const {addToCart} = useCart()

    
    return (
    <div className="max-w-sm rounded-lg border border-gray-300 bg-white shadow-md overflow-hidden dark:bg-gray-950 text-amber-50 dark:shadow-white/10 dark:shadow-2xl">
    <Link to={`/products/${product.id}`}> 
    {product.image?<img src={product.images} alt={product.title} className="w-full h-95 object-cover border border-gray-700 rounded p-1.5"/> :<img src={product.thumbnail} alt={product.title} className="w-full h-95 object-cover"/> } 
    </Link>   
      <div className="p-5 itmes-center">
        <p className="rounded-full bg-blue-100 px-4 py-1 text-sm font-semibold text-blue-600 min-w-10 text-center m-auto">{product.category}</p>
        <h5 className=" font-bold text-gray-900 text-2xl text-center mt-5 dark:text-amber-50">
          {product.title}
        </h5>
        <div className=" flex justify-between mt-5 flex-col text-gray-600 dark:text-gray-400">
          
            <p className="text-xl font-semibold text-gray-900 text-center mb-1 dark:text-amber-50">Price: ${product.price}</p>
            <button onClick={()=>addToCart(product)} className="text-lg font-semibold bg-green-600 py-1 px-1 rounded-lg text-white text-center mt-1 cursor-pointer">Add to Cart</button>
           
        </div>
      </div>
    </div>
    );
}

export default ProductCard;