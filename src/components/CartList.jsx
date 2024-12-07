import React from 'react'
import { useCart } from '../context/CartContext'
import CartItem from "./CartItem"
import { Link } from 'react-router-dom'


const CartList = () => {
  const {cart, clear , precioTotal}= useCart();
  return (
    <div>
      {cart.map((item) => <CartItem key={item.id} producto={item}> </CartItem>)}
      {/* {productos.map((producto) => <Item key={producto.id} producto={producto}></Item>)} */}
      <p>`Total ${precioTotal()}`</p>
      <Link className='boton' to={"/checkout"}>Terminar compre</Link>
    </div>
  )
}

export default CartList