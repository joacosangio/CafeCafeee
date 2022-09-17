import { stockProductos } from "../data/stockProductos"

export const pedirDatos = () => {
    return new Promise ((resolve, reject) => {
        setTimeout(() => {
            resolve (stockProductos)
            reject ("Upss... Algo salio mal")
        },1500)
    })
 }