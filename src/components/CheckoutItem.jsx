import React from 'react'

const CheckoutItem = ({producto}) => {
  return (
    <div className='item-carrito'>
        <h3>{producto.nombre}</h3>
        <p>Cant: {producto.cantidad}</p>
        <p>Total: ${ producto.precio * producto.cantidad}</p>
    </div>
  )
}

export default CheckoutItem