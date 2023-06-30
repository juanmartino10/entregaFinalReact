import ItemListContainer from "./ItemList/ItemListContainer"
import NavBar from "./NavBar/NavBar"
import ItemDetailContainer from "./ItemDetailContainer/ItemDetailContainer"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import "./App.css"

const App = () => {
  return (
    <>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<ItemListContainer />} />
          <Route path="/categoria/:idCategoria" element={<ItemListContainer />} />
          <Route path="/item/:idItem" element={<ItemDetailContainer />} />
        </Routes>
      </BrowserRouter>

      {/* <ItemListContainer />
      <ItemDetailContainer /> */}

    </>
  )
}

export default App
