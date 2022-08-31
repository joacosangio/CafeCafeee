import { stockProductos } from "../data/stockProductos"

export const datos = () => {
    return new Promise ((resolve, reject) => {
        setTimeout(() => {
            resolve (stockProductos)
            reject ("Upss... Algo salio mal")
        },2000)
    })
 }