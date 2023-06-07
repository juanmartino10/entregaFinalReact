import './NavBar.css'
import CartWidget from '../CartWidget/CartWidget'


const NavBar = () => {
    return (
        <header>
            <h1>Tienda Martino</h1>
            <ul>
                <li>Comidas</li>
                <li>Bebidas</li>
                <li>Higiene</li>
            </ul>
            <CartWidget/>
        </header>
    )
}

export default NavBar