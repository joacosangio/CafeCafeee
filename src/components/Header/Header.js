import CartWidget from "../CartWidget/CartWidget"

const Navbar = () => {
    return(
        <header className = "header-container">

        <div className="logo-container">

                <img className="logo"  alt= "logo"/>

        </div>

        <div className="tittle-container">
        
            <h1><strong>C</strong>offe <strong>C</strong>odex</h1>

        </div>

        <nav className = "nav-links">
            <a href = "./public/index.html">Sucursales</a>
            <a href = "./public/index.html"> Productos</a>
            <a href = "./public/index.html">Nosotros</a>
            <CartWidget/>
        </nav>
            

        </header>
        
    )
}

export default Navbar