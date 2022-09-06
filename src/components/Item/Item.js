import { Icon } from '@iconify/react';
import { Link } from 'react-router-dom';

export const Item = ({producto}) => {
    if (producto.stock !== 0) {
        return (
            <div className="producto">
                        <h4>{producto.nombre}</h4>
                        <img alt={producto.alt} src={producto.img} />
                        <p>{producto.descripcion}</p>
                        <div className="precio-info">
                        <span>${producto.precio} c/u</span>
                        <Link to={`/item/${producto.id}`}><Icon icon="ant-design:info-circle-filled" /></Link>
                        </div>
                    </div>
        )

    }
}