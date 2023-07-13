import React from 'react'
import { useContext } from 'react'
import { CarritoContext } from "../CarritoContext"
import { Link } from 'react-router-dom'

const CartWidget = () => {
    const {cantidadTotal} = useContext(CarritoContext)
    return (
        <>
        <Link to="/cart">
        <p>🛒</p>
        {
            cantidadTotal > 0 && <strong>{cantidadTotal}</strong>
        }
        </Link>
            
        </>
    )
}

export default CartWidget