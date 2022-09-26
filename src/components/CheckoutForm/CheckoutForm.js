import { useContext, useState } from "react"
import { Navigate } from "react-router-dom"
import CartContext from "../../context/CartContext"
import "../CheckoutForm/CheckoutForm.scss"
import { addDoc, collection } from "firebase/firestore"
import { base } from "../../firebase/firebaseConfig"
import Swal from "sweetalert2"


const CheckoutForm = () => {

    const {cart, precioTotal, vaciarCarritoSinSwal} = useContext(CartContext)

    const [values, setValues] = useState({
        nombre: "",
        email: "",
        direccion: "",
        telefono: "",

    })

    const handleSubmit = (e) => {
        e.preventDefault()

        const oc = {
            comprador: values,
            items:cart,
            total:precioTotal(),
        }

        const ocRef = collection(base, "oc")
        
        addDoc(ocRef, oc)
            .then((doc) => {
                 Swal.fire({
                    icon:"success",
                    iconColor:"#fff",
                    title:"Compra exitosa!",
                    text: `Su numero de orden es: ${doc.id}`,
                    confirmButtonColor: '#26180C',
                    confirmButtonText: 'Perfecto!',
                    background: "#00563B",
                    color:"#fff"
                 })

                })
            .finally(vaciarCarritoSinSwal())


    }

    const handleInputChange = (e) => {

        setValues({
            ...values,
            [e.target.name]: e.target.value
        })

    }

    if (cart.length === 0) {
       return <Navigate to={"/"}/>
    }



    return(

        <div className = "form-container">

            <form className="form" onSubmit={handleSubmit}>


                <input 
                type={"text"} 
                placeholder="Ingresa tu nombre..."
                value={values.nombre}
                onChange={handleInputChange}
                name="nombre"
                />

                <input 
                type={"email"} 
                placeholder="Ingresa tu email..."
                value={values.email}
                onChange={handleInputChange}
                name="email"
                />

                <input 
                type={"text"} 
                placeholder="Ingresa tu dirección..."
                value={values.direccion}
                onChange={handleInputChange}
                name="direccion"
                />

                <input 
                type={"phone"} 
                placeholder="Ingresa un telefono de contacto..."
                value={values.contacto}
                onChange={handleInputChange}
                name="telefono"
                />

                <button className="btn-seguir-comprando" type="submit">Enviar</button>

            </form>

        </div>

    )


}

export default CheckoutForm;