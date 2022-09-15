import { Icon } from '@iconify/react';
import { Link } from 'react-router-dom';

const CartWidget = () => {
    return (
        <div>
            <Link to={"/cart"}><Icon className='cart-icon' icon="akar-icons:cart" /></Link>
        </div>
    )
}

export default CartWidget;