import React from 'react';
import useCart from '../../hooks/useCart';
import useProducts from '../../hooks/useProducts';
import { removeFromDb } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import OrderReviewItem from '../OrderReviewItem/OrderReviewItem';
import {Link} from 'react-router-dom';
import './Orders.css';
const Orders = () => {
    const [products] = useProducts();
    const [cart,setCart] = useCart(products);
    const handleRemoveProduct = product =>{
        const rest = cart.filter(p => p.id !== product.id);
        setCart(rest);
        removeFromDb(product.id);
    }
    return (
     <div className="shop-container">
         <div className="review-items-container">
             {

            cart.map(product => <OrderReviewItem
            key={product.id}
            product = {product}
            handleRemoveProduct = {handleRemoveProduct}
            ></OrderReviewItem>)
             }
         </div>
         <div className="cart-container">
             <Cart cart={cart}>
                <Link to="/inventory">
                    <button className='review-button'>Proceed Checkout</button>
                </Link>
             </Cart>
         </div>
     </div>
    );
};

export default Orders;