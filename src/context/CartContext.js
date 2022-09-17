import { createContext } from "react";
import { useState } from "react";



const CartContext = createContext()

export default CartContext;



export const CartProvider = ({children}) => {

    const [cart, setCart] = useState([])

    const agregarAlCarrito = (item) => {

        setCart([...cart, item])

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
            eliminarItem
          }}>

            {children}

        </CartContext.Provider>


    )
}

