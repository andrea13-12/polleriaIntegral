import './navbar.css';
import logo from '../../assets/img/logosf.png';

function Navbar() {
    return(
        <>
        <header className="encabezado">
            <nav className="menu">
                <a href=""  className='logo'><img src={logo} alt="" /></a>
                <ul className="opciones">
                    <li>
                        <a to='#'>CARTA</a>
                    </li>
                    <li>
                        <a to='#'>RESERVAS</a>
                    </li>
                    <li>
                        <a to="/sedes">DELIVERY</a>
                    </li>
                </ul>
            </nav>
        </header>
        </>
    );
}
export default Navbar;