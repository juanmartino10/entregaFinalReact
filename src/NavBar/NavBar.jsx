// import './NavBar.css'
// import CartWidget from '../CartWidget/CartWidget'
// import { Link, NavLink } from 'react-router-dom'
// import Button from 'react-bootstrap/Button';
// import Container from 'react-bootstrap/Container';
// import Nav from 'react-bootstrap/Nav';
// import Navbar from 'react-bootstrap/Navbar';

// function NavBar() {
//     return (
//         <>
//             <Navbar bg="dark" data-bs-theme="dark">
//                 <Container>
//                     <Navbar.Brand href="#home"><Link to={"/"}>
//                         <img className='logoTienda' src="../Img/tiendaSR.png" alt="logo tienda" />
//                     </Link></Navbar.Brand>
//                     <Nav className="me-auto">
//                         <Button variant='secondary' className='botonNav'>
//                             <NavLink to={"/categoria/2"}>Alimentos</NavLink>
//                         </Button>
//                         <Nav.Link href="#pricing"><Button variant='secondary' className='botonNav'>
//                             <NavLink to={"/categoria/3"}>Hogar</NavLink>
//                         </Button></Nav.Link>
//                     </Nav>
//                 </Container>
//                 <CartWidget />
//             </Navbar>
//         </>
//     );
// }

// export default NavBar;
import './NavBar.css';
import CartWidget from '../CartWidget/CartWidget';
import { Link, NavLink } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function NavBar() {
    return (
        <Navbar bg="dark" data-bs-theme="dark">
                <Navbar.Brand href="#home">
                    <Link to={"/"}>
                        <img className='logoTienda' src="../Img/tiendaSR.png" alt="logo tienda" />
                    </Link>
                </Navbar.Brand>
                
                <Nav className="d-flex ">
                    <Container>
                    <Button variant='secondary' className='botonNav me-2'>
                        <NavLink to={"/categoria/2"}>Alimentos</NavLink>
                    </Button>
                    </Container>
                    <Container>
                    <Button variant='secondary' className='botonNav me-2'>
                        <NavLink to={"/categoria/3"}>Hogar</NavLink>
                    </Button>
                    </Container>
                </Nav>
            <CartWidget />
        </Navbar>
    );
}

export default NavBar;
