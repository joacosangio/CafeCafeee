import CartWidget from "../CartWidget/CartWidget"
import { Link } from "react-router-dom";
import Logo from "../Logo/Logo";

const Navbar = () => {
    return(
        <header className = "header-container">

        <div className="logo-container">

            <Logo/>

        </div>

        <div className="tittle-container">
        
            <h1><strong>C</strong>offee <strong>C</strong>odex</h1>
        </div>

        <nav className = "nav-links">
            <Link to = "/">Inicio</Link>
            <Link to = "/productos/Cafeteras">Cafeteras</Link>
            <Link to = "/productos/Cafes">Cafés</Link>
            <Link to = "/productos/Capsulas">Capsulas</Link>
            <CartWidget/>
        </nav>
            

        </header>
        
    )
}

export default Navbar