import { useState, useEffect } from "react";
import { pedirDatos } from "../../auxiliares/pedirDatos";
import ItemDetail from "../ItemDetail/ItemDetail";

const ItemDetailContainer = () => {


    const [item, setItem] = useState()


    useEffect (() => {
        pedirDatos()
            .then( (respuesta) => {
                setItem ( respuesta.find( (prod) => prod.id === item ) )
            } )
    }, [])

    return (

        <div>

            <ItemDetail/>

        </div>

    )


}

export default ItemDetailContainer;