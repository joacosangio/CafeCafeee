import CartWidget from "../CartWidget/CartWidget"

const Navbar = () => {
    return(
        <header className = "header-container">

        <div className = "logo-tittle">
            <h1>Coffe Codex</h1>

            <img  alt= "logo"/>

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