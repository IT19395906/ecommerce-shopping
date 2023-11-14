import React from "react";
import './shop.css';
import { ShopContext } from "../../context/shopContext";
import { useContext } from "react";

export const Product = (props) => {
    const { id, productName, price, productImage } = props.data;
    const {addToCart, cartItems} = useContext(ShopContext);
    
    const cartItemAmount = cartItems[id];
    
    return (
        <div className="product">
            <img alt="" src={productImage} />
            <div className="description">
                <b>
                    <p>
                        {productName}
                    </p>
                </b>
                <p>
                    ${price}  
                </p>
            </div>
            <button className="addToCartBtn" onClick={() => addToCart(id)}>
                Add To Cart {cartItemAmount > 0 && <>({cartItemAmount})</>} </button>
        </div>
    );
}