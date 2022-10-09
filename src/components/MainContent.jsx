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
    { id: "html", name: "HTML5", logo: <FaHtml5 />, description: "HTML5 é uma linguagem de marcação para a World Wide Web e é uma tecnologia chave da Internet, originalmente proposto por Opera Software. É a quinta versão da linguagem HTML."},
    { id: "css", name: "CSS3", logo: <FaCss3Alt />, description: "CSS3 é a terceira mais nova versão das famosas Cascading Style Sheets, pela qual se define estilos para um projeto web. Com efeitos de transição, imagem, imagem de fundo/background e outros, pode-se criar estilos únicos para seus projetos web, alterando diversos aspectos de design no layout da página." },
    { id: "sass", name: "SASS", logo: <FaSass />, description: "O SASS é uma linguagem de extensão do CSS, a sigla significa “Syntactically Awesome Style Sheets” traduzindo ao pé da letra, folhas de estilo com uma sintaxe incrível. A sua ideia é adicionar recursos especiais como variáveis, mixins, funções e operações e outras opções." },
    { id: "bootstrap", name: "BootStrap", logo: <FaBootstrap />, description: "Bootstrap é um framework web com código-fonte aberto para desenvolvimento de componentes de interface e front-end para sites e aplicações web, usando HTML, CSS e JavaScript, baseado em modelos de design para a tipografia, melhorando a experiência do usuário em um site amigável e responsivo." },
    { id: "javascript", name: "JavaScript", logo: <SiJavascript />, description: "JavaScript é uma linguagem de programação interpretada estruturada, de script em alto nível com tipagem dinâmica fraca e multiparadigma. Juntamente com HTML e CSS, o JavaScript é uma das três principais tecnologias da World Wide Web." },
    { id: "react", name: "ReactJS", logo: <FaReact />, description: "O React é uma biblioteca JavaScript de código aberto com foco em criar interfaces de usuário em páginas web. É mantido pelo Facebook, Instagram, outras empresas e uma comunidade de desenvolvedores individuais. É utilizado nos sites da Netflix, Imgur, Feedly, Airbnb, SeatGeek, HelloSign, Walmart e outros." },
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
                  {tech.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
};
