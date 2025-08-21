import './galeria.css';
import p1 from '../../assets/img/p1.png';
import p2 from '../../assets/img/p2.png';
import p3 from '../../assets/img/p3.png';
import p4 from '../../assets/img/p4.png';
import p5 from '../../assets/img/p5.png';
import p6 from '../../assets/img/p6.png';

function Galeria() {
    return(
        <>
            <section className="galeria">
                <section className="galeriaInner">
                    <h1>el mejor sabor lo encuentras aqui</h1>
                    <section className="album">
                        <div className="img1"><img src={p1} alt="" /></div>
                        <div className="img2"><img src={p2} alt="" /></div>
                        <div className="img3"><img src={p3} alt="" /></div>
                        <div className="img4"><img src={p4} alt="" /></div>
                        <div className="img5"><img src={p5} alt="" /></div>
                        <div className="img6"><img src={p6} alt="" /></div>
                    </section>
                </section>
            </section> 
            
        </>
    );
}

export default Galeria;