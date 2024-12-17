import React from 'react'
import { IoTrashOutline } from "react-icons/io5";
import { useCart } from "../context/CartContext"

const CartItem = ({producto}) => {
  const {removeItem} = useCart();
  const eliminar = () =>{
    removeItem(producto.id)
  }
  return (
    <div className='item-carrito'>
      
        <img src={producto.imagen} alt={producto.nombre} />
          <h3>{producto.nombre}</h3>
      
        <div>
          <p>Cant: {producto.cantidad}</p>
          <p>Total: ${ producto.precio * producto.cantidad}</p>
        </div>
        <IoTrashOutline onClick={eliminar}  className='icono-eliminar'/>
    </div>
  )
}

export default CartItem