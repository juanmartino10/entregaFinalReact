import './NavBar.css'
import CartWidget from '../CartWidget/CartWidget'
import { Link,NavLink } from 'react-router-dom'
import Button from 'react-bootstrap/Button';

// const NavBar = () => {
//     return (
//         <header>
//             <Link to={"/"}>
//             <img className='logoTienda' src="../Img/tiendaSR.png" alt="logo tienda" />
//             </Link>
//             <ul>

//                 <li>
//                     <Button variant='dark'>
//                     <NavLink to={"/categoria/2"}>Alimentos</NavLink>
//                     </Button>
//                 </li>
//                 <li>
//                     <Button variant='dark' className='botonNav'>
//                 <NavLink to={"/categoria/3"}>Hogar</NavLink>
//                 </Button>
//                 </li>
//             </ul>
//             <CartWidget/>
//         </header>
//     )
// }

// export default NavBar



import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function NavBar() {
    return (
        <>
            <Navbar bg="dark" data-bs-theme="dark">
                <Container>
                    <Navbar.Brand href="#home"><Link to={"/"}>
                        <img className='logoTienda' src="../Img/tiendaSR.png" alt="logo tienda" />
                    </Link></Navbar.Brand>
                    <Nav className="me-auto">
                        <Button variant='secondary'>
                            <NavLink to={"/categoria/2"}>Alimentos</NavLink>
                        </Button>
                        <Nav.Link href="#pricing"><Button variant='secondary' className='botonNav'>
                            <NavLink to={"/categoria/3"}>Hogar</NavLink>
                        </Button></Nav.Link>
                    </Nav>
                </Container>
                <CartWidget/>
            </Navbar>
        </>
    );
}

export default NavBar;