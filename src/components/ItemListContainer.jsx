import React, {useEffect, useState} from "react"
import {listadoproductos} from "../mock/data"
import ItemList from "./ItemList"


const ItemListContainer = ({greeting}) => {
    const [productos, setproductos]= useState([]);
    const [error, seterror]= useState(null);
    const [cargando, setcargando]= useState(false);
    useEffect( () =>{
    setcargando(true);
    listadoproductos()
    .then((res)=>{
        seterror(null);
        setproductos(res);
    } )
    .catch((error)=> seterror(true))
    .finally(()=> setcargando(false))
}, [])


    return(
        <main>
            <section className="hero-section">
                <div>
                    <h2>{greeting}</h2>
                </div>
                <img src="./image/fondobanerinicio.png" alt="cofyok con fondo granos de cafe" />
            </section>
            {cargando? <div className="pagina-cargando"><p>Cargando....</p></div>: <ItemList productos={productos}></ItemList>}

        </main>
    )
}
export default ItemListContainer