import { useEffect, useState } from "react"
import ItemList from '../List/ItemList';
import { useParams } from "react-router-dom";
import { collection, getDocs, where, query } from "firebase/firestore";
import { db } from "../service/config";

const ItemListContainer = (props) => {
    const [productos, setProductos] = useState([]);

const {idCategoria} = useParams();

useEffect(() => {
    const misProductos = idCategoria ? query(collection(db, "inventario"), where("idCat", "==", idCategoria)) : collection(db, "inventario")
    getDocs(misProductos)
    .then(res => {
        const nuevosProductos = res.docs.map( doc => {
            const data = doc.data()
            return {id: doc.id, ...data}
        })
        setProductos(nuevosProductos)
    })
    .catch(error => console.log(error))
}, [idCategoria])



    return (
        <>
            <h2>{props.greeting}</h2>
            <ItemList productos={productos} />
        </>

    )
}

export default ItemListContainer