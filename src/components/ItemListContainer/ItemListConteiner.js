import { useEffect, useState } from "react";
import { pedirDatos } from "../../auxiliares/pedirDatos";
import { ItemList } from "../ItemList/ItemList";


const ItemListContainer = () => {

    const [productos, setProductos] = useState([])

    useEffect( () => {
        pedirDatos()
            .then ( (respuesta) => {
                setProductos(respuesta)
            })
            .catch( (error) => {
                console.log(error)
            })

    }, [])


    
    return(
       <div >
        <ItemList productos={productos}/>
       </div>
    )
}

export default ItemListContainer;