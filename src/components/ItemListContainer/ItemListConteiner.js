const ItemListContainer = (props) => {

    const {id, nombre, descripcion, imagen, precio} = props
    console.log(id)

    return(
       <section className="productos">

        <h2 className="productos-tittle">PRODUCTOS</h2>

            <div className="productos-container">

                <div className="producto">
                    <h3>{nombre}</h3>
                    <img alt="Imagen de producto">{imagen}</img>
                    <p>{descripcion}</p>
                    <span>{precio}</span>
                </div>

            </div>

       </section>
    )
}

export default ItemListContainer;