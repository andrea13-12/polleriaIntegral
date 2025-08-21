import { FaFacebookF, FaInstagram, FaTwitter, FaPhoneAlt, FaEnvelope } from "react-icons/fa";
import './Footer.css';

function Footer() {
    return (
        <footer className="footer">
            <div className="footerContent">
                <div className="footerSection">
                    <h3>Contacto</h3>
                    <p><FaPhoneAlt /> (01) 123-4567</p>
                    <p><FaEnvelope /> contacto@ejemplo.com</p>
                </div>

                <div className="footerSection">
                    <h3>Síguenos</h3>
                    <div className="socialIcons">
                        <a href="#"><FaFacebookF /></a>
                        <a href="#"><FaInstagram /></a>
                        <a href="#"><FaTwitter /></a>
                    </div>
                </div>

                <div className="footerSection">
                    <h3>¿Sabías qué?</h3>
                    <p>Nuestras sedes en el campo y la playa están ubicadas estratégicamente para que disfrutes de la naturaleza y el descanso sin complicaciones.</p>
                </div>
            </div>

            <div className="footerBottom">
                <p>&copy; 2025 TuEmpresa S.A.C. | Todos los derechos reservados.</p>
            </div>
        </footer>
    );
}

export default Footer;
