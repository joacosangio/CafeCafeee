import "../Spinner/Spinner.scss"
import  logo from '../../assets/logos/logo.png'



const Spinner = () => {

    return(

        <div className="spinner-container">

            <div className="spinner-contenido">
                <img src={logo} className="logo"  alt= ""/>
            </div>

        </div>


    )

}

export default Spinner;