import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { pedirDatos } from "../../auxiliares/pedirDatos";
import ItemDetail from "../ItemDetail/ItemDetail";
import Spinner from "../Spinner/Spinner";



const ItemDetailContainer = () => {


    const [item, setItem] = useState({})
    const {itemId} = useParams()
    const [spinner, setSpinner] = useState(true)


    useEffect (() => {
        pedirDatos()
            .then( (respuesta) => {
                setItem ( respuesta.find( (prod) => prod.id === Number (itemId)  ) )
            } )
            .finally(() => {
                setSpinner(false)
            })
    },[itemId])

    return (

        <>{
            
            spinner

            ?<Spinner/>

            :

            <div>

                <ItemDetail item= {item}/>

            </div>

        }
        </>


    )


}

export default ItemDetailContainer;