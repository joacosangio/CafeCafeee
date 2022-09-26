import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ItemList } from "../ItemList/ItemList";
import Spinner from "../Spinner/Spinner";
import { collection, getDocs, query, where } from "firebase/firestore";
import { base } from "../../firebase/firebaseConfig";


const ItemListContainer = () => {

    const [productos, setProductos] = useState([])
    const {categoria} = useParams()
    const [spinner, setSpinner] = useState(true)

    useEffect( () => {
        setSpinner(true)

        const productosRef = collection(base, "productos")

        const filtrado = categoria ? query(productosRef, where("categoria", "==", categoria)) : productosRef

        getDocs(filtrado)
            .then((resp) => {
               const productosBase = resp.docs.map( (doc) => ({id: doc.id , ...doc.data()}) )
               setProductos(productosBase)
               
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
        
         </div>
        }
        </>

        )
}       


export default ItemListContainer;