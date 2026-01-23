import {FaShoppingCart} from 'react-icons/fa';
import { useContext } from 'react';
import { CartContext } from '../context/CartContext';
import { useState } from 'react';

const Header = () => {
    const {cart, removeFromCart, clearCart} = useContext(CartContext)
    const [showDropdown, setShowDropdown] = useState(false);

    const itemCount = cart.reduce((acc, item) => {
       return acc + item.qty
    }, 0)
    const total = cart.reduce((acc, item) => {
        return acc + item.price * item.qty
    }, 0).toFixed(2);

    return ( 
        <header className='header'>
            <h1 className='title-header'>
                ShopMate
            </h1>

            <div className='relative'>
            <button onClick={ () => setShowDropdown(!showDropdown)} className='btn-show-cart'>
                <FaShoppingCart className='cart-icon'/>
                {itemCount > 0 && (
                    <span className='item-count'>
                        {itemCount}
                    </span>
                )}
            </button>

            {showDropdown && (
                <div className='cart-dropdown'>
                    <div className='cart-dropdown-content'>
                        <h2 className='cart-dropdown-title'>Cart Items</h2>
                        {cart.length === 0 ? (
                            <p className='cart-empty'>Your cart is empty</p>
                        ) : (
                        <>
                            <ul className='cart-ul'>
                                {cart.map((item) => (
                                    <li key={item.id} className='cart-li'>
                                        <div>
                                            <p className='item-title-cart'>
                                                {item.name}
                                            </p>

                                            <p className='item-cart'>
                                                {item.qty} x ${item.price}
                                            </p>
                                        </div>

                                        <button onClick={() => removeFromCart(item.id)} className='remove-btn-cart'>
                                            Remove
                                        </button>

                                    </li>
                                ))}
                            </ul>

                            <div className='cart-total'>
                                <span>Total:</span>
                                <span> ${total}</span>
                            </div>

                            <button onClick={ clearCart } className='clear-cart'>
                                Clear Cart
                            </button>
                            </>
                        )}
                    </div>
                </div>
            )}
                
            </div>
        </header>
     );
}
 
export default Header;