import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { pedirDatos } from "../../auxiliares/pedirDatos";
import ItemDetail from "../ItemDetail/ItemDetail";

const ItemDetailContainer = () => {


    const [item, setItem] = useState(null)
    const {itemId} = useParams()


    useEffect (() => {
        pedirDatos()
            .then( (respuesta) => {
                setItem ( respuesta.find( (prod) => prod.id === Number (itemId)  ) )
            } )
    })

    return (

        <div>

            <ItemDetail item= {item}/>

        </div>

    )


}

export default ItemDetailContainer;