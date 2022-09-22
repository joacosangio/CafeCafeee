import { Icon } from '@iconify/react';
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import CartContext from '../../context/CartContext';

const CartWidget = () => {

    const {cartCantidad, cart} = useContext(CartContext)

    return (


            cart.length === 0
            ?
            
            <div className='cart-widg-container'>

                <Link to={"/cart"}><Icon className='cart-icon' icon="akar-icons:cart" /></Link>

            </div>
            :

            <div className='cart-widg-container'>
                <Link to={"/cart"}><Icon className='cart-icon' icon="akar-icons:cart" /></Link>
                <span>{cartCantidad()}</span>
            </div>
        
        
    )
}

export default CartWidget;