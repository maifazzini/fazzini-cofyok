import React, {useState}from 'react'

const ItemCount = ({stock, initial, onAdd }) => {
    const [contador, setcontador] = useState(initial)
    const sumar = () => {
        if (contador < stock){
            setcontador(contador + 1 );
        }
    }
    const restar = () => {
        if (contador > initial){
            setcontador(contador - 1 );
        }
    }
    const onAddHandler = () =>{
        onAdd(contador);
    }
    return (
        <div className='contador'>
            <div>
                <button onClick={restar}>-</button>
                <p>{contador}</p>
                <button  onClick={sumar}>+</button>
            </div>
            {stock>0?<button className= "boton" onClick={onAddHandler}>Agregar al carrito</button>: <p className='sin-stock'> No hay stock</p> }
        </div>
    )
}

export default ItemCount