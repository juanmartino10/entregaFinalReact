import './NavBar.css'
import CartWidget from '../CartWidget/CartWidget'
import { Link,NavLink } from 'react-router-dom'

const NavBar = () => {
    return (
        <header>
            <Link to={"/"}>
            <img className='logoTienda' src="../Img/tiendaSR.png" alt="logo tienda" />
            </Link>
            <ul>
                
                <li>
                    <button>
                    <NavLink to={"/categoria/2"}>Alimentos</NavLink>
                    </button>
                </li>
                <li>
                    <button>
                <NavLink to={"/categoria/3"}>Hogar</NavLink>
                </button>
                </li>
            </ul>
            <CartWidget/>
        </header>
    )
}

export default NavBar