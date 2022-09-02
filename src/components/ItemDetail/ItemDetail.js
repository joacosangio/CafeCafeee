import Contador from "../Contador/Contador"




const ItemDetail = (prod) => {

    return (

        <div className="detail-container">

            <h4>{prod.nombre}</h4>
            <img alt="123"/>
            <p>descripcion detallada</p>
            <span>precio</span>
            <span>stock</span>
            <button>Comprar</button>
            <Contador/>


        </div>

    )

}

export default ItemDetail;