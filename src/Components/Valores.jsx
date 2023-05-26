import React, { Fragment, useEffect, useState } from "react";
import Estilos from "../Styles/StylesValues.module.css";

const Valores = () => {
  const [value, setValue] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getData = async () => {
      const info = await fetch("https://api.bluelytics.com.ar/v2/latest");
      const dolar_value = await info.json();
      setValue(dolar_value);
      setLoading(false);
    };
    getData();
  }, []);

  if (loading) {
    return <div>Cargando...</div>;
  }

  return (
    <Fragment>
      <section className={Estilos.mainSquare}>
        <div>
          <h2>Dolar Oficial</h2>
          {value.oficial && (
            <div>
              <h3>Venta: ${value.oficial.value_sell}</h3>
              <h3>Compra: ${value.oficial.value_buy}</h3>
              <h3>Promedio: ${value.oficial.value_avg}</h3>
            </div>
          )}
        </div>
        <div>
          <h2>Dolar Blue</h2>
          {value.blue && (
            <div>
              <h3>Venta: ${value.blue.value_sell}</h3>
              <h3>Compra: ${value.blue.value_buy}</h3>
              <h3>Promedio: ${value.blue.value_avg}</h3>
            </div>
          )}
        </div>
        <div>
          <h2>Euro Oficial</h2>
          {value.oficial_euro && (
            <div>
              <h3>Venta: ${value.oficial_euro.value_sell}</h3>
              <h3>Compra: ${value.oficial_euro.value_buy}</h3>
              <h3>Promedio: ${value.oficial_euro.value_avg}</h3>
            </div>
          )}
        </div>
        <div>
          <h2>Euro Blue</h2>
          {value.blue_euro && (
            <div>
              <h3>Venta: ${value.blue_euro.value_sell}</h3>
              <h3>Compra: ${value.blue_euro.value_buy}</h3>
              <h3>Promedio: ${value.blue_euro.value_avg}</h3>
            </div>
          )}
        </div>
      </section>
      <p className={Estilos.lastUpdate}>Last Update: {value.last_update}</p>
    </Fragment>
  );
};

export default Valores;
