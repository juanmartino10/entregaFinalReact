import React from "react"
import { CarritoContext } from "../CarritoContext"
import { useContext } from "react"
import { ItemCount } from "../ItemCount/ItemCount"
import { useState } from "react"
import { Link } from "react-router-dom"

const ItemDetail = ({ id, nombre, precio, img, stock }) => {

    const [agregarCantidad, setAgregarCantidad] = useState(0);

    const { agregarProducto } = useContext(CarritoContext);

    const manejadorCantidad = (cantidad) => {
        setAgregarCantidad(cantidad)
        const item = { id, nombre, precio };
        agregarProducto(item, cantidad);
    }
    return (
        <div>
            <h2>Nombre: {nombre}</h2>
            <h4>Precio: {precio}</h4>
            <h5>ID: {id}</h5>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolores veritatis, neque adipisci quibusdam enim aliquam accusamus ullam error suscipit sequi doloribus quos, similique, commodi iure velit? Aliquid quasi dolorum iste.</p>
            <img src={img} alt={nombre} />
            {
                agregarCantidad > 0 ? (<Link to="/Cart"> Terminar Compra </Link>) : (<ItemCount inicial={1} stock={stock} funcionAgregar={manejadorCantidad} />)
            }
        </div>

    )
}

export default ItemDetail