import React, { useEffect, useState } from 'react'
import { productoporid } from '../mock/data';
import ItemDetail from './ItemDetail'
import { useParams } from 'react-router-dom';
import Loader from './Loader';
import { collection, getDoc, doc} from 'firebase/firestore';
import { db } from '../services/firebase';

const ItemDetailContainer = () => {
    const {id}= useParams()
    const [producto, setproducto] = useState([]);
    const [error, seterror] = useState(null);
    const [cargando, setcargando] = useState(false);
    useEffect(() => {
        setcargando(true)
        const productosColeccion= collection(db,"productos");
        const docRef= doc(productosColeccion,id);
        getDoc(docRef)
        .then((res)=> setproducto({id: res.id, ...res.data()}))
        .catch((error)=> seterror(true))
        .finally(()=> setcargando(false))
    }, [])
    /* useEffect(() => {
        setcargando(true);
        productoporid(id)
            .then((res) => {
                seterror(null);
                setproducto(res);
            })
            .catch((error) => seterror(true))
            .finally(() => setcargando(false))
    }, []) */
    return (
        <main>
            {cargando? <Loader/>: <ItemDetail productoporid= {producto} ></ItemDetail>}
            
        </main>
    )
}

export default ItemDetailContainer