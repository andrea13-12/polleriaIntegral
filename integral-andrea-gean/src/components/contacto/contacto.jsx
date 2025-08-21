import './contacto.css';
import { FaGlobe, FaPhone, FaWhatsapp, FaMotorcycle } from 'react-icons/fa';
import chicken from '../../assets/img/chicken.png';

function Contacto() {
    return (
        <div className="contacto">
            <section className="contactoHeader">
                <h1>Pide por <br></br> donde Prefieras.</h1>
                <img src={chicken} alt="" />
            </section>

            <section className='contactoInner' >
                <div>
                    <FaGlobe size={50} />
                    <h2>Web</h2>

                </div>
                <div>
                    <FaPhone size={50} />
                    <h2>Telefono</h2>
                </div>

                <div>
                    <FaWhatsapp size={50} />
                    <h2>WhatssApp</h2>
                </div>

                <div>
                    <FaMotorcycle size={50} />
                    <h2>Rappi</h2>
                </div>
            </section>
        </div>
    );
}
export default Contacto;