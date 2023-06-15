import React from "react";
import { Fragment } from "react";
import { GoMarkGithub } from "react-icons/go";
import { IoLogoLinkedin } from "react-icons/io";
import Estilos from "../Styles/Footer.module.css";

const Footer = () => {
  return (
    <Fragment>
      <footer>
        <ul className={Estilos.listaFooter}>
          <li>
            <a href="https://github.com/nicomarmo" target="_blank" rel="noopener noreferrer"><GoMarkGithub className={Estilos.git} /></a>
          </li>
          <li>
            <p className={Estilos.dataDevFoot}>Developed by Nicolás Marmo</p>
          </li>
          <li>
            <a href="https://www.linkedin.com/in/marmonicolas/" target="_blank" rel="noopener noreferrer"><IoLogoLinkedin className={Estilos.linke} /></a>
          </li>
        </ul>
      </footer>
    </Fragment>
  );
};

export default Footer;
