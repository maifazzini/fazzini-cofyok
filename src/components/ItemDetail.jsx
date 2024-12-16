import React, { useState } from 'react'
import ItemCount from "./ItemCount"
import { FaArrowLeft } from "react-icons/fa";
import { Link} from 'react-router-dom';
import { useCart } from '../context/CartContext';
import Toastify from 'toastify-js'
import "toastify-js/src/toastify.css"

const ItemDetail = ({ productoporid }) => {
  const {addItem}= useCart();
  const [compra, setCompra]= useState (false);
  const onAdd = (cantidad) => {
    Toastify({
      text: `Agregaste al carrito ${cantidad} ${productoporid.nombre}`,
      duration: 3000,
      gravity: "bottom", 
      position: "right", 
      style: {
        background: "#CCA55E",
      },
    }).showToast();
    setCompra(true)
    addItem(productoporid, cantidad);
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
          {compra?<div className='boton-carrito'>
            <Link to= {"/"} className='boton' >Seguir comprando</Link>
            <Link to= {"/cart"} className='boton' >Ir al carrito</Link>
          </div>:<ItemCount initial={1} onAdd={onAdd} stock={productoporid.stock} />}
        </div>
      </div>
    </div>
  )
}

export default ItemDetail