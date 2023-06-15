import { Fragment, useEffect, useState } from 'react';
import Valores from './Components/Valores';
import Calcu from './Components/Calcu';
import Styles from './Styles/App.module.css'
import Footer from './Components/Footer';
import CalcuPesos from './Components/CalcuPesos';

function App() {


  const [change, setChange] = useState(false);

  const changeMoney = () =>{ 
    setChange(!change);
  };

  useEffect(()=>{
    document.title = 'DolarPeso'
  })

  return (
    <Fragment>
      <h1 className={Styles.tituloGeneral}>Dolar x Peso Argentino</h1>
      <Valores />
      {change ? (
        <Calcu changeMoney={changeMoney}/>
        ) : (
          <CalcuPesos changeMoney={changeMoney}/>
        )}   
      <Footer />
    </Fragment>
  );

}

export default App;
