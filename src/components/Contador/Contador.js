import { useState } from "react";



const Contador = () => {

    const [contador, setContador] = useState (1)

    const handleSumar = () => {
        if (contador < 10) {

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
        <div className ="container">

            <h1 className ="contador-tittle">Contador</h1>

        <div className="contador-container">

            <button onClick={handleRestar} className ="btn-contador">-</button>

                <span className ="contador-span">{contador}</span>

            <button onClick={handleSumar} className ="btn-contador">+</button>
            
        </div>

        </div>
    )
}

export default Contador ;