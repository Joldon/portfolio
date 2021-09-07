// import "bootstrap/dist/css/bootstrap.css";
import './App.css';
import Projects from './components/Projects';
import Header from './components/Header';
import About from './components/About'
// import Skills from './components/Skills'
import './custom.scss'

function App() {
  return (
    <main className="App">
     <h2>JOLDON KUTMANALIEV</h2>
     <Header />
     <About />
     {/* <Skills /> */}
     <Projects />
    </main>
  );
}

export default App;
