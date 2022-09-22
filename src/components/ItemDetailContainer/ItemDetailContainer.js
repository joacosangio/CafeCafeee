import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "../ItemDetail/ItemDetail";
import Spinner from "../Spinner/Spinner";
import { doc, getDoc } from "firebase/firestore";
import { base } from "../../firebase/firebaseConfig";



const ItemDetailContainer = () => {


    const [item, setItem] = useState({})
    const {itemId} = useParams()
    const [spinner, setSpinner] = useState(true)


    useEffect (() => {

        const docRef = doc(base, "productos", itemId)

        getDoc(docRef)
        .then((doc) => {
            setItem({id: doc.id, ...doc.data()})
        })
        .finally(() =>{
            setSpinner(false)
        })
        
    },[])

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