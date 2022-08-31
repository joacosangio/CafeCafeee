
import { Item } from '../Item/Item';

export const ItemList = ({productos = []} ) => {
    return (
        <div className='productos-container'>
            
            <h2 className="productos-tittle">PRODUCTOS</h2>

        <section className="productos">


            { productos.map( (producto) => {

                return <Item  producto={producto} key={producto.id} />

            } ) }
            

       </section>
        </div>
    )
} 