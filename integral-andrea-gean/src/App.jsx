import'./App.css';
import Galeria from './components/galeria/galeria';
import Navbar from './components/header/navbar';
import Hero from './components/hero/hero';
import Contacto from './components/contacto/contacto';
import Sedes from './components/sedes/sedes';
import Footer from './components/footer/footer';

function App(){
  return(
    <>
      <Navbar/>
      <Hero nombre='Integral'/> {/* fines practicos */ }
      <Galeria/>
      <Contacto/>
      <Sedes/>
      <Footer/>
    </>
  );  
}

export default App