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
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!"
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire({
          title: "El carrito fue vaciado",
          icon: "success"
        });
        clear();
      }
    });
  };

  return (
    <div>
      {cart.map((item) => <CartItem key={item.id} producto={item}> </CartItem>)}
      <p>Total ${precioTotal()}</p>
      <button className='boton' onClick={vaciarcarrito}>Vaciar carrito</button>
      <Link className='boton' to={"/checkout"}>Terminar compra</Link>
    </div>
  )
}

export default CartList