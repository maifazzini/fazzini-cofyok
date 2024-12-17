import React, { useState } from 'react'
import { useCart } from '../context/CartContext'
import CheckoutItem from './CheckoutItem';
import { collection, addDoc, } from 'firebase/firestore';
import { db } from "../services/firebase"
import { Link } from 'react-router-dom';
import { BsCartCheck } from "react-icons/bs";

const Checkout = () => {
  const{cart, precioTotal, clear}= useCart();
  const [cliente, setcliente]= useState({});
  const [nombre, setnombre] = useState("");
  const [apellido, setapellido] = useState("");
  const [direccion, setdireccion] = useState("");
  const [mail, setmail] = useState("");
  const [telefono, settelefono] = useState("");
  const [retiro, setretiro] = useState("");
  const [validarmail, setvalidarmail]= useState("");
  const [campolleno, setcampolleno] = useState(true);
  const [compraid, setcompraid] = useState("")
  const guardarDatos = (e)=>{
    setcliente(
      {
        ...cliente ,
        [e.target.name]: e.target.value,
      }
    )
  } 
  
  const enviarDatos = (e)=>{
    e.preventDefault()
    if(!cliente.nombre || !cliente.apellido || !cliente.mail || !cliente.direccion || !cliente.retiro){
      setcampolleno(false)
    } else if (cliente.mail === validarmail){
      const compras = collection(db, "compras"); 
      const hoy =new Date().toLocaleString();
      const orden= {
        fecha: hoy,
        pedido: cart,
        total: precioTotal(),
        estado: "generada",
        usuario: cliente
      }
      addDoc (compras, orden).
      then((res)=>{
        setcompraid(res.id)
      })
      clear()  
    }
  }
  if (compraid){
    return(
      <main  className='compra-realizada'>
        <BsCartCheck  className='icono'/>
        <div>
          <h2>Gracias por tu compra {nombre} 🎉 </h2>
          <h3>La operación fue realizada con exito</h3>
          <p>Por favor anota el siguiente id de compra</p>
          <p id='compraid'>{compraid}</p>
        </div>
        <Link to={"/"} className='boton'>Volver al inicio</Link>
      </main>
    )
  }
  return (
    <main className='checkout'>
      <section>
      <h2>Tu orden</h2>
        {cart.map((item) => <CheckoutItem key={item.id} producto={item}> </CheckoutItem>)}
        <div className='carrito-total'>
        <p>Total:  ${precioTotal()}</p>
      </div>
      </section>
      <section>
        <h2> Completa los datos para terminar la compra</h2>
        <form className='form-checkout' onSubmit={enviarDatos}>
            <div className='form-item'>
              <label htmlFor="nombre">Nombre</label>
              <input type="text" name='nombre'  className= {!nombre && !campolleno? "campo-vacio" : " "} onChange={(e)=>{setnombre(e.target.value); guardarDatos(e)}}/>
              {!nombre && !campolleno? <p>Completa con tu nombre</p>: ""}
            </div>
            <div className='form-item'>
            <label htmlFor="apellido">Apellido</label>
            <input type="text" name='apellido' className= {!apellido && !campolleno ? "campo-vacio": "" }  onChange={(e)=>{setapellido(e.target.value); guardarDatos(e)}}/>
            {!apellido && !campolleno ? <p>Completa con tu apellido</p>: ""}
            </div>
            <div className='form-item'>
            <label htmlFor="direccion">Dirección</label>
            <input type="text" name='direccion' className= {!direccion && !campolleno ? "campo-vacio": ""} onChange={(e)=>{setdireccion(e.target.value); guardarDatos(e)}}/>
            {!direccion && !campolleno ? <p>Completa con tu dirección</p>: "" }
            </div>
            <div className='form-item'>
            <label htmlFor="telefono">Telefono</label>
            <input type="number" name='telefono' className= {!telefono && !campolleno ? "campo-vacio": ""} onChange={(e)=>{settelefono(e.target.value); guardarDatos(e)}}/>
            {!telefono && !campolleno ? <p>Completa con tu telefono</p>: "" }
            </div>
          
            <div className='form-item'>
            <label htmlFor="mail">Mail</label>
            <input type="mail" name='mail' className= {!mail && !campolleno ?  "campo-vacio": ""} onChange={(e)=>{setmail(e.target.value); guardarDatos(e)}}/>
            {!mail && !campolleno ? <p>Completa con tu mail</p> : "" }
            </div>
            <div className='form-item'>
            <label htmlFor="validarmail">Confirmar mail</label>
            <input type="mail" name='validarmail' className= {validarmail===mail ? "": "campo-vacio"} onChange={(e)=>{setvalidarmail(e.target.value);}}/>
            {validarmail===mail ? "": <p>Ambas direcciones de mail deben ser iguales</p>}
            </div>
            <div className='form-item'>
            <label htmlFor="retiro">Selecciona la opcion deseada
            </label>
            <select name="retiro" className= {!retiro && !campolleno ? "campo-vacio": "" }  onInput={(e)=>{setretiro(e.target.value); guardarDatos(e)}} >
              <option value="envio"> Coordinar envio</option>
              <option value="retiradellocal"> Retira del local</option>
            </select>
            </div>
          <button type="submit" className='boton'> Comprar</button>
          
        </form>
      </section>
    </main>
  )
}

export default Checkout