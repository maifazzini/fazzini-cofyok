import React, {useEffect, useState} from "react"
import {listadoproductos} from "../mock/data"
import ItemList from "./ItemList"
import { useParams } from "react-router-dom"
import Loader from "./Loader"
import { collection, getDocs, where, query } from "firebase/firestore"
import { db } from "../services/firebase"


const ItemListContainer = ({greeting}) => {
    const{categoriaid}= useParams("");
    const [productos, setproductos]= useState([]);
    const [error, seterror]= useState(null);
    const [cargando, setcargando]= useState(false);
    useEffect( ()=>{
        setcargando(true);
        const productosColeccion= categoriaid? 
        query(collection(db, "productos"), where("categoria", "==",categoriaid))
        : collection(db, "productos")
        getDocs(productosColeccion)
        .then((res)=>{
            const lista= res.docs.map((producto)=>{
                return{
                    id: producto.id,
                    ...producto.data()
                }
            })
            setproductos(lista);
        })
        .catch(()=> seterror(true))
        .finally(()=>setcargando(false))
    }, [categoriaid])

    return(
        <main>
            <section className="hero-section">
                <div>
                    <h2>{greeting}</h2>
                </div>
                <img src="../image/fondobanerinicio2.png" alt="cofyok con fondo granos de cafe" />
            </section>
            {cargando? <Loader/>: <ItemList productos={productos}> {categoriaid&&<h3>{categoriaid}</h3>} </ItemList>}

        </main>
    )
}
export default ItemListContainer