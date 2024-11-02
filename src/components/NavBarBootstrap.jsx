import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import CartWidget from "./CartWidget"

function NavBarBootstrap() {
    return (
        <>
            <Navbar expand="lg" className="bg-body-tertiary nav-bar">
                <Container>
                    <Navbar.Brand href="#home"><h1>Cofyok</h1></Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link href="" className='menu-item'>Inicio</Nav.Link>
                            <Nav.Link href="" className='menu-item'>Capsulas</Nav.Link>
                            <Nav.Link href="" className='menu-item'>Granos</Nav.Link>
                            <Nav.Link href="" className='menu-item'>Mas vendidos</Nav.Link>
                        </Nav>
                        <CartWidget className="ml-auto" />
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
}

export default NavBarBootstrap;



