import './hero.css';
import imagen from '../../assets/img/heroimg.png';

function Hero(props){
    return(
        <>
            <section className="hero">
                <section className="heroInner">
                    <img src={imagen} alt="Microsoft" />
                    <div className="heroOverlay"></div>
                    <div className="heroText">
                        <div className="logoName">{props.nombre}</div>
                    </div>
                </section>
            </section>
        </>
    );
}

export default Hero;