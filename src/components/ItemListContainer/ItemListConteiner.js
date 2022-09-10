import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { pedirDatos } from "../../auxiliares/pedirDatos";
import HeroHome from "../HeroHome/HeroHome";
import { ItemList } from "../ItemList/ItemList";


const ItemListContainer = () => {

    const [productos, setProductos] = useState([])
    const {categoria} = useParams()

    useEffect( () => {
        pedirDatos()
            .then ( (respuesta) => {
                if (!categoria) {
                    setProductos(respuesta)
                }else {
                    setProductos ( respuesta.filter( (prod) => prod.categoria === categoria))
                }
            })
            .catch( (error) => {
                console.log(error)
            })

    }, [categoria])

    


    
    return(
       <div >

        <ItemList productos={productos}/>

        <HeroHome/>
       </div>
    )
}

export default ItemListContainer;