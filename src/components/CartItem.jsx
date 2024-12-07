import React from 'react'
import { Link } from 'react-router-dom'

const CartItem = () => {
  return (
    <div>
        <Link className='boton' to={"/checkout"}>Terminar compre</Link>
    </div>
  )
}

export default CartItem