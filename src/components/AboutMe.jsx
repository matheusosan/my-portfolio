import React from "react";
import "./aboutMe.css";
// import MyPhoto from "../images/eu.jpg";
import Me from "../images/me.jpeg"
import { FaPhoneSquareAlt, FaLinkedin, FaGithubSquare, FaExternalLinkAlt } from 'react-icons/fa'
import { AiOutlineMail } from 'react-icons/ai'

export const Div1 = (props) => {
  return (
      <aside id="about-me">
        <img src={Me} alt="Minha Foto" id="eu" />
        <h3 id="first-child" >Minhas Informações</h3>

        <p className="about-itens">Email <AiOutlineMail className="about-svg" id="email"/>
        </p>
        <p className="about-text">{props.email} </p>
      
        <p className="about-itens">Contato <FaPhoneSquareAlt className="about-svg" id="phone"/>
        </p>
        <a href={props.whatsapp} className="about-text" target="_blank" rel="noreferrer">{props.contato} <FaExternalLinkAlt className="redirect-svg"/></a>
      
        <p className="about-itens">Perfil LinkedIn <FaLinkedin className="about-svg" id="linkedin"/></p>
          <a href={props.linkedin} className="about-text" target="_blank" rel="noreferrer">
            {props.linkedin} <FaExternalLinkAlt className="redirect-svg"/>
        </a>
      
        <p className="about-itens">GitHub <FaGithubSquare className="about-svg" id="github"/></p>
        <a href={props.github} className="about-text" target="_blank" rel="noreferrer"> {props.github} <FaExternalLinkAlt className="redirect-svg"/>
        </a>

        {/* <h3 className="about-itens">Download do meu currículo</h3>
        <a href="www.google.com" target="_blank">
          <button id="download-btn">Download</button>
        </a> */}
      </aside>
  );
};
