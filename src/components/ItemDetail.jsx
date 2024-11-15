import React from 'react'
import ItemCount from "./ItemCount"

const ItemDetail = ({productoporid}) => {
  const onAdd= (cantidad)=>{
    alert(`Agregaste al carrito ${cantidad} productos`)
};
console.log(productoporid)
  return (
    <div className= "detalle-del-producto">
    
    <div>
      <img src={productoporid.imagen} alt={productoporid.nombre} />
    </div>
      <div>
        <h2>{productoporid.nombre}</h2>
        <p>{productoporid.descripcion}</p>
        <p>{productoporid.precio}</p>
        <ItemCount initial={1} onAdd={onAdd} stock={45}/>
      </div> 
    </div>
  )
}

export default ItemDetail