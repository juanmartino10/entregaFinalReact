import React from "react"

const ItemDetail = ({id, nombre, precio, img}) => {
    return (
        <div>
            <h2>Nombre: {nombre}</h2>
            <h4>Precio: {precio}</h4>
            <h5>ID: {id}</h5>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolores veritatis, neque adipisci quibusdam enim aliquam accusamus ullam error suscipit sequi doloribus quos, similique, commodi iure velit? Aliquid quasi dolorum iste.</p>
            <img src={img} alt={nombre} />
        </div>
    )
}

export default ItemDetail