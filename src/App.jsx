import { Fragment, useEffect } from 'react';
import Valores from './Components/Valores';
import Calcu from './Components/Calcu';
import Styles from './Styles/App.module.css'
import Footer from './Components/Footer';

function App() {

  useEffect(()=>{
    document.title = 'DolarPeso'
  })

  return (
    <Fragment>
      <h1 className={Styles.tituloGeneral}>Dolar x Peso Argentino</h1>
      <Valores />
      <Calcu />
      <Footer />
    </Fragment>
  );
}

export default App;

//casi responsive al 100%
