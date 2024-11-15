import React from 'react'
import Item from "./Item"
const ItemList = ({ productos }) => {
    return (
        <section className='contenedor-productos'>
            <h2>Nuestros productos</h2>
            <div>
                {productos.map((producto) => <Item key={producto.id} producto={producto}></Item>)}
            </div>
        </section>
    )
}

export default ItemList