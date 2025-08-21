import './sedes.css';
function Sedes() {
    return (
        <div className="sedes">
            <section className="sedesHeader">
                <h1>Encuentra nuestra Sede más cercana</h1>
            </section>

            <div className="sedeContainer">
            <section className='sedesInner'>
                <h2>Estamos Trabajando para estar mas cerca a ti </h2>
                <div className="sedeCard">
                    <h2>🌿 Sede Campo</h2>
                    <p>Dirección: Av. Ejemplo 456, Zona Rural</p>
                    <p>Teléfono: (01) 876-5432</p>
                </div>

                <div className="sedeCard">
                    <h2>🏖️ Sede Playa</h2>
                    <p>Dirección: Av. Ejemplo 123, Costa Sur</p>
                    <p>Teléfono: (01) 234-5678</p>
                </div>
            </section>

            <section className='map'>
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7687.006728712224!2d-76.76440056002104!3d-11.975408786726385!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9105e8e42b3edcc1%3A0xda3d8a58666a740e!2sChalet%20Belga%20%22Pollos%20de%20leche%20a%20la%20brasa%22!5e0!3m2!1sen!2spe!4v1753071044216!5m2!1sen!2spe"
                    width="600"
                    height="450"
                    style={{ border: 0 }}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                />
            </section>
            </div>
        </div>
    );
}
export default Sedes;