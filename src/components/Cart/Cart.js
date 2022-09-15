import { useContext } from "react";
import { Link } from "react-router-dom";
import CartContext from "../../context/CartContext";
import "../Cart/Cart.scss"



const Cart = () => {

    const {cart} = useContext(CartContext)

    return (

        <div className="cart-container">
            <Link to={"/"}><p>Seguir comprando</p></Link>
            <h2>Carrito</h2>
            <hr></hr>
            <h3>Productos</h3>

            { cart.map( (item) => (
            
            <div key={item.id} className="cart-product">

                <h3>{item.nombre}</h3>
                <hr/>
                <p>Descripcion del producto:{item.desc}</p>
                <hr/>
                <small>Cantidad: {item.cantidad}</small>
                <small>Precio: {item.precio}</small>

            </div>
            
            ))}
            
        </div>

    )

}

export default Cart;