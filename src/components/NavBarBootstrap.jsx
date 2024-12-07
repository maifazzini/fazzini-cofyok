import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import CartWidget from "./CartWidget";
import { Link, NavLink } from 'react-router-dom';

function NavBarBootstrap() {
    return (
        <header>
            <Navbar expand="lg" className="bg-body-tertiary nav-bar">
                <Container>
                    <Navbar.Brand to= "/" as= {NavLink}><h1>Cofyok</h1></Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link to="/" className='menu-item' as= {NavLink}>Inicio</Nav.Link>
                            <Nav.Link to="/categoria/capsulas" className='menu-item' as= {NavLink}>Capsulas</Nav.Link>
                            <Nav.Link to="/categoria/en grano" className='menu-item' as= {NavLink}>Granos</Nav.Link>
                            <Nav.Link to="/categoria/vasos" className='menu-item' as= {NavLink}>Vasos</Nav.Link>
                        </Nav>
                        <NavLink to="/cart" >
                        <CartWidget/>
                        </NavLink>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </header>
    );
}

export default NavBarBootstrap;



