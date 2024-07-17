// Cart.js
import React, { useState } from "react";
import './index.css';

const Cart = ({ cart, count, removefromCart }) => {
    const [cartShow, setcartShow] = useState(true);
    function showCart() {
        setcartShow(!cartShow);
    }

    return (
        <div className="cart">
            <span className="flex justify-center align-center cursor-pointer" onClick={showCart}>Cart {count}</span>
            <div className={`cart_items ${cartShow ? 'hide' : 'show'}`}>
                {cart && cart.length > 0 ? (cart?.map((item, index) => (
                    <div className="itemBox py-2" key={index}>
                        <div>
                            <img className="cartImage" src={item.thumbnail} alt="cart-item" />
                        </div>
                        <div>{item?.title.substr(0, 15) + "..."}</div>
                        <div>Quantity: {item.quantity}</div>
                        <span className="cursor-pointer" onClick={() => removefromCart(index)}>Remove</span>
                    </div>
                ))
                ) : (
                    <div className="text-center">Empty Cart</div>

                )}
            </div>
        </div>
    );
};

export default Cart;
