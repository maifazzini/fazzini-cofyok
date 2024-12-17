import React from 'react'

const CheckoutItem = ({producto}) => {
  return (
    <div className='item-carrito'>
        <h3>{producto.nombre}</h3>
        <div>
          <p>Cant: {producto.cantidad}</p>
          <p>Total: ${ producto.precio * producto.cantidad}</p>
        </div>
    </div>
  )
}

export default CheckoutItem