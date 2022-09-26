import CartContext from "../../context/CartContext";
import { useContext } from "react";
import { Link } from "react-router-dom";
import CartItem from "../CartItem/CartItem";




const CartConItem = () => {

    const {cart, precioTotal, vaciarCarrito,  } = useContext(CartContext)

    return(

        
        <div className="cart-con-item">

                <div className="cart-tittle">
                    <h3>Productos en el carrito</h3>
                </div>

                <>

                    {              
                        cart.map( (item) => (
                            <CartItem key={item.id} item = {item}/>
                        ))
                    }
                                
                </>
                        
                <div className="precio-cantidad-container">

                    <div className={cart.length === 0 ? "precio-vaciar-oculto" : "precio-vaciar-visible"}>

                        <span>Precio total: ${precioTotal()}</span>
                        <button onClick={vaciarCarrito} className="btn-vaciar">Vaciar carrito</button>
                        <Link to={"/"}><button className="btn-seguir-comprando">Seguir comprando</button></Link>
                        <Link to={"/checkoutForm"}><button className="btn-seguir-comprando">Ir a pagar</button></Link>      

                    </div>
                                    
                </div>

        </div>
        

    )


}

export default CartConItem;