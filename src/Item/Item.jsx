import "./Item.css"

export const Item = ({ id, nombre, precio, img }) => {
    return (
        <div className='cards'>
            <img src={img} alt={nombre} />
            <h3>Nombre: {nombre}</h3>
            <p>Precio: {precio}</p>
            <p>ID: {id}</p>
            <button>Ver mas</button>
        </div>
    );
};
