import React, {useEffect, useState} from "react"
import {listadoproductos} from "../mock/data"
import ItemList from "./ItemList"
import { useParams } from "react-router-dom"


const ItemListContainer = ({greeting}) => {
    const{categoriaid}= useParams("");
    const [productos, setproductos]= useState([]);
    const [error, seterror]= useState(null);
    const [cargando, setcargando]= useState(false);
    useEffect( () =>{
    setcargando(true);
    listadoproductos()
    .then((res)=>{
        seterror(null);
        categoriaid? setproductos(res.filter((producto)=> producto.categoria == categoriaid)):setproductos(res) ;
    } )
    .catch((error)=> seterror(true))
    .finally(()=> setcargando(false))
}, [categoriaid])


    return(
        <main>
            <section className="hero-section">
                <div>
                    <h2>{greeting}</h2>
                </div>
                <img src="../image/fondobanerinicio2.png" alt="cofyok con fondo granos de cafe" />
            </section>
            {cargando? <div className="pagina-cargando"><p>Cargando....</p></div>: <ItemList productos={productos}> {categoriaid&&<h3>{categoriaid}</h3>} </ItemList>}

        </main>
    )
}
export default ItemListContainer