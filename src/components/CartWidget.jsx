import { TiShoppingCart } from "react-icons/ti";
import Badge from 'react-bootstrap/Badge';

const CartWidget= () => {
    return(
        <div className="carrito">
            <TiShoppingCart className="carrito-icono"/>
            <Badge pill  className="badge-carrito"> 2</Badge>
            {/* <p>2</p> */}
        </div>
    )
}

export default CartWidget