import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import CartContext from "../../context/CartContext";
import Contador from "../Contador/Contador"

const ItemDetail = ( {item} ) => {

    const [cantidad, setCantidad] = useState(1)
    const {agregarAlCarrito, isInCart} = useContext(CartContext)

    const handleAgregar = () => {

        const itemEnCarrito = {
            
            id : item.id,
            nombre : item.nombre,
            cantidad,
            precio: item.precio * cantidad,
            desc: item.descripcion,
        }
        
        item.stock = item.stock - cantidad

        agregarAlCarrito(itemEnCarrito)
    }

    return (

        <div className="detail-container">

          
         <div className="img">

            <img src={item.img} alt={item.alt} />

        </div>

            <div className="details">
            <h4>{item.nombre}</h4>
            <p>{item.detailDesc}</p>
            <span className="stock">Stock disponible: {item.stock}</span>
            <hr/>

            <span className="price">${item.precio} c/u</span>
            {
                isInCart(item.id)
                ? <Link to={"/cart"}><button className="btn-comprar">Ir a comprar</button></Link>
                :<div>
                    <Contador   limite = { item.stock }
                                contador = { cantidad }   
                                setContador = { setCantidad }
                                handleAgregar = { handleAgregar }                     
                    />
                </div>
            }
            
            </div>


        </div>

    );
}

export default ItemDetail;