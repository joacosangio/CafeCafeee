import './components/Header/Header.scss';
import "./components/CartWidget/CartWidget.scss";
import "./components/Contador/Contador.scss";
import "./components/ItemList/ItemList.scss";
import "./components/Item/Item.scss";
import "./components/ItemDetail/ItemDetail.scss";
import Navbar from "./components/Header/Header";
import ItemListContainer from './components/ItemListContainer/ItemListConteiner';
import Contador from './components/Contador/Contador';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import { BrowserRouter, Routes, Route } from "react-router-dom";


function App() {
  return (
   
    <BrowserRouter>

      <Navbar/>
      
        <Routes>

          <Route path='/' element={ <ItemListContainer/> } />
          <Route path='/Cafeteras' element={ <ItemListContainer/> }  />
          <Route path=''  />
          <Route path=''  />

        </Routes>

          <ItemDetailContainer/>
          <Contador/> 
        
    </BrowserRouter>

  );
}

export default App;
