import "./App.scss"
import './components/Header/Header.scss';
import "./components/CartWidget/CartWidget.scss";
import "./components/Contador/Contador.scss";
import "./components/ItemList/ItemList.scss";
import "./components/Item/Item.scss";
import "./components/ItemDetail/ItemDetail.scss";
import Navbar from "./components/Header/Header";
import ItemListContainer from './components/ItemListContainer/ItemListConteiner';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Footer from './components/Footer/Footer';
import CartContext from "./context/CartContext";
import { useState } from "react";
import Cart from "./components/Cart/Cart";


function App() {

  const [cart, setCart] = useState([])

  const agregarAlCarrito = (item) => {

    setCart([...cart, item])

  }

  const isInCart = (id) => {

    return cart.some ((item) => item.id === id)

  }

  const cartCantidad = () => {
    return cart.reduce((acumulador, item) => acumulador + item.cantidad, 0)
  }

  return (

    <CartContext.Provider value={ {
      cart,
      agregarAlCarrito,
      isInCart,
      cartCantidad
    }}
      
    >

      <BrowserRouter>

        <Navbar/>
        
          <Routes>

            <Route path='/' element={ <ItemListContainer/> } />
            <Route path='/productos/:categoria' element= {<ItemListContainer/>}/>
            <Route path='/item/:itemId' element= {<ItemDetailContainer/>}/>
            <Route path="/cart" element={<Cart/>}/>
            <Route path='*' element= {<ItemListContainer/>}/>

          </Routes>

        <Footer/>
          
      </BrowserRouter>

    </CartContext.Provider>
  );
}

export default App;
