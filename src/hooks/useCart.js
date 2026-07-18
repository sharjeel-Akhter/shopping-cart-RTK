import { useDispatch, useSelector } from "react-redux";
import { addToCart, removeFromCart } from "../features/CartSlice";

export const useCart = ()=>{
    const cartItems = useSelector((state)=>state.cart.cartItems)
    const dispatch = useDispatch()
    return({
        cartItems,
        addToCart: (product)=>dispatch(addToCart(product)),
        removeFromCart: (cartId)=>dispatch(removeFromCart(cartId))
    })
}


