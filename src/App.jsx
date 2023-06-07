import ItemListContainer from "./ItemList/ItemListContainer"
import NavBar from "./NavBar/NavBar"

const App = () => {
  return (
    <>
    <NavBar/>
    <ItemListContainer greeting = {"Gracias por comprar con nosotros!"} />
    </>
  )
}

export default App
