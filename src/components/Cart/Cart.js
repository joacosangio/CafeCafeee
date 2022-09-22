import { useContext } from "react";
import { Link } from "react-router-dom";
import CartContext from "../../context/CartContext";
import "../Cart/Cart.scss"
import CartConItem from "../CartConItem/CartConItem";




const Cart = () => {
    
    const { cart } = useContext(CartContext)
    
    

    return (
            <div className="cart-container">
              
              <>
                {
                    cart.length === 0
                    ? <div className="cart-vacio">
                        
                        <h2>Tu carrito está vacio</h2>
                        <Link to={"/"}><button className="btn-seguir-comprando">Ir a comprar</button></Link>
                    
                    </div>

                    :<CartConItem/>

                }
              </>

            </div>
    )

}

export default Cart;