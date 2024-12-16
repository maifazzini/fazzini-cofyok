import { createContext, useContext, useEffect, useState } from "react";
/* crear contexto */
export const CartContext = createContext();
/* carrito con local */
const carritopersistente= JSON.parse(localStorage.getItem('carrito')) || [];
/* proveedor y cliente */
export const CartProvider = ({children}) =>{
    const [cart, setCart]= useState(carritopersistente);
    useEffect(()=>{
        localStorage.setItem('carrito',JSON.stringify(cart));
    }, [cart])
    /* añardir al carrito */
    const addItem = (item, cantidad)=>{ 
        if(isInCart(item.id)){
            setCart(cart.map((producto)=>{
                if(producto.id === item.id){
                    return {...producto, cantidad: producto.cantidad + cantidad}
                }
                else{
                    return producto
                }
            }))
        }else{
            setCart([...cart, {...item, cantidad:cantidad}])
        }
        
    }
    /* eliminar item del carrito */
    const removeItem = (itemid)=>{
        setCart(cart.filter((producto)=> producto.id !== itemid));
    }
    /* fijarse si esta en el carrito */
    const isInCart= (id)=>{
        return(cart.some((producto)=> producto.id === id));
    }
    /* para limpiar carrito */
    const clear= () =>{
        setCart([]);
    }
    /* total de cantidades de todos los productos */
    const cantidadItems = ()=>{
        return cart.reduce(((acc,prod)=> acc + prod.cantidad),0)
    }
    /* total de precio de todos los productos */
    const precioTotal= ()=>{
        return cart.reduce(((acc,prod)=> acc + prod.cantidad * prod.precio),0)
    }
    return(
        <CartContext.Provider value={{cart, addItem, removeItem, clear, cantidadItems, precioTotal}}>
            {children}
        </CartContext.Provider>
    )
}
export const useCart = () => useContext(CartContext)