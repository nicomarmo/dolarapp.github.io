import React from "react";
import { Fragment } from "react";
import { GoMarkGithub } from "react-icons/go";
import { GoCode } from "react-icons/go";
import { GoStar } from "react-icons/go";
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
            <a href="https://github.com/nicomarmo/dolarapp.github.io" target="_blank" rel="noopener noreferrer"><GoCode className={Estilos.code} /></a>
          </li>
          <li>
            <a href="https://www.linkedin.com/in/marmonicolas/" target="_blank" rel="noopener noreferrer"><IoLogoLinkedin className={Estilos.linke} /></a>
          </li>
          <li>
            <a href="https://www.fifa.com/es/tournaments/mens/worldcup/1978argentina" target="_blank" rel="noopener noreferrer"><GoStar className={Estilos.star} /></a>
            <a href="https://www.fifa.com/es/tournaments/mens/worldcup/1986mexico" target="_blank" rel="noopener noreferrer"><GoStar className={Estilos.star} /></a>
            <a href="https://www.fifa.com/fifaplus/es/tournaments/mens/worldcup/qatar2022" target="_blank" rel="noopener noreferrer"><GoStar className={Estilos.star} /></a>
          </li>
        </ul>
      </footer>
    </Fragment>
  );
};

export default Footer;
