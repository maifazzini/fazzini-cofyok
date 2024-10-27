import CartWidget from "./CartWidget"


const NavBar= () =>{
    return(
        <nav className="nav-bar">
            <h1>Cofyok</h1>
            <ul>
                <li><a href="">Mas vendidos</a></li>
                <li><a href="">Capsulas</a></li>
                <li><a href="">Granos</a></li>
            </ul>
            <CartWidget />
        </nav>
    )
}

export default NavBar