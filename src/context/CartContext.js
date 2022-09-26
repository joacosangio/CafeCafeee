import { createContext } from "react";
import { useState } from "react";
import Swal from 'sweetalert2';
import ItemDetailContainer from "../components/ItemDetailContainer/ItemDetailContainer";



const CartContext = createContext()

export default CartContext;



export const CartProvider = ({children}) => {

    const [cart, setCart] = useState([])

    const agregarAlCarrito = (item) => {

        Swal.fire({
            title: "Producto agregado correctamente!",
            icon: "success",
            iconColor: "#fff",
            color:"#fff",
            confirmButtonColor: '#26180C',
            confirmButtonText: 'Perfecto!',
            cancelButtonColor: '#26180C',
            cancelButtonText: "Deshacer",
            background: "#00563B",
            showCancelButton: true,

        }).then((result) => {
            if(result.isConfirmed) {

                setCart([...cart, item])
            }
            else{
                <ItemDetailContainer/>
            }
        })


    }

    const isInCart = (id) => {

        return cart.some ((item) => item.id === id)

    }

    const cartCantidad = () => {

        return cart.reduce((acumulador, item) => acumulador + item.cantidad, 0)

    }

    const precioTotal = () => {

        return cart.reduce( (acc, item)  => acc + item.cantidad * item.precio, 0)

    }

    const vaciarCarrito = () => {
        Swal.fire({
            title: '¿Seguro quieres vaciar el carrito?',
            text: "Si vacias el carrito, no quedará nada adentro =(",
            icon: 'warning',
            color:"#fff",
            iconColor:"#fff",
            background:"#00563B",
            showCancelButton: true,
            confirmButtonColor: '#26180C',
            cancelButtonColor: '#26180C',
            confirmButtonText: 'Si, vaciar',
            cancelButtonText: "No, cancelar"
          }).then((result) => {
            if(result.isConfirmed) {
                setCart([])
            }
            else{
                setCart([...cart])
            }
          })

    }

    const vaciarCarritoSinSwal = () => {
        setCart([])
    }

    const eliminarItem = (id) => {

        setCart ( cart.filter ( (item) => item.id !== id) )

    }




    return (

        <CartContext.Provider value={ {
            cart,
            agregarAlCarrito,
            isInCart,
            cartCantidad,
            precioTotal,
            vaciarCarrito,
            eliminarItem,
            vaciarCarritoSinSwal
          }}>

            {children}

        </CartContext.Provider>


    )
}

