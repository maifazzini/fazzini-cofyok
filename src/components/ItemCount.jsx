import React, { useState } from 'react'

const ItemCount = ({ stock, initial, onAdd }) => {
    const [contador, setcontador] = useState(initial)
    const sumar = () => {
        if (contador < stock) {
            setcontador(contador + 1);
        }
    }
    const restar = () => {
        if (contador > 0) {
            setcontador(contador - 1);
        }
    }
    const onAddHandler = () => {
        onAdd(contador);
    }
    return (
        <div className='contador'>
            <div>
                <button onClick={restar}>-</button>
                <p>{contador}</p>
                <button onClick={sumar}>+</button>
            </div>
            <button disabled={stock <= 0 || contador === 0} className="boton" onClick={onAddHandler}>Agregar al carrito</button>
            {stock <= 0 && <p className='sin-stock'> No hay stock</p>}
        </div>
    )
}

export default ItemCount