import React from 'react';
import CartCard from '../Components/CartCard';
import { useSelector } from 'react-redux';

function Cart() {
    const cartItems = useSelector((state)=>state.cart.cartItems);
    let quantity = cartItems.reduce((sum, item)=>sum+item.price, 0)
    return (
        <div className='min-h-screen flex flex-col   items-center'>
            <p className='text-xl mt-5 mb-5'>Total Products: {cartItems.length}</p>
            <p className='text-xl mt-5 mb-5'>Total Price: ${Math.floor(quantity)}</p>
           {cartItems?.map((item)=>{
            return(
            <CartCard key={item.id} product={item}/>
            )
           })}
        </div>
    );
}

export default Cart;