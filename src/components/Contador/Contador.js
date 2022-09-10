import { useState } from "react";



const Contador = ({prod}) => {

    const [contador, setContador] = useState (1)

    const handleSumar = () => {
        if (contador < prod.stock) {

            setContador(contador + 1)
        }
        
    }

    const handleRestar = () => {
        if (contador > 1){

            setContador(contador - 1)
        }
    }

    // Los valores de la funcion sumar luego van a ir determinados segun el stock del producto

    return ( 

        <div className="contador-container">

            <button onClick={handleRestar} className ="btn-contador">-</button>

                <span className ="contador-span">{contador}</span>

            <button onClick={handleSumar} className ="btn-contador">+</button>
            
        </div>

        
    )
}

export default Contador ;