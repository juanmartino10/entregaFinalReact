import { useState } from "react"
import "./ItemCount.css"


export const ItemCount = ({inicial, stock, funcionAgregar}) => {
const [contador, setContador] = useState(inicial)

const incrementar = () => {
    if (contador < stock) {
        setContador(contador + 1);
    }
}

const decrementar = () => {
    if (contador > inicial) {
        setContador(contador - 1);
    }
}

    return (
        <div>
            <button onClick={incrementar} className="botonIncrementar">+</button>
            <p className="numeroContador">{contador}</p>
            <button onClick={decrementar} className="botonDecrementar">-</button>
            <button onClick={() => funcionAgregar(contador)} className="botonAgregar">Agregar al carrito</button>
        </div>
    )
}

export default ItemCount