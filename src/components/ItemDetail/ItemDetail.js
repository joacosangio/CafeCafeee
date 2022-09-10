import Contador from "../Contador/Contador"

const ItemDetail = ( {item} ) => {
    return (

        <div className="detail-container">

          
         <div className="img">

            <img src={item.img} alt={item.alt} />

        </div>

            <div className="details">
            <h4>{item.nombre}</h4>
            <p>{item.detailDesc}</p>
            <hr/>
            <div>
                <span className="price">${item.precio} c/u</span>
                <Contador prod = {item}/>
                <span className="stock">Stock disponible: {item.stock}</span>
            </div>
            <hr/>
            <button className="btn-agregar-carrito">Agregar al carrito</button>

            </div>


        </div>

    );
}

export default ItemDetail;