import React from 'react'
import { useCart } from '../context/CartContext'
import CartItem from "./CartItem"
import { Link } from 'react-router-dom'
import Swal from 'sweetalert2'


const CartList = () => {
  const {cart, clear , precioTotal}= useCart();
  const vaciarcarrito = () => {
    Swal.fire({
      title: "¿Estas seguro que queres vaciar el carrito?",
      showCancelButton: true,
      confirmButtonColor: "#CCA55E",
      cancelButtonColor: "#4B1B0D",
      confirmButtonText: "Si, vaciar"
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire({
          title: "El carrito fue vaciado",
          icon: "success",
          confirmButtonColor: "#CCA55E",
        });
        clear();
      }
    });
  };

  return (
    <div className='carrito-contenedor'>
      <h2>Tu carrito</h2>
      {cart.map((item) => <CartItem key={item.id} producto={item}> </CartItem>)}
      <div className='carrito-total'>
        <p>Total</p>
        <p> ${precioTotal()}</p>
      </div>
      <div className='carrito-botones'>
        <button className='boton' onClick={vaciarcarrito}>Vaciar carrito</button>
        <Link className='boton' to={"/checkout"}>Terminar compra</Link>
      </div>
    </div>
  )
}

export default CartList