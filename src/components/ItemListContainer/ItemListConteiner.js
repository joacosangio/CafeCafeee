const ItemListContainer = (props) => {

const stockProductos = [
{
    id: 1,
    nombre: "Café Colombiano",
    img: "",
    descripcion: "El mejor café colombiano en grano y de la mas alta calidad",
    precio: 1500,
    stock: 32,
},
{
    id: 2,
    nombre: "Café Brasilero",
    img: "",
    descripcion: "El mejor café brasilero en grano y de la mas alta calidad",
    precio: 2500,
    stock: 12,
},
{
    id: 3,
    nombre: "Café Arabe",
    img: "",
    descripcion: "El mejor café arabe en grano y de la mas alta calidad",
    precio: 3500,
    stock: 22,
},
{
    id: 4,
    nombre: "Café Colombiano",
    img: "",
    descripcion: "El mejor café colombiano molido y de la mas alta calidad",
    precio: 900,
    stock: 34,
},
{
    id: 5,
    nombre: "Café Brasilero",
    img: "",
    descripcion: "El mejor café Brasilero molido y de la mas alta calidad",
    precio: 1500,
    stock: 19,
},
{
    id: 6,
    nombre: "Café Colombiano",
    img: "",
    descripcion: "El mejor café colombiano en grano y de la mas alta calidad",
    precio: 1500,
    stock: 32,
},

console.log(stockProductos)
]

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