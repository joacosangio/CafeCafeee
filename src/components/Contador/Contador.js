



const Contador = ({limite, contador, setContador, handleAgregar}) => {

    

    const handleSumar = () => {
        if (contador < limite) {

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

            <div className="contador-btn" >

                <button onClick={handleRestar} className ="btn-contador">-</button>

                    <span className ="contador-span">{contador}</span>

                <button onClick={handleSumar} className ="btn-contador">+</button>
                
            </div>
            
            <button onClick={handleAgregar} className="btn-agregar-carrito">Agregar al carrito</button>
            

            
        </div>

        
    )
}

export default Contador ;