import "./Item.css"
import { Link } from "react-router-dom";

export const Item = ({ id, nombre, precio, img }) => {
    return (
        <div className='cards'>
            <img src={img} alt={nombre} />
            <h3>Nombre: {nombre}</h3>
            <p>Precio: {precio}</p>
            <p>ID: {id}</p>
            <Link to={`/item/${id}`}><button>Ver mas</button></Link>
        </div>
    );
};
