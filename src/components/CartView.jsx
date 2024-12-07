import React from 'react'
import { useCart } from "../context/CartContext"
import EmpyCart from "./EmpyCart"
import CartList from './CartList'

const CartView = () => {
    const {cart} = useCart()
    return (
        <>
        {cart.length>0 ? <CartList/>:<EmpyCart/>  }
        </>
    )
}

export default CartView