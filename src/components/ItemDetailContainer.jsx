import React, { useEffect, useState } from 'react'
import { TbCoffeeOff } from "react-icons/tb";
import ItemDetail from './ItemDetail'
import { Link, useParams } from 'react-router-dom';
import Loader from './Loader';
import { collection, getDoc, doc} from 'firebase/firestore';
import { db } from '../services/firebase';

const ItemDetailContainer = () => {
    const {id}= useParams()
    const [producto, setproducto] = useState([]);
    const [error, seterror] = useState(null);
    const [cargando, setcargando] = useState(false);
    const [invalido, setinvalido] = useState (false);
    useEffect(() => {
        setcargando(true)
        const productosColeccion= collection(db,"productos");
        const docRef= doc(productosColeccion,id);
        getDoc(docRef)
        .then((res)=> {
            if(res.data()){
                setproducto({id: res.id, ...res.data()}) 
            } else{
                setinvalido(true)
            }
        } )
        .catch((error)=> seterror(true))
        .finally(()=> setcargando(false))
    }, [])
    if(invalido){
        return(
            <div className='error-pagina'>
                <TbCoffeeOff className='icono'/>
                <h2>No encontramos este producto</h2>
                <Link className='boton' to={"/"}> Ver productos </Link>
            </div>
        )
    }
    return (
        <main>
            {cargando? <Loader/>: <ItemDetail productoporid= {producto} ></ItemDetail>}
            
        </main>
    )
}

export default ItemDetailContainer