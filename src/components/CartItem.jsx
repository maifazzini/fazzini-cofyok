import React from 'react'
import { Link } from 'react-router-dom'

const CartItem = ({producto}) => {
  return (
    <div>
      <img src={producto.imagen} alt={producto.nombre} />
        <p>{producto.nombre}</p>
        <p>Cantidad :{producto.cantidad}</p>
        <p>Total unitario: ${ producto.precio * producto.cantidad}</p>
    </div>
  )
}

export default CartItem