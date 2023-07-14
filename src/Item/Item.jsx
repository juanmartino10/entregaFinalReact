import "./Item.css"
import { Link } from "react-router-dom";

export const Item = ({ id, nombre, precio, img, stock }) => {
    return (
        <div className='cards'>
            <img src={img} alt={nombre} />
            <h3>Nombre: {nombre}</h3>
            <p>Precio: {precio}</p>
            <p>ID: {id}</p>
            <p>Stock: {stock}</p>
            <Link to={`/item/${id}`}><button>Ver mas</button></Link>
        </div>
    );
};
