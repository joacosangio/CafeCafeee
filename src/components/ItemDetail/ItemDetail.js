import { useState } from "react";
import Contador from "../Contador/Contador"

const ItemDetail = ( {item} ) => {

    const [cantidad, setCantidad] = useState(1)

    const handleAgregar = () => {
        console.log({
            ...item,
            cantidad
        })
    }

    return (

        <div className="detail-container">

          
         <div className="img">

            <img src={item.img} alt={item.alt} />

        </div>

            <div className="details">
            <h4>{item.nombre}</h4>
            <p>{item.detailDesc}</p>
            <hr/>
            <div>
                <span className="price">${item.precio} c/u</span>
                <Contador   limite = {item.stock}
                            contador = {cantidad}   
                            setContador = {setCantidad}
                            handleAgregar = { handleAgregar}                     
                />
                <span className="stock">Stock disponible: {item.stock}</span>
            </div>
            <hr/>
            </div>


        </div>

    );
}

export default ItemDetail;