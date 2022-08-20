import './components/Header/Header.scss';
import "./components/CartWidget/CartWidget.scss"
import "./components/ItemListContainer/ItemListContainer.scss";
import Navbar from "./components/Header/Header";
import ItemListContainer from './components/ItemListContainer/ItemListConteiner';


function App() {
  return (
    <div>
      <Navbar/>
      <ItemListContainer/>
    </div>
  );
}

export default App;
