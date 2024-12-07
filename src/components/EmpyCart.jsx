import React from 'react'
import { Link } from 'react-router-dom'

const EmpyCart = () => {
  return (
    <main className='pagina-carrito-vacio'>
      <h2>Tu carrito esta vacio</h2>
      <p>Elige el producto que queres comprar</p>
      <Link to="/" className='boton'>Ver productos</Link>
    </main>
  )
}

export default EmpyCart