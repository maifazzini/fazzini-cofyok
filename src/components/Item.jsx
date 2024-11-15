import React from 'react'

const Item = ({ producto }) => {
    return (
        <div className='producto'>
            <img src={producto.imagen} alt={producto.nombre} />
            <h3>{producto.nombre}</h3>
            <p>${producto.precio}</p>
            <button className="boton">Ver mas</button>
        </div>
    )
}

export default Item