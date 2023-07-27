import React from "react"
import { CarritoContext } from "../CarritoContext"
import { useContext } from "react"
import { ItemCount } from "../ItemCount/ItemCount"
import { useState } from "react"
import { Link } from "react-router-dom"
import "./ItemDetail.css"

const ItemDetail = ({ id, nombre, precio, img, stock }) => {

    const [agregarCantidad, setAgregarCantidad] = useState(0);

    const { agregarProducto } = useContext(CarritoContext);

    const manejadorCantidad = (cantidad) => {
        setAgregarCantidad(cantidad)
        const item = { id, nombre, precio };
        agregarProducto(item, cantidad);
    }
    return (
        <div className="detalleProductos">
            <h2>Nombre: {nombre}</h2>
            <h4>Precio: {precio}</h4>
            <h5>ID: {id}</h5>
            <img src={img} alt={nombre} />
            {
                agregarCantidad > 0 ? (<Link to="/Cart"> Terminar Compra </Link>) : (<ItemCount inicial={1} stock={stock} funcionAgregar={manejadorCantidad} />)
            }
        </div>

    )
}

export default ItemDetail