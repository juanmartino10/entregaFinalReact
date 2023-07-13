import { useState } from "react"


export const ItemCount = ({inicial, stock, funcionAgregar}) => {
const [contador, setContador] = useState(inicial)

const incrementar = () => {
    if (contador < stock) {
        setContador(contador + 1);
    }
}

const decrementar = () => {
    if (contador < inicial) {
        setContador(contador - 1);
    }
}

    return (
        <div>
            <button onClick={incrementar}>+</button>
            <p>{contador}</p>
            <button onClick={decrementar}>-</button>
            <button onClick={() => funcionAgregar(contador)}>Agregar al carrito</button>
        </div>
    )
}

export default ItemCount