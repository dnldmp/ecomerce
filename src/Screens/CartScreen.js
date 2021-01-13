import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart } from '../actions/cartAction';

function CartScreen(props){
    
    const cart = useSelector(state => state.cart);
    const { cartItems } = cart
    const productId = props.match.params.id;
    const qty = props.location.search? Number(props.location.search.split("=")[1]):1
    const dispatch = useDispatch()

    useEffect(() => {
        if(productId){
            dispatch(addToCart(productId, qty))
        }
    }, [])
    return <div className="cart">
        <div className="cart-list">
            <ul className="cart-list-container">
                <li>
                    <h3>Shopping Cart</h3>
                    <div>Price</div>
                </li>
                {
                    cartItems.length === 0 ? 
                        <div>Cart is empty</div>
                    :
                    cartItems.map(item => 
                        <li>
                            <div className="cart-image">
                                <img src={item.image} alt="product" />
                            </div>
                            <div className="cart-name">
                                {item.name}
                            </div>
                            <div>
                                Qty <select>
                                   <option>1</option> 
                                   <option>2</option>
                                   <option>3</option>
                                </select>
                            </div>
                            <div className="cart-price">
                                {item.price}
                            </div>
                        </li>    
                    )
                }
            </ul>
        </div>
        <div className="cart-action">
                <h3>
                    Subtotal ( {cartItems.reduce((acumulative, cartItem) => acumulative + cartItem.qty, 0)} items)
                    : $
                    {cartItems.reduce((a,c) => a + c.price * c.qty, 0)}
                </h3>
                <button className="button primary" disabled={cartItems.length === 0}>
                    Proceed to Checkout
                </button>
        </div>
    </div>
}

export default CartScreen;