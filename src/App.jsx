import "./App.css";
import About from "./components/About";
import Header from "./components/Header";
import Resume from "./components/Resume";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Projects from "./components/Projects";
import Skills from "./components/Skills";

function App() {
  return <>
    <Header/>
    <About/>
    <Skills/>
    <Projects/>
    <Resume/>
    <Contact/>
    <Footer/>
  </>;
}

export default App;
