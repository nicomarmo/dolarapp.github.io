import React, { Fragment, useEffect, useState } from "react";
import Estilos from "../Styles/Calcu.module.css";

const CalcuPesos = (props) => {

    const [inputValue, setInputValue] = useState(0)
    const [apiValueBlue, setApiValueBlue] = useState(0);
    const [apiValueOficial, setApiValueOficial] = useState(0);
    const [apiValueEuroBlue, setApiValueEuroBlue] = useState(0);
    const [apiValueEuroOficial, setApiValueEuroOficial] = useState(0);

    useEffect(()=>{
        const getData = async() => {
            const info = await fetch('https://api.bluelytics.com.ar/v2/latest')
            const dolar_value = await info.json() // Consumo la API (no pude traer los datos del otro archivo)
            setApiValueBlue(dolar_value.blue.value_avg) // Le doy al estado apiValueBlue el valor del 'dolar blue'
            setApiValueOficial(dolar_value.oficial.value_avg) // Le doy al estado apiValueBlue el valor del 'dolar oficial'
            setApiValueEuroBlue(dolar_value.blue_euro.value_avg) // Le doy al estado apiValueBlue el valor del 'euro blue'
            setApiValueEuroOficial(dolar_value.oficial_euro.value_avg) // Le doy al estado apiValueBlue el valor del 'euro oficial'
        }
        getData()
    }, [])

    const multiplicacion = (event) => {
        setInputValue(parseFloat(event.target.value)); // Le paso al estado inputValue lo que ingreso en el Input
        const value = event.target.value;
        setInputValue(value !== 0 ? value : 0);

    }

    const totalMultiBlue = inputValue / apiValueBlue
    const totalMultiOficial = inputValue / apiValueOficial
    const totalMultiEuroBlue = inputValue / apiValueEuroBlue
    const totalMultiEuroOficial = inputValue / apiValueEuroOficial // Multiplico ambos valores

    // console.log(totalMultiBlue + ' Valor de multi')
    // console.log('-------')
    // console.log(inputValue + ' Valor del input')
    // console.log('-------')
    // console.log(apiValueBlue + ' Valor de la api')
    // console.log('-------') //console.log de pruebas

  return (
    <Fragment>
        <h2 className={Estilos.tituloCalcu}>Calculadora de Conversión</h2>
        <form>
          <input type="text" pattern="[0-9]*" placeholder='Ingrese un valor en pesos' inputMode="numeric" name='num' autoComplete="off" onChange={multiplicacion}/> 
        </form>
        <div className={Estilos.botonContainer}>
        <button className={Estilos.botonChange} onClick={props.changeMoney}>DOLARES</button>
        </div>
      <div className={Estilos.inputSquare}>
        <ul className={Estilos.lista}>
            <li className={Estilos.resultado}>Dolar Blue: $ <b>{totalMultiBlue.toFixed(2)}</b> u$d</li>
            <li className={Estilos.resultado}>Dolar Oficial: $ <b>{totalMultiOficial.toFixed(2)}</b> u$d</li>
            <li className={Estilos.resultado}>Euro Blue: $ <b>{totalMultiEuroBlue.toFixed(2)}</b> u$d</li>
            <li className={Estilos.resultado}>Euro Oficial: $ <b>{totalMultiEuroOficial.toFixed(2)}</b> u$d</li>
        </ul>
      </div>
    </Fragment>
  );
};

export default CalcuPesos;
