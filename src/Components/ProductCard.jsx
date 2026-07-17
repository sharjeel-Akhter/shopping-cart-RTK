import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../features/CartSlice";

function ProductCard({product}) {
  const dispatch = useDispatch();
  const AddTC = useSelector((state)=>state.cart.cartItems)

    
    return (
    <div className="max-w-sm rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 shadow-md overflow-hidden">
            
    {product.image?<img src={product.images} alt="Movie" className="w-full h-95 object-cover"/> :<img src={product.thumbnail} alt="Movie" className="w-full h-95 object-cover"/> } 

      <div className="p-5 itmes-center">
        <p className="text-lg font-semibold bg-transparent border m-auto rounded-lg text-gray-600 text-center w-1/2">{product.category}</p>
        <h5 className="mb-3 text-xl font-bold text-gray-900 dark:text-white text-ellipsis overflow-hidden whitespace-nowrap">
          {product.title}
        </h5>
        <div className=" flex justify-between mt-5 flex-col text-gray-600 dark:text-gray-400">
          
            <p className="text-xl font-semibold text-white">Price: ${product.price}</p>
            <button onClick={()=>dispatch(addToCart(product))} className="text-lg font-semibold bg-green-600 py-1 px-1 rounded-lg text-white text-center mt-5 cursor-pointer">Add to Cart</button>
           
        </div>
      </div>
    </div>
    );
}

export default ProductCard;