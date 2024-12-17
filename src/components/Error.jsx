import React from 'react'
import { Link } from 'react-router-dom'
import { TbHelpOff } from "react-icons/tb";

const Error = () => {
  return (
    <main className='error-pagina'>
        <TbHelpOff className='icono' />
      <h2>No encontramos lo que estas buscando</h2>
      <Link to="/" className='boton'>Volver al inicio</Link>
    </main>
  )
}

export default Error