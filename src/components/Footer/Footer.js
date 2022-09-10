import "../Footer/Footer.scss"
import { Icon } from '@iconify/react';



const Footer = () => {
    return(
        <footer className="footer-container">
            <div className="footer-tittle">
                <h4><strong>C</strong>offee <strong>C</strong>odex</h4>
            </div>
            
            <div className="footer-links">
                <a href="/">Inicio <Icon className="footer-icon" icon="ant-design:home-filled" /></a>
                <a href="https://www.instagram.com/joacosangio/">Instagram  <Icon className="footer-icon" icon="akar-icons:instagram-fill" /></a>
                <a href="https://www.linkedin.com/in/joaquin-sangiorgi-2b5903206/">Linkedin  <Icon className="footer-icon" icon="akar-icons:linkedin-box-fill" /></a>
                <a href="https://github.com/joacosangio">GitHub <Icon className="footer-icon" icon="cib:github" /></a>

            </div>
            
        </footer>
    )
}

export default Footer;