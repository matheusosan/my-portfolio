import "./App.css";
import { Div1 } from "./components/AboutMe";
import { Div2 } from "./components/MainContent";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";


function App(props) {
  return (
    <div className="App">
      <Header />
      <div id="portfolio">
        <Div1
          whatsapp="https://wa.me/+5551986555481"
          email="matheussantanaoli@gmail.com"
          contato="(51) 98655-5481"
          linkedin="https://linkedin.com/in/matheusosan"
          github="https://github.com/matheusosan"
        />
        <Div2 />
      </div>
      <Footer />
    </div>
  );
}

export default App;
