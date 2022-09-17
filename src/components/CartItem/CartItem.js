import { Icon } from "@iconify/react";
import { useContext } from "react";
import CartContext from "../../context/CartContext";



const CartItem = ({item}) => {

    const {eliminarItem} = useContext(CartContext)

    return (

        <div className="cart-product">

                <h3>{item.nombre}</h3>
                <hr/>
                <p>Descripcion del producto:{item.desc}</p>
                <hr/>
                <small>Cantidad: {item.cantidad}</small>
                <small>Precio: {item.precio}</small>
                <button onClick = {() => eliminarItem(item.id)} ><Icon icon="bi:trash" /></button>

            </div>

    )

}

export default CartItem;