import { Icon } from "@iconify/react";
import { useContext } from "react";
import CartContext from "../../context/CartContext";
import "../CartItem/CartItem.scss"



const CartItem = ({item}) => {

    const {eliminarItem} = useContext(CartContext)

    return (

        <div className="cart-product">

                <div className="cart-item-tittle">
                    
                    <h3>{item.nombre}</h3>

                </div>


                <div className="cart-item-desc">

                    <p>Descripcion del producto: {item.desc}</p>

                </div>
                

                <div className="cart-item-price-cant">

                    <small>Cantidad: {item.cantidad}</small>
                    <small>Precio: {item.precio}</small>

                </div>

                <div className="cart-item-trash">
                    
                    <Icon className="icon-trash" onClick={() => eliminarItem(item.id)} icon="bi:trash" />

                </div>

            </div>

    )

}

export default CartItem;