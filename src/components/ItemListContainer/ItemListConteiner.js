import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { pedirDatos } from "../../auxiliares/pedirDatos";
import HeroHome from "../HeroHome/HeroHome";
import { ItemList } from "../ItemList/ItemList";
import Spinner from "../Spinner/Spinner";


const ItemListContainer = () => {

    const [productos, setProductos] = useState([])
    const {categoria} = useParams()
    const [spinner, setSpinner] = useState(true)

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
            .finally(() => {
                setSpinner(false)
            })

    }, [categoria])

    
    return(

        <>{

        spinner

        ?<Spinner/>

        :<div>

            <ItemList productos={productos}/>
    
            <HeroHome/>
        </div>
        }
        </>

        )
}       


export default ItemListContainer;