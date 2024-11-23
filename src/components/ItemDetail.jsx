import React from 'react'
import ItemCount from "./ItemCount"
import { FaArrowLeft } from "react-icons/fa";
import { Link } from 'react-router-dom';

const ItemDetail = ({ productoporid }) => {
  const onAdd = (cantidad) => {
    alert(`Agregaste al carrito ${cantidad} productos`)
  };
  return (
    <div className="detalle-del-producto-contenedor">
      <Link className="link" to={"/"}><FaArrowLeft/> </Link>
      <div className="detalle-del-producto">
        
          <img src={productoporid.imagen} alt={productoporid.nombre} />
        
        <div>
          <h2>{productoporid.nombre}</h2>
          <p>{productoporid.descripcion}</p>
          <p className='precio'>${productoporid.precio}</p>
          <ItemCount initial={1} onAdd={onAdd} stock={productoporid.stock} />
        </div>
      </div>
    </div>
  )
}

export default ItemDetail