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


function App() {

  const [cart, setCart] = useState([])

  return (

    <CartContext.Provider value={ {
      cart,
      setCart,
    }}
      
    >

      <BrowserRouter>

        <Navbar/>
        
          <Routes>

            <Route path='/' element={ <ItemListContainer/> } />
            <Route path='/productos/:categoria' element= {<ItemListContainer/>}/>
            <Route path='/item/:itemId' element= {<ItemDetailContainer/>}/>
            <Route path='*' element= {<ItemListContainer/>}/>

          </Routes>

        <Footer/>
          
      </BrowserRouter>

    </CartContext.Provider>
  );
}

export default App;
