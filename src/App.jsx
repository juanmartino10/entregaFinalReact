import ItemListContainer from "./ItemList/ItemListContainer"
import NavBar from "./NavBar/NavBar"
import ItemDetailContainer from "./ItemDetailContainer/ItemDetailContainer"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import 'bootstrap/dist/css/bootstrap.min.css';
import "./App.css"
import { CarritoProvider } from "./CarritoContext"
import Cart from "./Cart/Cart"
import Checkout from "./Checkout/Checkout"



const App = () => {
  return (
    <>
      <BrowserRouter>
      <CarritoProvider>
        <NavBar />
        <Routes>
          <Route path="/" element={<ItemListContainer />} />
          <Route path="/categoria/:idCategoria" element={<ItemListContainer />} />
          <Route path="/item/:idItem" element={<ItemDetailContainer />} />
          <Route path="/cart" element={<Cart/>}/>
          <Route path="/checkout" element={<Checkout/>} />
        </Routes>
        </CarritoProvider>
      </BrowserRouter>

      {/* <ItemListContainer />
      <ItemDetailContainer /> */}

    </>
  )
}

export default App
