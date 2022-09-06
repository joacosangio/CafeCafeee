import Contador from "../Contador/Contador"




const ItemDetail = ( {prod} ) => {
    return (

        <div className="detail-container">

            <h4>{prod.nombre}</h4>
            <img src={prod.img} alt="123" />
            <p>{prod.desc}</p>
            <span>{prod.precio}</span>
            <span>{prod.stock}</span>
            <Contador />
            <button>Agregar al carrito</button>


        </div>

    );
}

export default ItemDetail;