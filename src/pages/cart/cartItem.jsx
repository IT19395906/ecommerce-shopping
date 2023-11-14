import React from "react";
import './cart.css';
import { useContext } from "react";
import { ShopContext } from "../../context/shopContext";

export const CartItem = (props) => {
    const { id, productName, price, productImage } = props.data;
    const { cartItems, addToCart, removeFromCart, updateCartItemCount } = useContext(ShopContext);
    return (
        <div className="cartItem">
            <img alt="" src={productImage} />
            <div className="description">
                <b><p>{productName}</p></b>
                <p>${price}</p>
                <div className="countHandler">
                    <button onClick={() => addToCart(id)}>+</button>
                    <input value={cartItems[id]} onChange={(e) => updateCartItemCount(Number(e.target.value), id)}/>
                    <button onClick={() => removeFromCart(id)}>-</button>
                </div>
            </div>
        </div>
    );
}