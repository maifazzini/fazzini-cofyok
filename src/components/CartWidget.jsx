import { TiShoppingCart } from "react-icons/ti";
import Badge from 'react-bootstrap/Badge';

const CartWidget= () => {
    return(
        <div className="carrito">
            <TiShoppingCart className="carrito-icono"/>
            <Badge pill  className="badge-carrito"> 2</Badge>
        </div>
    )
}

export default CartWidget