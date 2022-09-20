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

            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#fff" fill-opacity="0.5" d="M0,192L6.2,165.3C12.3,139,25,85,37,74.7C49.2,64,62,96,74,128C86.2,160,98,192,111,202.7C123.1,213,135,203,148,202.7C160,203,172,213,185,229.3C196.9,245,209,267,222,256C233.8,245,246,203,258,160C270.8,117,283,75,295,90.7C307.7,107,320,181,332,218.7C344.6,256,357,256,369,256C381.5,256,394,256,406,245.3C418.5,235,431,213,443,197.3C455.4,181,468,171,480,192C492.3,213,505,267,517,282.7C529.2,299,542,277,554,229.3C566.2,181,578,107,591,69.3C603.1,32,615,32,628,53.3C640,75,652,117,665,117.3C676.9,117,689,75,702,90.7C713.8,107,726,181,738,224C750.8,267,763,277,775,272C787.7,267,800,245,812,202.7C824.6,160,837,96,849,101.3C861.5,107,874,181,886,181.3C898.5,181,911,107,923,106.7C935.4,107,948,181,960,208C972.3,235,985,213,997,176C1009.2,139,1022,85,1034,74.7C1046.2,64,1058,96,1071,122.7C1083.1,149,1095,171,1108,197.3C1120,224,1132,256,1145,229.3C1156.9,203,1169,117,1182,101.3C1193.8,85,1206,139,1218,154.7C1230.8,171,1243,149,1255,138.7C1267.7,128,1280,128,1292,122.7C1304.6,117,1317,107,1329,106.7C1341.5,107,1354,117,1366,138.7C1378.5,160,1391,192,1403,192C1415.4,192,1428,160,1434,144L1440,128L1440,0L1433.8,0C1427.7,0,1415,0,1403,0C1390.8,0,1378,0,1366,0C1353.8,0,1342,0,1329,0C1316.9,0,1305,0,1292,0C1280,0,1268,0,1255,0C1243.1,0,1231,0,1218,0C1206.2,0,1194,0,1182,0C1169.2,0,1157,0,1145,0C1132.3,0,1120,0,1108,0C1095.4,0,1083,0,1071,0C1058.5,0,1046,0,1034,0C1021.5,0,1009,0,997,0C984.6,0,972,0,960,0C947.7,0,935,0,923,0C910.8,0,898,0,886,0C873.8,0,862,0,849,0C836.9,0,825,0,812,0C800,0,788,0,775,0C763.1,0,751,0,738,0C726.2,0,714,0,702,0C689.2,0,677,0,665,0C652.3,0,640,0,628,0C615.4,0,603,0,591,0C578.5,0,566,0,554,0C541.5,0,529,0,517,0C504.6,0,492,0,480,0C467.7,0,455,0,443,0C430.8,0,418,0,406,0C393.8,0,382,0,369,0C356.9,0,345,0,332,0C320,0,308,0,295,0C283.1,0,271,0,258,0C246.2,0,234,0,222,0C209.2,0,197,0,185,0C172.3,0,160,0,148,0C135.4,0,123,0,111,0C98.5,0,86,0,74,0C61.5,0,49,0,37,0C24.6,0,12,0,6,0L0,0Z"></path></svg>        
            <HeroHome/>
        
         </div>
        }
        </>

        )
}       


export default ItemListContainer;