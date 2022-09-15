import { useContext } from "react";
import { Link } from "react-router-dom";
import CartContext from "../../context/CartContext";
import "../Cart/Cart.scss"
import CartItem from "../CartItem/CartItem";



const Cart = () => {

    const {cart} = useContext(CartContext)

    return (

        <div className="cart-container">
            <Link to={"/"}><p>Seguir comprando</p></Link>
            <h2>Carrito</h2>
            <hr></hr>
            <h3>Productos</h3>

            { cart.map( (item) => (
            
                <CartItem key={item.id} item = {item}/>
            
            ))}
            
        </div>

    )

}

export default Cart;