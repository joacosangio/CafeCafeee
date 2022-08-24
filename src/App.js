import './components/Header/Header.scss';
import "./components/CartWidget/CartWidget.scss"
import "./components/ItemListContainer/ItemListContainer.scss";
import Navbar from "./components/Header/Header";
import ItemListContainer from './components/ItemListContainer/ItemListConteiner';


function App() {
  return (
    <div>
      <Navbar/>
      <ItemListContainer nombre="Cafe Colombiano" descripcion="El mejor café colombiano de la mas alta cálidad" precio="$1000"/>
      <ItemListContainer nombre="Cafe Brasilero" descripcion="El mejor café Brasilero de la mas alta cálidad" precio="$2000"/>
      <ItemListContainer nombre="Cafe Colombiano" descripcion="El mejor café colombiano de la mas alta cálidad" precio="$1000"/>
      <ItemListContainer nombre="Cafe Colombiano" descripcion="El mejor café colombiano de la mas alta cálidad" precio="$1000"/>
    </div>
  );
}

export default App;
