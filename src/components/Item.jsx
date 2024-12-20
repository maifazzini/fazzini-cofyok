import React from 'react'
import { Link } from 'react-router-dom'

const Item = ({ producto }) => {
    return (
        <div className='producto'>
            <img src={producto.imagen} alt={producto.nombre} />
            <h4>{producto.nombre}</h4>
            <p>${producto.precio}</p>
            <Link className="boton" to={`/item/${producto.id}`}>Ver mas</Link>
        </div>
    )
}

export default Item