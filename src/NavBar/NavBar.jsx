import './NavBar.css'
import CartWidget from '../CartWidget/CartWidget'
import { Link,NavLink } from 'react-router-dom'

const NavBar = () => {
    return (
        <header>
            <Link to={"/"}>
            <h1>Tienda SR</h1>
            </Link>
            <ul>
                
                <li>
                    <NavLink to={"/categoria/2"}>Alimentos</NavLink>
                </li>
                <li>
                <NavLink to={"/categoria/3"}>Hogar</NavLink>
                </li>
            </ul>
            <CartWidget/>
        </header>
    )
}

export default NavBar