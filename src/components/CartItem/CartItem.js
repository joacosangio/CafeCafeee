



const CartItem = ({item}) => {

    return (

        <div className="cart-product">

                <h3>{item.nombre}</h3>
                <hr/>
                <p>Descripcion del producto:{item.desc}</p>
                <hr/>
                <small>Cantidad: {item.cantidad}</small>
                <small>Precio: {item.precio}</small>

            </div>

    )

}

export default CartItem;