import './components/Header/Header.scss';
import "./components/CartWidget/CartWidget.scss";
import "./components/Contador/Contador.scss";
import "./components/ItemList/ItemList.scss";
import "./components/Item/Item.scss";
import Navbar from "./components/Header/Header";
import ItemListContainer from './components/ItemListContainer/ItemListConteiner';
import Contador from './components/Contador/Contador';


function App() {
  return (
    <div>
      <Navbar/>

      <ItemListContainer/>

      <Contador/>
    </div>
  );
}

export default App;
