import {
  FaHtml5,
  FaCss3Alt,
  FaBootstrap,
  FaReact,
  FaSass,
} from "react-icons/fa";
import { SiJavascript } from "react-icons/si";

import "./mainContent.css";

export const Div2 = () => {
  const technologies = [
    { id: "html", name: "HTML5", logo: <FaHtml5 /> },
    { id: "css", name: "CSS3", logo: <FaCss3Alt /> },
    { id: "bootstrap", name: "BootStrap", logo: <FaBootstrap /> },
    { id: "sass", name: "SASS", logo: <FaSass /> },
    { id: "javascript", name: "JavaScript", logo: <SiJavascript /> },
    { id: "react", name: "ReactJS", logo: <FaReact /> },
  ];

  return (
    <main id="div2">
      <div id="main">
        <h3>Sobre mim</h3>
        <p>
          Olá, seja bem-vindo ao meu portfólio. <br />
          Meu nome é Matheus de Oliveira, atualmente trabalho como auxiliar
          administrativo. Há poucos meses atrás, fui apresentado ao mundo da
          programação por um antigo professor, que me recomendou o curso de
          JavaScript do canal Curso Em Video, como sempre fui curioso em saber
          como as coisas funcionam por debaixo dos panos, fui me aprofundando no
          assunto. 
          Atualmente, busco cada vez mais me especializar em tecnologias que já conheço e as que ainda estão por vir em minha caminhada, com o
          objetivo de transitar de carreira e ingressar na minha primeira
          vaga de tecnologia com cargo de programador front-end, posteriormente, almejando alcançar o full-stack.
        </p>
      </div>
      
      <div id="skills">
        <h3>
          Abaixo, deixo listado algumas tecnologias as quais tenho estudado e
          adquirido conhecimento.
        </h3>

        <div id="tecs-grid">
          {technologies.map((tech) => (
            <div className="tec-item" id={tech.id} key={tech.id}>
              {tech.logo}
              <div className="tech-about">
                <h3>{tech.name}</h3>
                <p>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Deserunt beatae quis dolorum laboriosam asperiores nesciunt
                  neque possimus nostrum deleniti molestias maiores dolor
                  exercitationem facere tempora, inventore sequi. Optio, ducimus
                  ea?
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
};
