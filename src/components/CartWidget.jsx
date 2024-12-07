import { TiShoppingCart } from "react-icons/ti";
import Badge from 'react-bootstrap/Badge';
import { useCart } from "../context/CartContext";

const CartWidget= () => {
    const {cantidadItems}= useCart();
    return(
        <div className="carrito">
            <TiShoppingCart className="carrito-icono"/>
            {cantidadItems()>0&&<Badge pill  className="badge-carrito"> {cantidadItems()}</Badge>}
        </div>
    )
}

export default CartWidget