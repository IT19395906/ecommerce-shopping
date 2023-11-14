import React from "react";
import { useState } from "react";
import { createContext } from "react";
import {PRODUCTS} from '../products';

export const ShopContext = createContext(null);
//access and modify state

//create a method to get array of empty object to represent intial state

const getDefaultCart = () => {
    let cart = {};
    for (let i = 1; i < PRODUCTS.length + 1; i++)
    {
        cart[i] = 0;
    }
    return cart;
}

export const ShopContextProvider = (props) => {

    const [cartItems, setCartItems] = useState(getDefaultCart);
    //state is a object with properties 

    const getTotalCartAmount = () => {
        let totalAmount = 0;
        for (const item in cartItems) {
            if (cartItems[item] > 0) {
                let itemInfo = PRODUCTS.find((product) => product.id === Number(item));
                totalAmount += cartItems[item] * itemInfo.price;
            }
        }
        return totalAmount;
    }

    const addToCart = (itemId) => {
        setCartItems((prev) => ({...prev, [itemId]:prev[itemId]+1}));
    }

     const removeFromCart = (itemId) => {
        setCartItems((prev) => ({...prev, [itemId]:prev[itemId]-1}));
    }

    const updateCartItemCount = (newAmount, itemId) => {
        setCartItems((prev) => ({...prev, [itemId]: newAmount}));
    }

    const contextValue = {
        cartItems, 
        addToCart, 
        removeFromCart, 
        updateCartItemCount, 
        getTotalCartAmount
    };
    
    console.log(cartItems);

    return (<ShopContext.Provider value={contextValue}>{props.children}</ShopContext.Provider>
    );
}