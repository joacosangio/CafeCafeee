import { useEffect, useState } from "react";
import { datos } from "../../auxiliares/datos";
import { ItemList } from "../ItemList/ItemList";


const ItemListContainer = () => {

    const [productos, setProductos] = useState([])

    useEffect( () => {
        datos()
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