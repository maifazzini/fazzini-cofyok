import React, { useEffect, useState } from 'react'
import { productoporid } from '../mock/data';
import ItemDetail from './ItemDetail'
import { useParams } from 'react-router-dom';

const ItemDetailContainer = () => {
    const {id}= useParams()
    const [producto, setproducto] = useState([]);
    const [error, seterror] = useState(null);
    const [cargando, setcargando] = useState(false);
    useEffect(() => {
        setcargando(true);
        productoporid(id)
            .then((res) => {
                seterror(null);
                setproducto(res);
            })
            .catch((error) => seterror(true))
            .finally(() => setcargando(false))
    }, [])
    return (
        <main>
            {cargando? <div className="pagina-cargando"><p>Cargando....</p></div>: <ItemDetail productoporid= {producto} ></ItemDetail>}
            
        </main>
    )
}

export default ItemDetailContainer